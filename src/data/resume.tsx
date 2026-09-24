import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rohith Borana",
  initials: "",
  url: "https://therohithborana.vercel.app",
  location: "India",
  locationLink: "",
  description:
    "22 • engineer • polymath",
  summary: `Breaking Prod.\n

  Ping me [here](mailto:boranarohith07@gmail.com) `,
        
  avatarUrl: "/me.jpg",
  skills: [
   "AI/ML",
"Agentic AI",
"MCP Servers",
"Docker",
"Next.js",
"MongoDB"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },

  ],
  contact: {
    email: "boranarohith07@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/therohithborana",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohith-borana-b10778266/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/therohithborana",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@therohithborana/videos",
        icon: Icons.youtube,
        navbar: true,
      },
      Substack: {
        name: "Substack",
        url: "https://substack.com/@therohithborana",
        icon: Icons.substack,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:boranarohith07@gmail.com", // Updated to mailto link
        icon: Icons.email,
        navbar: false,
      },      
    },
  },
  education: [
    {
      school: "PES College Of Engineering",
      href: "",
      degree: "Bachelors of Engineering (AIML)",
      logoUrl: "/university.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  experience: [
    {
      company: "Anarix",
      href: "",
      logoUrl: "/anarix.jfif",
      roles: [
        { title: "Applied AI Engineer", start: "July 2026", end: "Present" },
        { title: "Gen AI Intern", start: "Aug 2025", end: "June 2026" },
      ],
    },
  ],
  projects: [
    {
      title: "UnMedium",
      href: "https://github.com/therohithborana/UnMedium",
      dates: "March 2025",
      active: true,
      technologies: ["Chrome Extension", "JavaScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/therohithborana/UnMedium",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "SOM-Image-Clustering-Analysis",
      href: "https://github.com/therohithborana/SOM-Image-Clustering-Analysis",
      dates: "March 2025",
      active: true,
      technologies: [
        "Self-Organizing Maps (SOM)",
        "Unsupervised Learning",
        "Image Processing"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/therohithborana/SOM-Image-Clustering-Analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
