export type SectionKey = "approach" | "financial" | "public" | "ai" | "asset" | "development";

export const SECTION_PATH: Record<SectionKey, string> = {
  approach: "/approach",
  financial: "/financial",
  public: "/public-sector",
  ai: "/ai-ict",
  asset: "/asset-management",
  development: "/development",
};

export const SECTION_KEYS: SectionKey[] = [
  "approach",
  "financial",
  "public",
  "ai",
  "asset",
  "development",
];

export const CONTACT_LINK = "/#contact";
