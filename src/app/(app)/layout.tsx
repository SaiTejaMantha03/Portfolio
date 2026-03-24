import dynamic from "next/dynamic";

import { SiteFooter } from "@/components/site-footer";
import { FloatingNav } from "@/components/floating-nav";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Panel } from "@/features/portfolio/components/panel";

const ScrollToTop = dynamic(() =>
  import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop)
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="w-full overflow-x-hidden px-2">{children}</main>
      
      {/* Bottom Flickering Grid */}
      <Panel className="mx-auto md:max-w-3xl mb-24">
        <div className="relative h-[250px] w-full p-4">
          <div className="relative size-full overflow-hidden bg-background/50">
            <FlickeringGrid
              className="absolute inset-0 z-0 size-full"
              squareSize={4}
              gridGap={4}
              color="#6B7280"
              maxOpacity={0.4}
              flickerChance={0.05}
            />
          </div>
        </div>
      </Panel>

      {/* <SiteFooter /> */}
      <FloatingNav />
      <ScrollToTop />
    </>
  );
}
