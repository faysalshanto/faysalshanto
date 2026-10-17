export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  mediumUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Bangladesh’s Next Economic Opportunity is Hiding in Its Problems",
    slug: "bangladesh-next-economic-opportunity",
    excerpt:
      "Why startups, innovation, and digital platforms could turn Bangladesh's everyday operational and economic friction into scalable global businesses.",
    category: "Startup & Venture Strategy",
    date: "August 2026",
    readTime: "5 min read",
    mediumUrl:
      "https://medium.com/@faysalshanto/bangladeshs-next-economic-opportunity-is-hiding-in-its-problems-f365d31768db",
  },
];
