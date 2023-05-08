import FeatureListItem from "./feature-list-item";

interface FeatureListProps {
  features: string[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="space-y-2 mt-2 pl-0 sm:pl-0 not-prose sm:not-prose">
      {features.map((s) => (
        <FeatureListItem key={s} text={s} />
      ))}
    </ul>
  );
}
