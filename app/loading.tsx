import { Container } from "@/components/layout/container";

export default function Loading() {
  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-20">
      <div
        aria-label="Đang tải"
        className="h-12 w-12 animate-spin rounded-full border-4 border-line/45 border-t-brick"
        role="status"
      />
    </Container>
  );
}
