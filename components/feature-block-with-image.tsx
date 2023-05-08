import Image, { StaticImageData } from "next/legacy/image";
import clsx from "clsx";

type Props = {
  title: React.ReactNode;
  content: React.ReactNode;
  image: StaticImageData;
  imageAlt?: string;
  imageAlignment: "left" | "right" | "bottom";
};

export default function FeatureBlockWithImage({
  title,
  content,
  image,
  imageAlt,
  imageAlignment,
}: Props) {
  return (
    <div className="mx-4">
      <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:max-w-screen-xl">
        <div
          className={clsx(
            {
              "lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center":
                imageAlignment === "left" || imageAlignment === "right",
            },
            { "lg:grid-flow-row-dense": imageAlignment === "left" }
          )}
        >
          <div
            className={clsx("mb-12 lg:mb-0", {
              "lg:col-start-2": imageAlignment === "left",
            })}
          >
            <div>
              <div
                className={clsx({
                  "text-center lg:mb-12": imageAlignment === "bottom",
                })}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                  {title}
                </h2>
                <div className="mt-8 prose prose-base sm:prose-lg max-w-none leading-8 text-gray-600">
                  {content}
                </div>
              </div>
            </div>
          </div>
          <div
            className={clsx({
              "lg:col-start-1": imageAlignment === "left",
            })}
          >
            <div>
              <Image src={image} alt={imageAlt} className="mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
