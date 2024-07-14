import { Building2, ExternalLink, Map } from "lucide-react";
import { ExperienceItemProps } from "./experience.section";
import Link from "next/link";
import Image from "next/image";

export function ExperienceItem({
  experience,
}: {
  experience: ExperienceItemProps;
}) {
  const dateFormatter = new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "long",
  });

  return (
    <li className="group grid grid-cols-[max-content,auto,max-content] items-center gap-3 border-t first-of-type:border-t-0 p-4 hover:bg-muted transition-all duration-300">
      <div className="icon w-10 flex items-center justify-center aspect-square bg-muted group-hover:bg-background transition-all duration-300 rounded">
        {experience.company_logo && (
          <Image
            src={experience.company_logo}
            alt={experience.company}
            className="object-cover"
            width="20"
            height="20"
          />
        )}
        {!experience.company_logo && <Building2 size={16} />}
      </div>
      <div className="content">
        <h3 className="text-sm">
          {experience.title} at{" "}
          <span className="font-bold">{experience.company}</span>
        </h3>
        <p className="text-muted-foreground text-xs">
          {dateFormatter.format(experience.date)} | {experience.location}
        </p>
      </div>
      <Link href={experience.url} target="_black">
        <ExternalLink size={18} className="text-muted-foreground" />
      </Link>
    </li>
  );
}
