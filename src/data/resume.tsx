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
        
  avatarUrl: "/image.png",
  skills: [
    "Next.js",
    "React.js",
    "Node.js",
    "Express",
    "Docker"
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
    // {
    //   title: "SakhiAI",
    //   href: "https://sakhiai.vercel.app",
    //   dates: "April 2025",
    //   active: true,
    //   description:
    //     "SakhiAI is your thoughtful AI companion that engages you in natural, voice-based conversations to help you reflect on your day. It remembers past interactions, adapts to your routine, and offers empathetic check-ins with a human-like voice. Coming Soon!",
    //   technologies: [
    //     "Next.js",
    //     "Vercel",
    //     "ElevenLabs",
    //     "Google Gemini"
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://sakhiai.vercel.app",
    //       icon: <Icons.globe className="size-3" />,
    //     }
    //   ],
    //   image: "/sakhiai.png",
    //   video: "",
    // },

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
      video:
        "",
    },
    {
      title: "CypherNote",
      href: "https://cyphernote.vercel.app",
      dates: "March 2025",
      active: true,
      description:
        "CypherNote is a platform that allows users to take secure and encrypted notes. It ensures privacy by encrypting content, making it accessible only to the user.",
      technologies: [
        "JavaScript",
        "Vite JS"
      ],
      links: [
        {
          type: "Website",
          href: "https://cyphernote.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/therohithborana/cyphernote",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cyphernote.png",
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
  title: "RagaChat",
  href: "https://ragachat.vercel.app",
  dates: "January 2025",
  active: true,
  description:
    "RagaChat is a real-time chat app with a musical twist! Connect with fellow music lovers, share your favorite tunes, and discuss everything from classical ragas to modern beats on public forums. Built with Next.js, it features Clerk authentication and real-time messaging powered by GetStream.io.",
  technologies: [
    "Next.js",
    "ClerkAuth",
    "GetStream.io",
    "Vercel"
  ],
  links: [
    {
      type: "Website",
      href: "https://ragachat.vercel.app",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/therohithborana/ragachat",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/ragachat.png",
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
,
  ],
} as const;
