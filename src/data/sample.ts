import type { LinkItem, Profile } from "@/types";

// 보여 주기용 더미 값. 진짜 내용은 나중에 채운다.
export const sampleProfile: Profile = {
  name: "강산원",
  bio: "주식의 신",
  imageUrl: "/avatar-placeholder.svg",
};

export const sampleLinks: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
