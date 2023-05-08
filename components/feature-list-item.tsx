type Props = {
  text: string;
};
export default function FeatureListItem({ text }: Props) {
  return (
    <li className="flex items-start not-prose sm:not-prose p-0 sm:p-0">
      <div className="shrink-0">
        <svg
          className="h-6 w-6 text-brand-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div className="ml-3 text-base sm:text-lg leading-6 text-gray-600">
        {text}
      </div>
    </li>
  );
}
