import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hanad Mohamed",
  resumeUrl: "/Hanad Mohamed.pdf",
  initials: "HM",
  url: "https://hanad-mohamed.vercel.app/",
  location: "Mogadishu, Somalia",
  locationLink: "https://www.google.com/maps/place/mogadishu",
  description:
    "Software Developer with expertise in building seamless user experiences and scalable systems",
  summary:
    "I'm Hanad Mohamed, a resourceful and self-taught software developer with an enthusiasm for developing imaginative digital solutions. Through 1+ year of practical experience, I've honed my skills in transforming creative concepts into tangible software products. My journey has been marked by opportunities.",
  avatarUrl: "/me.png",
  skills: [
    "Javascript / Typescript",
    "React (Next.js)",
    "React Native",
    "Node (Nest, Express)",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "UI/UX",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hanaddaahir124@gmail.com",
    tel: "+252614488101",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hanad124",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hanad-mohamed-69a105203/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Facebook: {
        name: "facebook",
        url: "hhttps://www.facebook.com/hanad.faaruuq",
        icon: Icons.facebook,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "hanaddaahir124@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
      whatsapp: {
        name: "whatsapp",
        url: "https://wa.me/252614488101",
        icon: Icons.whatsapp,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Jamhuriya Technology Solutions - Jtech",
      href: "https://jtech.so",
      badges: [],
      location: "Mogadishu, Somalia",
      title: "Full Stack Developer",
      logoUrl: "/work/jtech-light-logo.png",
      start: "APR 2024",
      end: "PRESENT",
      description:
        "I play a key role in the design, development, and maintenance of web applications using the MERN stack, delivering robust and scalable solutions. A significant aspect of my work involved collaborating closely with cross-functional teams, including designers, product managers, and fellow developers, to ensure that our products met high-quality standards and were delivered on time.",
    },
    {
      company: "Dugsiiye Platfrom",
      badges: [],
      href: "https://dugsiiye.com",
      location: "Remote",
      title: "Mentor / Assistant",
      logoUrl: "/work/dugsiiye_dark.png",
      start: "MAY 2024",
      end: "NOV 2024",
      description:
        "As a mentor and guide at the Dugsiiye platform, I had the privilege of supporting students on their educational and personal growth journeys. In this role, I leveraged my knowledge and life experiences to provide tailored assistance to the students I worked with. Provided personalized mentorship and guidance to students, helping them achieve their academic and personal development goals. Collaborated with educators and other mentors to design and execute comprehensive development programs and workshops..",
    },
  ],
  education: [
    {
      school: "Jubba School",
      href: "https://www.facebook.com/jubba.edu.so/",
      degree: "Primary Education",
      logoUrl: "/education/jubba-logo.png",
      start: "2012",
      end: "2018",
    },
    {
      school: "Jaabir Bin Hayaan",
      href: "https://www.facebook.com/p/Jaabir-Bin-Xayaan-Primary-and-Secondary-School-1-Jardiinka-100064029195040/",
      degree: "Secondary Education",
      logoUrl: "/education/jaabir-bin-hayan-logo.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "SYD ICT Solutions",
      href: "https://sydict.so/",
      degree: "Programming Fundamentals Diploma",
      logoUrl: "/education/syd-logo.png",
      start: "FEB 2021",
      end: "SEP 2021",
    },
    {
      school: "Jamhuriya University of Science and Technology",
      href: "https://just.edu.so",
      degree: "Bachelor Degree Of Computer Application",
      logoUrl: "/education/jamhuriya-logo.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Attendly - Advanced Education Attendance App",
      href: "https://github.com/hanad124/attendly-app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "The app's standout feature is its advanced fraud prevention mechanism, which combines geofencing capabilities with real-time location validation to ensure students are physically present within campus boundaries.",
      technologies: [
        "React native",
        "Typescript",
        "Node (Express)",
        "MongoDB",
        "JWT",
        "Nativewind",
        "RTK",
        "Zustand",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hanad124/attendly-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/attendly-thumbnail.png",
      video: "",
    },
    {
      title: "DripSave - All In One Video Downloader App",
      href: "#",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "DripSave is a modern, sleek, and user-friendly video downloader app designed for YouTube, TikTok and Facebook videos, with plans to scale to other social media platforms. The app allows users to effortlessly download and save videos, without watermark",
      technologies: [
        "React native",
        "Typescript",
        "Nativewind",
        "RTK",
        "Zustand",
        "Node (Express)",
      ],
      links: [],
      image: "/projects/dripsave-thumbnail.png",
      video: "",
    },
    {
      title: "e-Financer Mobile App",
      href: "https://github.com/hanad124/e-financer-app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "e-financer is an application that helps you track your expenses and income easily. It allows to import your receipts and invoices and automatically categorize them.It also provides a dashboard to visualize your expenses and income and export them to pdf",
      technologies: [
        "React native",
        "Typescript",
        "Node (Express)",
        "MongoDB",
        "JWT",
        "Nativewind",
        "Zustand",
        "cloudinary",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hanad124/e-financer-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/e-financer-thumbnail.png",
      video: "",
    },
    {
      title: "Yonode - NodeJS Toolkit",
      href: "https://www.yonode.org",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Yonode is a Node.js toolkit that streamlines your workflow, enabling you to craft efficient server solutions rapidly.",
      technologies: ["Javascript/Typescript", "Node.js", "MDX", "bash"],
      links: [
        {
          type: "Website",
          href: "https://www.yonode.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sharafdin/yonode",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/yonode.png",
      video: "",
    },
    {
      title: "Furqan Constructions System",
      href: "https://github.com/hanad124/furqan-constructions",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a Construction Inventory Management System for Furqan Constructions to efficiently manage and monitor construction materials and equipment inventory.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "NextAuth",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hanad124/furqan-constructions",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/furqan-constructions.png",
      video: "",
    },
    {
      title: "Redesigned Tabaarak ICT Website",
      href: "https://tabaarakict.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "During my personal projects, I came across the website for Tabaarak ICT and was inspired to redesign it with a focus on creating a fun and engaging user experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Strapi-CMS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://tabaarakict.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hanad124/tabaarakictV2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/tabaarak-ict.svg",
      video: "",
    },
    {
      title: "TikTok Video Downloader",
      href: "https://tiktok-video-downloader-five.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "This project is built using Next.js 14 server actions & Zustand for state management, npm and Tailwind CSS, designed to streamline the process of downloading TikTok videos by providing a user-friendly interface.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://tiktok-video-downloader-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hanad124/tiktok-video-downloader",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/tiltok-video-downloader.svg",
      video: "",
    },
  ],
  hackathons: [],
} as const;
