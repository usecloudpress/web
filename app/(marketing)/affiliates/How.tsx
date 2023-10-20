import {
  AffiliateStep1Icon,
  AffiliateStep2Icon,
  AffiliateStep3Icon,
  AffiliateStep4Icon,
} from "../../../components/icons";

const howItems = [
  {
    name: "Sign Up",
    description:
      "Sign up for our affiliate program and get your unique affiliate link.",
    icon: AffiliateStep1Icon,
  },
  {
    name: "Promote",
    description:
      "Promote Cloudpress to your audience and share your affiliate link with them.",
    icon: AffiliateStep2Icon,
  },
  {
    name: "Convert",
    description:
      "When someone signs up with your affiliate link, that referral is linked to you.",
    icon: AffiliateStep3Icon,
  },
  {
    name: "Earn",
    description:
      "When a referral upgrades to a paid subscription, you earn 30% for the lifetime of their subscription.",
    icon: AffiliateStep4Icon,
  },
];

export default function How() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Go from zero to $$$ in four steps.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {howItems.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
