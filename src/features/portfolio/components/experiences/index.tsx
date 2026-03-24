import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { EXPERIENCES } from "@/features/portfolio/data";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ExperienceItem } from "./experience-item";

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader className="flex items-center justify-between">
        <PanelTitle>Experience</PanelTitle>
        <Link 
          href="/work" 
          className="group mr-2 inline-flex items-center gap-1 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4"
        >
          View More <ArrowUpRightIcon className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Panel>
  );
}
