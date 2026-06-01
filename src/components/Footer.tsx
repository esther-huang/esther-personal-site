import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl justify-end px-5 py-10 text-sm text-muted sm:px-8">
        <div className="flex flex-wrap justify-end gap-4">
          <Link href={siteConfig.social.x}>X</Link>
          <Link href={siteConfig.social.github}>GitHub</Link>
          <Link href={siteConfig.social.linkedin}>LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
