import {
  AffiliateCmsSupportIcon,
  AffiliateInnovationIcon,
  AffiliateSingularFocusIcon,
  AffiliateSupportIcon,
} from "../../../components/icons";

const whyItems = [
  {
    name: "Singular focus",
    description:
      "We are 100% focused on improving the publishing workflow for bloggers and content writers.",
    icon: AffiliateSingularFocusIcon,
  },
  {
    name: "Top-tier Support",
    description:
      "Our support is top-tier, and our customers are our main priority.",
    icon: AffiliateSupportIcon,
  },
  {
    name: "Widest CMS support",
    description:
      "We support more Content Management Systems than any of our competitors",
    icon: AffiliateCmsSupportIcon,
  },
  {
    name: "Innovation",
    description:
      "We keep innovating with features like our Property Table and Raw Content Blocks",
    icon: AffiliateInnovationIcon,
  },
];

export default function Why() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why promote us?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With so many other affiliate programs out there, why should you
            promote us?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {whyItems.map((item) => (
              <div key={item.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <item.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {item.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
