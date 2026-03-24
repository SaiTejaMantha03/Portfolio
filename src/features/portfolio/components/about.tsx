import { Markdown } from "@/components/markdown";
import { Prose } from "@/components/ui/typography";
import { USER } from "@/features/portfolio/data";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose className="text-muted-foreground/90 leading-relaxed">
          <Markdown>{USER.about}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  );
}
