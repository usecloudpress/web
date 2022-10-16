export interface DocsSection {
  title: string;
  href: string;
  items: NavigationSection[];
}

interface NavigationItem {
  title: string;
  href: string;
  isExternal?: boolean;
}

interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export function getDocumentationSection(name: string): DocsSection | undefined {
  return navigationItems.find((i) => i.href === name);
}

const navigationItems: DocsSection[] = [
  {
    title: "Quick start",
    href: "/docs/quick-start",
    items: [
      {
        title: "Getting started",
        items: [
          {
            title: "Register an account",
            href: "/docs/quick-start/register-an-account",
          },
          {
            title: "Getting started",
            href: "/docs/quick-start/getting-started-with-cloudpress",
          },
        ],
      },
    ],
  },
  {
    title: "Reference",
    href: "/docs/reference",
    items: [
      {
        title: "Introduction",
        items: [
          {
            title: "How Cloudpress works",
            href: "/docs/reference/overview/how-cloudpress-works",
          },
        ],
      },
      {
        title: "Connections",
        items: [
          {
            title: "Introduction",
            href: "/docs/reference/connections/introduction",
          },
          {
            title: "Add a connection",
            href: "/docs/reference/connections/add-connection",
          },
          {
            title: "Manage connection settings",
            href: "/docs/reference/connections/manage-connection-settings",
          },
          {
            title: "Delete a connection",
            href: "/docs/reference/connections/delete-a-connection",
          },
          {
            title: "Reconnect an account",
            href: "/docs/reference/connections/reconnect-an-account",
          },
        ],
      },
      {
        title: "Export content",
        items: [
          {
            title: "Introduction",
            href: "/docs/reference/export/introduction",
          },
          {
            title: "Export a Google Doc",
            href: "/docs/reference/export/export-google-doc",
          },
        ],
      },
    ],
  },
];
