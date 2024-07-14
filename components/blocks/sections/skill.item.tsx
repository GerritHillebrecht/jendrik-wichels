import { ArrowBigUpDash } from "lucide-react";
import { Skill } from "./experience.section";
import Image from "next/image";
import Link from "next/link";

export function SkillListItem({ skill }: { skill: Skill }) {
  return (
    <li className="group grid grid-cols-[max-content,auto,max-content] items-center gap-3 border-t first-of-type:border-t-0 p-4 hover:bg-muted transition-all duration-300">
      <div className="icon w-10 flex items-center justify-center aspect-square bg-muted group-hover:bg-background transition-all duration-300 rounded">
        {skill.icon}
      </div>
      <div className="content">
        <h3 className="text-sm">
          {skill.name}
        </h3>
        <p className="text-muted-foreground text-xs">
            {skill.title}
        </p>
      </div>
      {/* <Link href={experience.url} target="_black">
        <ExternalLink size={18} className="text-muted-foreground" />
      </Link> */}
    </li>
  );
}
