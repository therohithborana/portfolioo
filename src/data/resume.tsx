import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aayush Kokate",
  initials: "A",
  url: "https://dillion.io",
  location: "India",
  locationLink: "",
  description:
    "21 year old nice guy",
  summary: `long story short; full stack engineer, crypto guy.  

  i like to code, read about startups, brew coffee and enjoy a good game of cricket.  
    
  if you'd like to connect over a chat, say hello on [x.com](https://x.com/aayushk999) or book a meeting with me [here](https://cal.com/aayushdev/chat?Iuser=aayushdev&duration=5).`,
        
  avatarUrl: "/img.jpg",
  skills: [
    "Next.js",
    "React.js",
    "Typescript",
    "Node.js",
    "Express",
    "Postgres",
    "Docker",
    "Java"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "aayushk.dev@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aayushk9",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aayushcodes/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/aayushk999",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "Pune University",
      href: "https://www.linkedin.com/school/savitribai-phule-pune-university-sppu/",
      degree: "Bachelors of Engineering (Electronics)",
      logoUrl: "/unilogo.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "MAK3SPACE",
      href: "https://mak3space.vercel.app/",
      dates: "April 2025 - present",
      active: true,
      description:
        "private spaces for couples & friends, mak3space makes it easy to stay accountable using solana and fiat",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Solana",
        "Stripe",
        "socket.io",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "framer motion"
      ],
      links: [
        {
          type: "Website",
          href: "https://mak3space.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aayushk9/make-your-space",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mak3space.png",
      video:
        "",
    },
    {
      title: "Batch0",
      href: "https://batch-0.vercel.app/",
      dates: "April 2025",
      active: true,
      description:
        "Connect with early users for your startup, easiest way to collect and manage beta user requests for your startup",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://batch-0.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aayushk9/zerobatch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/batch0.png",
      video:
        "",
    },
    {
      title: "Wordbook",
      href: "https://wordbook-one.vercel.app/",
      dates: "April 2025",
      active: true,
      description:
        "Learn a new word every day with context, examples and usecase. Build your vocabulary effortlessly with WordBook.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://wordbook-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aayushk9/wordbook",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wordbook.png",
      video: "",
    },
    {
      title: "Human Kind",
      href: "https://humankind-space.vercel.app/",
      dates: "April 2025",
      active: true,
      description:
        "Human connection has features such as dailylogs, gratitude, knowledge and zen",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://humankind-space.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aayushk9/humankind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/kind.png",
      video: "",
    },
    {
      title: "BigBrain",
      href: "https://bigbrain-bb.vercel.app/",
      dates: "March 2025",
      active: true,
      description:
        "BigBrain helps you find research papers, crypto whitepapers and the latest news on crypto and startups.",
      technologies: [
        "React.js",
        "Express",
        "MongoDB",
        "Node.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://bigbrain-bb.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aayushk9/BigBrain",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bigb.png",
      video:
        "",
    },
  ],
} as const;
