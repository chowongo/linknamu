import type { LinkItem } from "@/types";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-center font-medium shadow-[0_8px_24px_-12px_rgba(154,91,52,0.35)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-white/65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 active:translate-y-0 dark:border-white/10 dark:bg-white/[0.07] dark:shadow-none dark:hover:bg-white/[0.12]"
    >
      {link.title}
    </a>
  );
}
