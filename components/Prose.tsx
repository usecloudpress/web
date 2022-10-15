import clsx from "clsx";

export function Prose({ as: Component = "div", className, ...props }: any) {
  return (
    <Component
      className={clsx(
        className,
        "prose prose-slate max-w-none",
        // headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]",
        // lead
        "prose-lead:text-slate-500",
        // links
        "prose-a:font-semibold prose-a:underline prose-a:underline-offset-4",
        // pre
        "prose-pre:rounded-lg prose-pre:bg-slate-900 prose-pre:shadow-lg",
        // code
        "prose-code:bg-slate-200 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
      )}
      {...props}
    />
  );
}
