import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { usePopper } from "react-popper";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Integration,
  IntegrationKind,
  otherIntegrations,
  thisIntegration,
} from "../lib/Integrations";

type Props = {
  kind: IntegrationKind;
  source: string;
  destination: string;
};

export default function InlineIntegrationDropdown({
  kind,
  source,
  destination,
}: Props) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
    strategy: "fixed",
  });
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [integrationName, setIntegrationName] = useState<string>("");

  useEffect(() => {
    setIntegrations(otherIntegrations(kind, source, destination));
    setIntegrationName(thisIntegration(kind, source, destination).name);
  }, [kind, source, destination]);

  return (
    <Popover className="relative" as="span">
      <Popover.Button
        as="span"
        className="inline-flex items-end underline underline-offset-8 decoration-brand-500 cursor-pointer"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={setReferenceElement}
      >
        <span>{integrationName}</span>
        <ChevronDownIcon
          className="ml-1 h-6 w-6 text-brand-700"
          aria-hidden="true"
        />
      </Popover.Button>
      <Popover.Panel
        className="z-10 bg-white p-2 rounded-lg shadow-lg ring-2 ring-brand-500 min-w-full sm:min-w-[400px]"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <div className="flex flex-col text-left gap-3">
          {integrations.map((item) => {
            const slug =
              kind === "source"
                ? `/integrations/export-${item.slug}-to-${destination}`
                : `/integrations/export-${source}-to-${item.slug}`;
            return (
              <Link href={slug} key={slug}>
                <a className="hover:bg-gray-100 p-3 flex items-start gap-3">
                  <img
                    className="w-8 h-8"
                    src={`/images/logos/square/${item.logo}`}
                    alt={`${item.name} logo`}
                  />
                  <p className="text-xl font-medium text-gray-900">
                    {item.name}
                  </p>
                </a>
              </Link>
            );
          })}
        </div>
      </Popover.Panel>
    </Popover>
  );
}
