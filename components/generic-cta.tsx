import CtaButton from "./ctaButton";

export default function GenericCta() {
  return (
    <div className="bg-white">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Free up your time.
            <br />
            Start using Cloudpress today.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Cloudpress will automate the export of your content and ensure it is
            formatted perfectly, giving you more time to write content or run
            your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <CtaButton />
          </div>
        </div>
      </div>
    </div>
  );
}
