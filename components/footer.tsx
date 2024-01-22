import Link from "next/link";
import Image from "next/image";
import CloudpressLogo from "../public/cloudpress-logo-square-white.svg";
import React from "react";
import {
  SocialGitHubIcon,
  SocialLinkedInIcon,
  SocialXIcon,
  SocialYoutubeIcon,
} from "./icons";

interface NavHeaderProps {
  text: string;
}
function NavHeader({ text }: NavHeaderProps): JSX.Element {
  return <h3 className="text-sm font-semibold leading-6 text-white">{text}</h3>;
}

interface NavItemProps {
  name: string;
  href: string;
}

function NavItem({ name, href }: NavItemProps): JSX.Element {
  return (
    <li key={name}>
      <Link
        href={href}
        className="text-sm leading-6 text-gray-300 hover:text-white"
      >
        {name}
      </Link>
    </li>
  );
}

interface SocialLinkProps {
  name: string;
  href: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}

const socialLinks: SocialLinkProps[] = [
  {
    name: "X",
    href: "https://twitter.com/usecloudpress",
    icon: SocialXIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@usecloudpress",
    icon: SocialYoutubeIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/usecloudpresscom",
    icon: SocialLinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/usecloudpress",
    icon: SocialGitHubIcon,
  },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-12 w-12"
              src={CloudpressLogo}
              alt="Cloudpress logo"
            />
            <p className="text-sm leading-6 text-gray-300">
              Export content from Google Docs and Notion to WordPress, Webflow,
              Contentful, Sanity.io, and more...
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0 items-start">
            <div className="grid gap-8">
              <div>
                <NavHeader text="Product" />
                <ul role="list" className="mt-2 space-y-3">
                  <NavItem name="Features" href="/features" />
                  <NavItem name="Pricing" href="/pricing" />
                </ul>
              </div>
              <div>
                <NavHeader text="Resources" />
                <ul role="list" className="mt-2 space-y-3">
                  <NavItem
                    name="Documentation"
                    href="https://docs.usecloudpress.com"
                  />
                  <NavItem name="Blog" href="/blog" />
                  <NavItem name="Changelog" href="/changelog" />
                </ul>
              </div>
              <div>
                <NavHeader text="Tools" />
                <ul role="list" className="mt-2 space-y-3">
                  <NavItem
                    name="Export Google Docs to HTML"
                    href="/tools/convert/google-docs-to-html"
                  />
                  <NavItem
                    name="Export Google Docs to Markdown"
                    href="/tools/convert/google-docs-to-markdown"
                  />
                </ul>
              </div>
              <div>
                <NavHeader text="Use Cases" />
                <ul role="list" className="mt-2 space-y-3">
                  <NavItem
                    name="Content Managers"
                    href="/use-cases/content-managers"
                  />
                  <NavItem
                    name="Content Writers"
                    href="/use-cases/content-writers"
                  />
                </ul>
              </div>
            </div>
            <div className="grid gap-8">
              <div>
                <NavHeader text="Google Docs Integrations" />
                <ul role="list" className="mt-2 space-y-3">
                  <NavItem
                    name="Export Google Docs to Contentful"
                    href="/integrations/export-google-docs-to-contentful"
                  />
                  <NavItem
                    name="Export Google Docs to Kontent.ai"
                    href="/integrations/export-google-docs-to-kontent-ai"
                  />
                  <NavItem
                    name="Export Google Docs to Sanity"
                    href="/integrations/export-google-docs-to-sanity"
                  />
                  <NavItem
                    name="Export Google Docs to Webflow"
                    href="/integrations/export-google-docs-to-webflow"
                  />
                  <NavItem
                    name="Export Google Docs to WordPress"
                    href="/integrations/export-google-docs-to-wordpress"
                  />
                </ul>
              </div>
              <div>
                <NavHeader text="Notion Integrations" />
                <ul role="list" className="mt-2 space-y-3">
                  <NavItem
                    name="Export Notion to Contentful"
                    href="/integrations/export-notion-to-contentful"
                  />
                  <NavItem
                    name="Export Notion to Kontent.ai"
                    href="/integrations/export-notion-to-kontent-ai"
                  />
                  <NavItem
                    name="Export Notion to Sanity"
                    href="/integrations/export-notion-to-sanity"
                  />
                  <NavItem
                    name="Export Notion to Webflow"
                    href="/integrations/export-notion-to-webflow"
                  />
                  <NavItem
                    name="Export Notion to WordPress"
                    href="/integrations/export-notion-to-wordpress"
                  />
                </ul>
              </div>
            </div>
            <div className="grid gap-8">
              <div>
                <NavHeader text="Contact" />
                <ul role="list" className="mt-2 space-y-3">
                  <NavItem
                    name="hello@usecloudpress.com"
                    href="mailto:hello@usecloudpress.com"
                  />
                </ul>
              </div>
              <div>
                <NavHeader text="Legal" />
                <ul role="list" className="mt-2 space-y-3">
                  <NavItem name="Privacy" href="/privacy" />
                  <NavItem name="Terms" href="/terms" />
                </ul>
              </div>
              <div>
                <NavHeader text="Affiliates" />
                <ul role="list" className="mt-2 space-y-3">
                  <NavItem
                    name="Cloudpress Affiliate Program"
                    href="/affiliates"
                  />
                  <NavItem name="Affiliate Terms" href="/affiliates/terms" />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Cloudpress Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
