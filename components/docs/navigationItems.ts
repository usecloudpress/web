interface DocsSection {
  title: string;
  href: string;
  items: (NavigationItem | HeaderItem)[];
}

interface NavigationItem {
  title: string;
  href: string;
  isExternal?: boolean;
  items?: NavigationItem[];
}

interface HeaderItem {
  title: string;
}

export function isNavigationItem(
  item: NavigationItem | HeaderItem
): item is NavigationItem {
  return (item as NavigationItem).href !== undefined;
}

export function isHeaderItem(
  item: NavigationItem | HeaderItem
): item is HeaderItem {
  return !isNavigationItem(item);
}

const navigationItems: DocsSection[] = [
  {
    title: "Quick start",
    href: "/docs/quick-start",
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
  {
    title: "Reference",
    href: "/docs/reference",
    items: [
      {
        title: "Overview",
        href: "/docs/reference/overview",
        items: [
          {
            title: "How Cloudpress works",
            href: "/docs/reference/overview/how-cloudpress-works",
          },
        ],
      },
      {
        title: "Connections",
        href: "/docs/reference/connections",
        items: [
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
        href: "/docs/reference/export",
        items: [
          {
            title: "Export a Google Doc",
            href: "/docs/reference/export/export-google-doc",
          },
        ],
      },
    ],
  },
];

export default navigationItems;
