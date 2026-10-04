import type { Profile } from "@/types";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      {profile.imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.imageUrl}
          alt={`${profile.name} 프로필 사진`}
          className="h-32 w-32 rounded-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-32 w-32 items-center justify-center rounded-full bg-emerald-600 text-4xl font-bold text-white"
        >
          {profile.name.charAt(0)}
        </div>
      )}
      <h1 className="mt-4 text-xl font-bold">{profile.name}</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        {profile.bio}
      </p>
    </header>
  );
}
