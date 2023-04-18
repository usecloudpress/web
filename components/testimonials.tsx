import vanessa from "../public/images/testimonials/vanessa-hojda.jpeg";
import romain from "../public/images/testimonials/romain-lenglet.jpeg";

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <img
              className="h-12 self-start"
              src="/images/testimonials/shopify.svg"
              alt=""
            />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “This past week, Cloudpress reduced our Google Docs to
                  Contentful upload time from 8 hours per week to only 1 hour
                  with perfect formatting. Cloudpress enabled the launch of a
                  campaign in less time than we anticipated and allowed us to
                  launch even more initiatives that we expected to work on later
                  this year. It&apos;s freeing us from the tactical so we can
                  focus on the strategic -- ultimately helping us drive more
                  impact with the limited time we have.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src={vanessa.src}
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Vanessa Hojda
                  </div>
                  <div className="mt-1 text-gray-500">
                    Senior Content Marketing Manager, Shopify
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <img
              className="h-12 self-start"
              src="/images/testimonials/agicap.svg"
              alt=""
            />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “For several months we have been looking for a tool to
                  automate the integration of content from our content editor to
                  our CMS. Cloudpress allowed us to go from about 45 minutes per
                  content integration (reintegration of CTAs, images,
                  formatting, content structuring, etc.) to 5 minutes! In
                  addition to that, their customer service helped us integrate
                  the tool, and take our feedback as the product evolves.
                  Simple, fast, efficient, time saving as we like it.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src={romain.src}
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Romain Lenglet
                  </div>
                  <div className="mt-1 text-gray-500">SEO Manager, Agicap</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
