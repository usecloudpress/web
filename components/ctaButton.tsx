import Link from "next/link";

export default function CtaButton() {
  return (
    <Link href="https://app.usecloudpress.com/register">
      <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700">
        Start your free trial
      </a>
    </Link>
  );
}
