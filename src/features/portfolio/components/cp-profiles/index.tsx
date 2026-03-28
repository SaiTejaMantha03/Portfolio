import Link from "next/link";
import { ArrowUpRightIcon, Code2, Trophy } from "lucide-react";

import { Panel, PanelHeader, PanelTitle } from "../panel";
import { CP_PROFILES } from "../../data";
import type { CpProfile } from "../../types/cp-profiles";

function StarRating({ stars, color }: { stars: number; color: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 7 }).map((_, i) => (
        <span
          key={i}
          className="text-base leading-none"
          style={{ color: i < stars ? color : "var(--color-muted-foreground)", opacity: i < stars ? 1 : 0.25 }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function LeetCodeCard({ profile }: { profile: CpProfile & { easySolved?: number; mediumSolved?: number; hardSolved?: number; solved?: number; ranking?: number } }) {
  const total = profile.solved ?? 0;
  const easy = profile.easySolved ?? 0;
  const medium = profile.mediumSolved ?? 0;
  const hard = profile.hardSolved ?? 0;

  return (
    <a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-lg border border-border/60 bg-muted/20 p-4 hover:bg-muted/40 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-md bg-[#FFA116]/10">
            <Code2 className="size-4" style={{ color: "#FFA116" }} />
          </div>
          <div>
            <p className="text-[13px] font-semibold leading-tight">LeetCode</p>
            <p className="text-[11px] text-muted-foreground font-mono">@{profile.username}</p>
          </div>
        </div>
        <ArrowUpRightIcon className="size-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Solved count */}
      <div className="text-center py-1">
        <span className="text-3xl font-bold tabular-nums" style={{ color: "#FFA116" }}>{total}</span>
        <p className="text-[11px] text-muted-foreground mt-0.5">problems solved</p>
      </div>

      {/* Difficulty breakdown */}
      <div className="grid grid-cols-3 gap-1.5 text-center">
        <div className="rounded-md bg-emerald-500/10 px-2 py-1.5">
          <p className="text-[13px] font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">{easy}</p>
          <p className="text-[10px] text-muted-foreground">Easy</p>
        </div>
        <div className="rounded-md bg-amber-500/10 px-2 py-1.5">
          <p className="text-[13px] font-semibold text-amber-600 dark:text-amber-400 tabular-nums">{medium}</p>
          <p className="text-[10px] text-muted-foreground">Medium</p>
        </div>
        <div className="rounded-md bg-red-500/10 px-2 py-1.5">
          <p className="text-[13px] font-semibold text-red-600 dark:text-red-400 tabular-nums">{hard}</p>
          <p className="text-[10px] text-muted-foreground">Hard</p>
        </div>
      </div>

      {profile.maxRating && (
        <p className="text-center text-[11px] text-muted-foreground font-mono">
          Max rating: {profile.maxRating}
        </p>
      )}
    </a>
  );
}

function CodeChefCard({ profile }: { profile: CpProfile & { rating?: number; stars?: number; maxRating?: number } }) {
  const stars = profile.stars ?? 1;

  return (
    <a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-lg border border-border/60 bg-muted/20 p-4 hover:bg-muted/40 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-md" style={{ backgroundColor: "#5B4638" + "22" }}>
            <Trophy className="size-4" style={{ color: "#5B4638" }} />
          </div>
          <div>
            <p className="text-[13px] font-semibold leading-tight">CodeChef</p>
            <p className="text-[11px] text-muted-foreground font-mono">@{profile.username}</p>
          </div>
        </div>
        <ArrowUpRightIcon className="size-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Rating */}
      <div className="text-center py-1">
        <span className="text-3xl font-bold tabular-nums" style={{ color: "#5B4638" }}>{profile.rating ?? "—"}</span>
        <p className="text-[11px] text-muted-foreground mt-0.5">current rating</p>
      </div>

      {/* Stars */}
      <div className="flex flex-col items-center gap-1">
        <StarRating stars={stars} color="#FFC200" />
        <p className="text-[11px] text-muted-foreground">{stars}★ Coder</p>
      </div>

      {profile.maxRating && (
        <p className="text-center text-[11px] text-muted-foreground font-mono">
          Max rating: {profile.maxRating}
        </p>
      )}
    </a>
  );
}

export function CpProfiles() {
  const profiles = CP_PROFILES;
  const lc = profiles.find((p) => p.platform === "LeetCode");
  const cc = profiles.find((p) => p.platform === "CodeChef");

  return (
    <Panel id="cp">
      <PanelHeader className="flex items-center justify-between">
        <PanelTitle>
          Competitive Programming
        </PanelTitle>
      </PanelHeader>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {lc && <LeetCodeCard profile={lc as never} />}
        {cc && <CodeChefCard profile={cc as never} />}
      </div>
    </Panel>
  );
}
