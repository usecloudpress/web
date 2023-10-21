import { tiers } from "./data";
import clsx from "clsx";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";

const sections: {
  name: string;
  features: {
    name: string;
    tiers: {
      Solo: string | boolean;
      Pro: string | boolean;
      Agency: string | boolean;
    };
  }[];
}[] = [
  {
    name: "Connections",
    features: [
      {
        name: "Source connections",
        tiers: {
          Solo: "Unlimited",
          Pro: "Unlimited",
          Agency: "Unlimited",
        },
      },
      {
        name: "CMS connections",
        tiers: {
          Solo: "1",
          Pro: "10",
          Agency: "Unlimited",
        },
      },
    ],
  },
  {
    name: "Export clients",
    features: [
      {
        name: "Export Content page",
        tiers: {
          Solo: true,
          Pro: true,
          Agency: true,
        },
      },
      {
        name: "Google Workspace Add-on",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Cloudpress API",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
    ],
  },
  {
    name: "Content export features",
    features: [
      {
        name: "Export content with correct formatting",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Export images",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Advanced formatting",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Generates embeds",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Exports additional field values",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
    ],
  },
  {
    name: "Integrations",
    features: [
      {
        name: "Google Docs",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Notion",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "WordPress",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Webflow",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Contentful",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Sanity",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Kontent.ai",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
    ],
  },
  {
    name: "Automation",
    features: [
      {
        name: "Collections",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Cloudpress API",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Zapier integration",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Make.com integration",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
    ],
  },
  {
    name: "Content Conversion (via API)",
    features: [
      {
        name: "Convert Google Docs to Markdown",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Convert Google Docs to HTML",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
    ],
  },
  {
    name: "User Management",
    features: [
      {
        name: "Users",
        tiers: {
          Solo: "1",
          Pro: "Unlimited",
          Agency: "Unlimited",
        },
      },
      {
        name: "Roles",
        tiers: { Solo: false, Pro: true, Agency: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Email support",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
    ],
  },
];

export default function FeatureComparison() {
  return (
    <section className="relative bg-white lg:pt-14 hidden md:block">
      <div className="mx-auto max-w-7xl py-12 px-6 sm:pb-24 sm:pt-8 lg:px-8">
        <div aria-labelledby="comparison-heading">
          <h2 className="text-center text-4xl font-bold pb-12">
            Feature comparison
          </h2>

          <div className="grid grid-cols-4 gap-x-8 border-t border-slate-900/10 before:block">
            {tiers.map((tier) => (
              <div key={tier.id} aria-hidden="true" className="-mt-px">
                <div
                  className={clsx(
                    tier.featured ? "border-blue-600" : "border-transparent",
                    "border-t-2 pt-10"
                  )}
                >
                  <p
                    className={clsx(
                      tier.featured ? "text-blue-600" : "text-slate-900",
                      "text-sm font-semibold leading-6"
                    )}
                  >
                    {tier.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {tier.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-16">
            {sections.map((section) => (
              <div key={section.name}>
                <h3 className="text-sm font-semibold leading-6 text-slate-900">
                  {section.name}
                </h3>
                <div className="relative -mx-8 mt-2">
                  {/* Fake card backgrounds */}
                  <div
                    className="absolute inset-y-0 inset-x-8 grid grid-cols-4 gap-x-8 before:block"
                    aria-hidden="true"
                  >
                    <div className="h-full w-full rounded-lg bg-slate-50 shadow-sm" />
                    <div className="h-full w-full rounded-lg bg-slate-50 shadow-sm" />
                    <div className="h-full w-full rounded-lg bg-slate-50 shadow-sm" />
                  </div>

                  <table className="relative w-full border-separate border-spacing-x-8">
                    <thead>
                      <tr className="text-left">
                        <th scope="col">
                          <span className="sr-only">Feature</span>
                        </th>
                        {tiers.map((tier) => (
                          <th key={tier.id} scope="col">
                            <span className="sr-only">{tier.name} tier</span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.features.map((feature, featureIdx) => (
                        <tr key={feature.name}>
                          <th
                            scope="row"
                            className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-slate-900"
                          >
                            {feature.name}
                            {featureIdx !== section.features.length - 1 ? (
                              <div className="absolute inset-x-8 mt-3 h-px bg-slate-200" />
                            ) : null}
                          </th>
                          {tiers.map((tier) => (
                            <td
                              key={tier.id}
                              className="relative w-1/4 px-4 py-0 text-center"
                            >
                              <span className="relative h-full w-full py-3">
                                {typeof feature.tiers[tier.name] ===
                                "string" ? (
                                  <span
                                    className={clsx(
                                      tier.featured
                                        ? "font-semibold text-blue-600"
                                        : "text-slate-900",
                                      "text-sm leading-6"
                                    )}
                                  >
                                    {feature.tiers[tier.name]}
                                  </span>
                                ) : (
                                  <>
                                    {feature.tiers[tier.name] === true ? (
                                      <CheckIcon
                                        className="mx-auto h-5 w-5 text-blue-600"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <XMarkIcon
                                        className="mx-auto h-5 w-5 text-slate-400"
                                        aria-hidden="true"
                                      />
                                    )}

                                    <span className="sr-only">
                                      {feature.tiers[tier.name] === true
                                        ? "Yes"
                                        : "No"}
                                    </span>
                                  </>
                                )}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Fake card borders */}
                  <div
                    className="pointer-events-none absolute inset-y-0 inset-x-8 grid grid-cols-4 gap-x-8 before:block"
                    aria-hidden="true"
                  >
                    {tiers.map((tier) => (
                      <div
                        key={tier.id}
                        className={clsx(
                          tier.featured
                            ? "ring-2 ring-blue-600"
                            : "ring-1 ring-slate-900/10",
                          "rounded-lg"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
