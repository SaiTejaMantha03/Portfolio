import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { TECH_STACK } from "@/features/portfolio/data";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  const DISPLAY_COUNT = 14;
  const hasMore = TECH_STACK.length > DISPLAY_COUNT;

  return (
    <Panel id="stack">
      <PanelHeader className="flex items-center justify-between">
        <PanelTitle>Stack</PanelTitle>
        <Link 
          href="/skills" 
          className="group mr-2 inline-flex items-center gap-1 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4"
        >
          View More <ArrowUpRightIcon className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      </PanelHeader>

      <PanelContent>
        <ul className="flex flex-wrap gap-2 select-none items-center">
          {TECH_STACK.slice(0, DISPLAY_COUNT).map((tech) => {
            const iconSrc = tech.theme ? `icons/${tech.icon}` : `/icons/${tech.icon}`;
            const darkIconSrc = tech.theme ? `icons/${tech.darkIcon}` : null;

            return (
              <li key={tech.key} className="flex">
                <div
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-3 py-1.5",
                    "border border-zinc-300/50 dark:border-zinc-600/50",
                    "bg-transparent",
                    "text-sm font-medium text-zinc-800 dark:text-zinc-200",
                    "transition-colors hover:bg-zinc-100/40 dark:hover:bg-zinc-700/40 hover:border-zinc-300 dark:hover:border-zinc-500"
                  )}
                  aria-label={tech.title}
                >
                  {tech.theme && darkIconSrc ? (
                    <>
                      <Image src={darkIconSrc} alt={`${tech.title} icon`} width={18} height={18} className="block dark:hidden shrink-0 w-[18px] h-[18px] object-contain" unoptimized />
                      <Image src={iconSrc} alt={`${tech.title} icon`} width={18} height={18} className="hidden dark:block shrink-0 w-[18px] h-[18px] object-contain" unoptimized />
                    </>
                  ) : (
                    <Image src={iconSrc} alt={`${tech.title} icon`} width={18} height={18} className="shrink-0 w-[18px] h-[18px] object-contain" unoptimized />
                  )}
                  <span>{tech.title}</span>
                </div>
              </li>
            );
          })}
          {hasMore && (
            <li className="px-2 font-mono text-muted-foreground select-none">
              ....
            </li>
          )}
        </ul>
      </PanelContent>
    </Panel>
  );
}
