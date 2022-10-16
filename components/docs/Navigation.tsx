import Link from "next/link";
import clsx from "clsx";
import { DocsSection } from "./navigationLinks";
import { useRouter } from "next/router";

interface Props {
  className?: string;
  section: DocsSection | undefined;
}

export function Navigation({ className, section }: Props) {
  const router = useRouter();
  const slugElements = router.query.slug as string[];
  const currentPath = slugElements ? `/docs/${slugElements.join("/")}` : "";

  return (
    <nav className={clsx("text-base lg:text-sm", className)}>
      <ul className="space-y-9">
        {section?.items.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-semibold text-slate-900">
              {section.title}
            </h2>
            <ul className="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200">
              {section.items.map((link) => (
                <li key={link.href} className="relative">
                  <Link href={link.href}>
                    <a
                      className={clsx(
                        "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
                        link.href === currentPath
                          ? "font-semibold text-blue-500 before:bg-blue-500"
                          : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block"
                      )}
                    >
                      {link.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
