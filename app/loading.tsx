import { Container } from "@/components/layout/container";

export default function Loading() {
  return (
    <Container className="py-20">
      <div className="paper-card animate-pulse rounded-[2rem] p-10">
        <div className="h-4 w-32 rounded-full bg-line/60" />
        <div className="mt-6 h-8 w-2/3 rounded-full bg-line/60" />
        <div className="mt-4 h-4 w-full rounded-full bg-line/50" />
        <div className="mt-3 h-4 w-5/6 rounded-full bg-line/50" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="h-44 rounded-[1.5rem] bg-line/40" />
          <div className="h-44 rounded-[1.5rem] bg-line/40" />
          <div className="h-44 rounded-[1.5rem] bg-line/40" />
        </div>
      </div>
    </Container>
  );
}
