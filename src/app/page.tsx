import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { sampleLinks, sampleProfile } from "@/data/sample";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-12">
      <ProfileHeader profile={sampleProfile} />
      <ul className="mt-8 flex flex-col gap-5">
        {sampleLinks.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
