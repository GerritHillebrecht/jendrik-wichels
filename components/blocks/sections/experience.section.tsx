import { cn } from "@/lib/utils";
import { ExperienceItem } from "./experience.item";
import { ReactNode } from "react";
import { Film, FolderKanban, LandPlot, ScrollText } from "lucide-react";
import { SkillListItem } from "./skill.item";

export interface ExperienceItemProps {
  title: string;
  company: string;
  company_logo?: string;
  location: string;
  date: Date;
  description: string;
  url: string;
}

export interface Skill {
  name: string;
  title: string;
  icon?: ReactNode;
}

export function ExperienceSection({ className }: { className?: string }) {
  const skills: Skill[] = [
    {
      name: "Video Editor",
      title: "Precise, visually perfected storytelling",
      icon: <Film size={16} />,
    },
    {
      name: "Project Lead",
      title: "Leading teams to success",
      icon: <FolderKanban size={16} />,
    },
    {
      name: "Script Writer",
      title: "Creating engaging stories",
      icon: <ScrollText size={16} />,
    },
    {
      name: "Drone Operator",
      title: "Capturing breathtaking aerial shots",
      icon: <LandPlot size={16} />,
    },
  ];

  const experiences: ExperienceItemProps[] = [
    {
      title: "Creative Director",
      company: "Pinkstinks",
      location: "Hamburg",
      date: new Date(),
      description: "Description",
      url: "https://pinkstinks.de/",
    },
    {
      title: "Video Editor",
      company: "Territory",
      company_logo: "https://territory.de/assets/favicons/favicon-128x128.png",
      location: "Hamburg",
      date: new Date(),
      description: "Description",
      url: "https://pinkstinks.de/",
    },
    {
      title: "Drone Operator",
      company: "Volkswagen",
      company_logo:
        "https://www.innovation-group.parts/igp/wp-content/uploads/2020/04/Volkswagen-logo-2019-1500x1500.png",
      location: "Pikes Peak",
      date: new Date(),
      description: "Description",
      url: "https://pinkstinks.de/",
    },
    {
      title: "Product Owner",
      company: "Coca Cola",
      company_logo:
        "https://cdn.iconscout.com/icon/free/png-256/free-coca-cola-1863554-1579762.png",
      location: "New York",
      date: new Date(),
      description: "Description",
      url: "https://pinkstinks.de/",
    },
  ];

  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-x-4">
        <div className="honorable-mentions">
          <h3 className="text-4xl font-light mb-8">Honorable Mentions</h3>
          <ul className="experience-list">
            {experiences?.map((experience, index) => (
              <ExperienceItem experience={experience} key={index} />
            ))}
          </ul>
        </div>
        <div className="skills">
          <h3 className="text-4xl font-light mb-8">I can support you as</h3>
          <ul className="skill-list">
            {skills?.map((skill, index) => (
              <SkillListItem skill={skill} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
