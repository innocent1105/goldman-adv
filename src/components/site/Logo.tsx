import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "footer" | "white";
}) {
  const isWhite = variant === "white";
  const isFooter = variant === "footer";

  const blueColor = isWhite ? "white" : "#1e3a8a";
  const goldColor = "#d4a843";
  const blueTextColor = isWhite ? "white" : "#1e3a8a";
  const goldTextColor = isWhite ? "#fbbf24" : "#d4a843";

  return (
    <div>
      <img src="/goldman-logo.png" alt="Goldman Advisors & Investors" className={cn("h-20 w-34  object-contain", isFooter && "h-14", className)} />
    </div>
  );
}