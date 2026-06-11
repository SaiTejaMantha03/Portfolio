import { USER, GITHUB_USERNAME as _GH_USER } from "@/features/portfolio/data";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: "https://mst-dev.vercel.app",
  ogImage: USER.ogImage ?? "/images/preview-card-dark.png",
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
];

export const GITHUB_USERNAME = _GH_USER ?? USER.githubUsername ?? "";
export const SOURCE_CODE_GITHUB_REPO = `${GITHUB_USERNAME}/Portfolio`;
export const SOURCE_CODE_GITHUB_URL = `https://github.com/${GITHUB_USERNAME}/Portfolio`;

export const UTM_PARAMS = {
  utm_source: "mst-dev.vercel.app",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};

export const siteConfig = {
  ogImage: USER.ogImage ?? "/images/preview-card-dark.png",
};
