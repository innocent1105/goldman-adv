import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "flex items-center overflow-hidden rounded-md border border-primary/20 bg-background/60",
        className,
      )}
      role="group"
      aria-label={language === "en" ? "Choose language" : "Choisir la langue"}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={cn(
          "px-3 py-1.5 text-xs font-semibold tracking-wider transition-colors",
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-primary",
        )}
      >
        EN
      </button>
      <span className="h-4 w-px bg-primary/20" />
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
        className={cn(
          "px-3 py-1.5 text-xs font-semibold tracking-wider transition-colors",
          language === "fr"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-primary",
        )}
      >
        FR
      </button>
    </div>
  );
}
