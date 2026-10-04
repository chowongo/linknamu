import type { Profile } from "@/types";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      {profile.imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.imageUrl}
          alt={`${profile.name} 프로필 사진`}
          className="h-28 w-28 rounded-full object-cover shadow-[0_14px_30px_-10px_rgba(154,91,52,0.55)] ring-4 ring-white/80 dark:shadow-[0_14px_30px_-10px_rgba(0,0,0,0.7)] dark:ring-white/15"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-28 w-28 items-center justify-center rounded-full bg-emerald-600 text-4xl font-bold text-white shadow-[0_14px_30px_-10px_rgba(154,91,52,0.55)] ring-4 ring-white/80 dark:shadow-[0_14px_30px_-10px_rgba(0,0,0,0.7)] dark:ring-white/15"
        >
          {profile.name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2 text-sm text-balance text-foreground/65">
        {profile.bio}
      </p>
    </header>
  );
}
