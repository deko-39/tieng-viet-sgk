import { createClient, type RedisClientType } from "redis";

const DEFAULT_SITE_URL = "https://tieng-viet-sgk.vercel.app";

const DEPLOYMENT_LABEL_KEY_PREFIX = "tiengviet:last-deployment-label";

let redisClientPromise: Promise<RedisClientType> | null = null;
let deploymentLabelPromise: Promise<string> | null = null;

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return null;
  }

  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return null;
  }

  const withProtocol = /^https?:\/\//i.test(trimmedValue)
    ? trimmedValue
    : `https://${trimmedValue}`;

  try {
    const url = new URL(withProtocol);

    if (
      url.hostname === "localhost" ||
      url.hostname.endsWith(".example") ||
      url.hostname === "example"
    ) {
      return null;
    }

    return url.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

const resolvedSiteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.SITE_URL) ??
  normalizeSiteUrl(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined,
  ) ??
  DEFAULT_SITE_URL;

export const siteConfig = {
  name: "Thư viện thơ và văn Việt Nam",
  description:
    "Thư viện trực tuyến dành cho thơ, đoạn văn và trang sách quen thuộc với nhiều thế hệ học sinh Việt Nam.",
  url: resolvedSiteUrl,
};

export function formatDeploymentTimestamp(date = new Date()) {
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(date);
}

function resolveDeploymentIdentifier() {
  return (
    process.env.VERCEL_DEPLOYMENT_ID ??
    process.env.VERCEL_GIT_COMMIT_SHA ??
    process.env.VERCEL_URL ??
    "local-development"
  );
}

function resolveDeploymentLabelKey() {
  return `${DEPLOYMENT_LABEL_KEY_PREFIX}:${resolveDeploymentIdentifier()}`;
}

async function getRedisClient() {
  if (!process.env.REDIS_URL) {
    throw new Error("REDIS_URL is not configured.");
  }

  redisClientPromise ??= (async () => {
    const client = createClient({ url: process.env.REDIS_URL });

    client.on("error", (error) => {
      console.error("Redis client error", error);
    });

    if (!client.isOpen) {
      await client.connect();
    }

    return client;
  })();

  return redisClientPromise;
}

async function resolveDeploymentLabel() {
  const fallbackLabel = formatDeploymentTimestamp();

  if (!process.env.REDIS_URL) {
    return fallbackLabel;
  }

  try {
    const client = await getRedisClient();
    const key = resolveDeploymentLabelKey();
    const cachedLabel = await client.get(key);

    if (cachedLabel) {
      return cachedLabel;
    }

    await client.set(key, fallbackLabel, {
      NX: true,
    });

    return (await client.get(key)) ?? fallbackLabel;
  } catch (error) {
    console.error("Failed to resolve deployment label from Redis", error);
    return fallbackLabel;
  }
}

export async function getLastDeploymentLabel() {
  deploymentLabelPromise ??= resolveDeploymentLabel();

  return deploymentLabelPromise;
}

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, siteConfig.url).toString();
}
