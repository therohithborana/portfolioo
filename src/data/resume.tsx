import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rohith Borana",
  initials: "",
  url: "https://therohithborana.vercel.app",
  location: "India",
  locationLink: "",
  description:
    "21 • engineer • polymath",
  summary: `Hacking around and building cool things to make life easier.

  I also find interest in Neuroscience and Psychology. \n

    
  Ping me [here](mailto:boranarohith07@gmail.com) `,
        
  avatarUrl: "/me.jpg",
  skills: [
    "Next.js",
    "React.js",
    "Node.js",
    "Express",
    "JavaScript",
    "Tailwind CSS",
    "MongoDB",
    "WebRTC",
    "Docker",
    "Python",
    "AI/ML",
    
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
      href: "https://www.pesce.ac.in/",
      degree: "Bachelors of Engineering (AIML)",
      logoUrl: "/university.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Ticket AI",
      href: "https://github.com/therohithborana/agentic_ticket_management",
      dates: "March 2025",
      active: true,
      description:
        "An AI-powered ticket management system that automatically categorizes, prioritizes, and assigns support tickets to the most appropriate moderators. Features smart skill-based routing, AI-generated notes, and automated email notifications.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Google Gemini API",
        "Inngest",
        "JWT Authentication",
        "Nodemailer"
      ],        
      links: [
        
        {
          type: "Source",
          href: "https://github.com/therohithborana/agentic_ticket_management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ticketai.png",
      video: "",
    },
    {
      title: "Chronolog",
      href: "https://chronolog-beryl.vercel.app",
      dates: "March 2025",
      active: true,
      description:
        "Track your day by entering what you are doing as logs with time stamps and get an AI analysis at EOD. A productivity tool that helps you understand your daily patterns and optimize your time management.",
      technologies: [
        "Next.js",
        "React",
        "AI Analysis",
        "Time Tracking",
        "Productivity Tools"
      ],
      links: [
        {
          type: "Website",
          href: "https://chronolog-beryl.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/chronolog.png",
      video: "",
    },
    {
      title: "OneStep",
      href: "https://onestep-azure.vercel.app/",
      dates: "March 2025",
      active: true,
      description:
        "A goal-tracking app that helps you stay consistent with daily progress, heatmap visuals, and detailed stats. Stay motivated and reach your goals!",
        technologies: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "MongoDB",
          "Clerk"
        ],        
      links: [
        {
          type: "Website",
          href: "https://onestep-azure.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/therohithborana/onestep",
          icon: <Icons.github className="size-3" />,
        },
      ],
            image: "/onestep.png",
      video: "",
    },
    {
      title: "File.Jalebi",
      href: "https://filejalebi.vercel.app",
      dates: "March 2025",
      active: true,
      description:
        "Jalebi-Fafda is a peer-to-peer file sharing application that operates without the need for a central server. Leveraging WebRTC technology, it enables users to share files directly between browsers, ensuring efficient and secure transfers.",
      technologies: [
        "Next.js",
        "WebRTC",
        "Peer-to-Peer File sharing"
      ],
      links: [
        {
          type: "Website",
          href: "https://filejalebi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/therohithborana/jalebi_webrtc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/filejalebi.png",
      video: "",
    },

{
  title: "SOM-Image-Clustering-Analysis",
  href: "https://github.com/therohithborana/SOM-Image-Clustering-Analysis",
  dates: "March 2025",
  active: true,
  description:
    "This project applies Self-Organizing Maps (SOM) to cluster colors in an image. It explores unsupervised learning and demonstrates how SOM can be used to categorize pixels based on color similarity.",
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
      image: "/som-image-clustering.png",
      video: "",
    }
  ],
  otherProjects: [
    {
      name: "RagaChat",
      href: "https://ragachat.vercel.app"
    },
    {
      name: "CypherNote", 
      href: "https://cyphernote.vercel.app"
    },
    {
      name: "UnMedium",
      href: "https://github.com/therohithborana/UnMedium"
    },
    {
      name: "More on GitHub",
      href: "https://github.com/therohithborana"
    }
  ],
} as const;
