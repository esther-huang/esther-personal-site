"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-bluegray/15 bg-paper/72 px-3 py-2 shadow-[0_16px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:px-4">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-full px-2 py-1.5 transition duration-500 hover:bg-white/[0.055] sm:px-3"
        >
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/[0.055] text-xs font-semibold text-ink shadow-[0_0_18px_rgba(241,212,109,0.10)]">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(244,244,241,0.20),transparent_48%)]" />
            <span className="relative">E</span>
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-ink">
              {siteConfig.name}
            </span>
            <span className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-muted">
              Signal OS
            </span>
          </span>
        </Link>
        <nav className="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto rounded-full border border-line/70 bg-white/[0.035] p-1 text-[0.72rem] text-muted sm:flex-none sm:text-sm">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "whitespace-nowrap rounded-full px-3 py-2 transition duration-500",
                  "hover:bg-white/[0.075] hover:text-ink",
                  isActive
                    ? "bg-white/[0.085] text-ink shadow-[inset_0_0_0_1px_rgba(244,244,241,0.18)]"
                    : ""
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 rounded-full border border-sage/20 bg-sage/10 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sage md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-sage shadow-[0_0_10px_rgba(241,212,109,0.55)]" />
          Local
        </div>
      </div>
    </header>
  );
}
