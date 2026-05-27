import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line/80 bg-paper/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>Draft-only personal site. No analytics, no deployment wiring.</p>
        <div className="flex flex-wrap gap-4">
          <Link href={siteConfig.social.x}>X</Link>
          <Link href={siteConfig.social.github}>GitHub</Link>
          <Link href={siteConfig.social.linkedin}>LinkedIn</Link>
          <Link href={siteConfig.social.email}>Email</Link>
        </div>
      </div>
    </footer>
  );
}
