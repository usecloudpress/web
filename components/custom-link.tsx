import Link from "next/link";

type Props = React.HTMLProps<HTMLAnchorElement>;

export default function CustomLink({ children, href }: Props) {
  return href && (href.startsWith("/") || href === "") ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
