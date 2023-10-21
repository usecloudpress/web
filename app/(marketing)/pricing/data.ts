export const tiers: {
  name: "Solo" | "Pro" | "Agency";
  title: string;
  id: string;
  featured: boolean;
  price: {
    monthly: string;
    annually: string;
  };
  description: string;
  features: string[];
  mostPopular: boolean;
}[] = [
  {
    name: "Solo",
    title: "Solo",
    id: "tier-solo",
    featured: false,
    price: { monthly: "$29", annually: "$290" },
    description:
      "For solo bloggers with a limited number of exports each month.",
    features: [
      "50 exports per month",
      "Unlimited Google Docs conversions",
      "1 CMS connection",
      "Automation features",
      "1 user",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    title: "Pro",
    id: "tier-pro",
    featured: true,
    price: { monthly: "$49", annually: "$490" },
    description:
      "For companies that want to export a lot of documents to multiple CMSs.",
    features: [
      "Unlimited exports",
      "Unlimited Google Docs conversions",
      "10 CMS connections",
      "Automation features",
      "Unlimited users",
      "User roles",
    ],
    mostPopular: true,
  },
  {
    name: "Agency",
    title: "Agency",
    id: "tier-agency",
    featured: false,
    price: { monthly: "$89", annually: "$890" },
    description:
      "For agencies that export to multiple CMSs on behalf of clients.",
    features: [
      "Unlimited exports",
      "Unlimited Google Docs conversions",
      "Unlimited CMS connections",
      "Automation features",
      "Unlimited users",
      "User roles",
    ],
    mostPopular: false,
  },
];
