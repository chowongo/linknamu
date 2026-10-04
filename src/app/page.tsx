import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { sampleLinks, sampleProfile } from "@/data/sample";

export default function Home() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-200/60 blur-3xl dark:bg-orange-400/10" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-rose-200/50 blur-3xl dark:bg-rose-400/10" />
      </div>
      <main className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-6 py-16 sm:px-8 sm:py-24">
        <ProfileHeader profile={sampleProfile} />
        <ul className="mt-10 flex flex-col gap-5">
          {sampleLinks.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
