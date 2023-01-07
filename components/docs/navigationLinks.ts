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
    title: "Quick starts",
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
            title: "Use Export Content page",
            href: "/docs/reference/export/using-export-content-page",
          },
          {
            title: "Use Google Workspace Add-on",
            href: "/docs/reference/export/using-google-workspace-add-on",
          },
          {
            title: "Set additional field values",
            href: "/docs/reference/export/additional-fields",
          },
          {
            title: "View job history",
            href: "/docs/reference/export/view-job-history",
          },
          {
            title: "View job detail",
            href: "/docs/reference/export/view-job-detail",
          },
        ],
      },
      {
        title: "Cloudpress account",
        items: [
          {
            title: "Billing and usage",
            href: "/docs/reference/manage-cloudpress-account/billing-and-usage",
          },
          {
            title: "Change account name",
            href: "/docs/reference/manage-cloudpress-account/change-account-name",
          },
          {
            title: "Manage users",
            href: "/docs/reference/manage-cloudpress-account/manage-users",
          },
          {
            title: "Switch between accounts",
            href: "/docs/reference/manage-cloudpress-account/switch-between-accounts",
          },
        ],
      },
      {
        title: "User Profile",
        items: [
          {
            title: "Change personal details",
            href: "/docs/reference/manage-user-profile/change-personal-details",
          },
          {
            title: "Change password",
            href: "/docs/reference/manage-user-profile/change-your-password",
          },
          {
            title: "Personal access token",
            href: "/docs/reference/manage-user-profile/get-personal-access-token",
          },
        ],
      },
    ],
  },
  {
    title: "Integrations",
    href: "/docs/integrations",
    items: [
      {
        title: "Google Docs",
        items: [
          {
            title: "Introduction",
            href: "/docs/integrations/google-docs/introduction",
          },
          {
            title: "Install",
            href: "/docs/integrations/google-docs/install-add-on",
          },
          {
            title: "Configure",
            href: "/docs/integrations/google-docs/configure-add-on",
          },
          {
            title: "Export a document",
            href: "/docs/integrations/google-docs/export-a-document",
          },
          {
            title: "Set additional field values",
            href: "/docs/integrations/google-docs/additional-fields",
          },
          {
            title: "Troubleshoot",
            href: "/docs/integrations/google-docs/troubleshoot",
          },
        ],
      },
      {
        title: "Notion",
        items: [
          {
            title: "Introduction",
            href: "/docs/integrations/notion/introduction",
          },
          {
            title: "Connect account",
            href: "/docs/integrations/notion/connect-account",
          },
          {
            title: "Export content",
            href: "/docs/integrations/notion/export-content",
          },
          {
            title: "Set additional field values",
            href: "/docs/integrations/notion/additional-fields",
          },
        ],
      },
      {
        title: "WordPress",
        items: [
          {
            title: "Introduction",
            href: "/docs/integrations/wordpress/introduction",
          },
          {
            title: "Connect account",
            href: "/docs/integrations/wordpress/connect-account",
          },
          {
            title: "Set additional field values",
            href: "/docs/integrations/wordpress/additional-fields",
          },
        ],
      },
      {
        title: "Contentful",
        items: [
          {
            title: "Introduction",
            href: "/docs/integrations/contentful/introduction",
          },
          {
            title: "Connect account",
            href: "/docs/integrations/contentful/connect-account",
          },
          {
            title: "Set additional field values",
            href: "/docs/integrations/contentful/additional-fields",
          },
        ],
      },
      {
        title: "Webflow",
        items: [
          {
            title: "Introduction",
            href: "/docs/integrations/webflow/introduction",
          },
          {
            title: "Connect account",
            href: "/docs/integrations/webflow/connect-account",
          },
          {
            title: "Set additional field values",
            href: "/docs/integrations/webflow/additional-fields",
          },
        ],
      },
      {
        title: "Sanity",
        items: [
          {
            title: "Introduction",
            href: "/docs/integrations/sanity/introduction",
          },
          {
            title: "Connect account",
            href: "/docs/integrations/sanity/connect-account",
          },
          {
            title: "Set additional field values",
            href: "/docs/integrations/sanity/additional-fields",
          },
        ],
      },
      {
        title: "Kontent.ai",
        items: [
          {
            title: "Introduction",
            href: "/docs/integrations/kontent/introduction",
          },
          {
            title: "Connect account",
            href: "/docs/integrations/kontent/connect-account",
          },
          {
            title: "Set additional field values",
            href: "/docs/integrations/kontent/additional-fields",
          },
        ],
      },
    ],
  },
];
