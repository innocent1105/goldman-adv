import { cn } from "@/lib/utils";

const LOGO_URL = "/goldman_logo.webp";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={LOGO_URL}
      alt="Goldman Advisors & Investors"
      className={cn("h-14 w-auto object-contain", className)}
    />
  );
}
