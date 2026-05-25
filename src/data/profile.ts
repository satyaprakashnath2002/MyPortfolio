/**
 * Portfolio profile — Satyaprakash Nath
 * Update project/demo URLs and social links when you have the exact URLs.
 */

export const profile = {
  name: "Satyaprakash Nath",
  role: "Full-Stack Developer · AI & Web",
  tagline:
    "B.Tech student building full-stack apps, AI-powered systems, and tested, production-ready web experiences with Java, SpringBoot, React, and the MERN stack.",
  email: "nathsatya2002@gmail.com",
  /**
   * Free inbox delivery: https://web3forms.com/create
   * Enter your email → copy Access Key → paste below (takes ~1 minute).
   */
  web3formsAccessKey: "3cc30459-3784-436d-b86c-e4c2edb37d08",
  phone: "+91 7894970629",
  location: "Bangalore, India",

  shortName: "Satyaprakash",
  /** Profile photo in /public (e.g. "/profile.png") */
  avatar: "/profile.png",
  availability: "Open to full-time roles and freelance projects", 


  stats: [
    { value: "3+", label: "Internships" },
    { value: "8", label: "Major projects" },
    { value: "8.84", label: "CGPA (B.Tech)" },
  ],

  about: [
    "I'm a B.Tech Electrical Engineering student at Government College of Engineering, Kalahandi (CGPA 8.84), with hands-on experience across full-stack development, QA, and AI-driven applications.",
    "From MERN apps at AUROSKKIL to responsive web builds at RINEX and cross-platform QA at TEKKZY, I focus on shipping reliable features, clean APIs, and interfaces that work on every device.",
  ],

  highlights: [
    "Full-Stack",
    "AI / GenAI",
    "MERN Stack",
    "Software QA",
  ],

  socials: {
    github: "https://github.com/satyaprakashnath2002",
    linkedin: "https://www.linkedin.com/in/satyaprakash-nath-917811254",
    twitter: "",
  },

  education: {
    school: "Government College of Engineering, Kalahandi",
    period: "2023 – 2026",
    degree: "Bachelor of Technology — Electrical Engineering",
    detail: "CGPA 8.84",
  },

  experience: [


    {
      id: "tekzy",
      company: "TEKKZY",
      period: "Apr 2025 – Oct 2025",
      role: "Software / QA Intern",
      mode: "Remote",
      logo: "/experience/tekkyz.png",
      bullets: [
        "Tested and validated web and mobile features, catching functional, UI, and performance issues before release.",
        "Partnered with developers to reproduce, track, and resolve bugs—strengthening dev–QA collaboration.",
      ],
    },
    {
      id: "rinex",
      company: "RINEX",
      period: "Jan 2025 – Mar 2025",
      role: "Web Development Intern",
      mode: "Remote",
      logo: "/experience/rinex.png",
      bullets: [
        "Built 10+ responsive pages with HTML, CSS, Bootstrap, and Tailwind CSS—mobile-first and cross-browser.",
        "Used Git/GitHub for collaborative workflows; debugged 20+ UI/layout issues across Chrome, Firefox, and Edge.",
      ],
    },
    {
      id: "auroskkil",
      company: "AUROSKKIL",
      period: "Mar 2024 – Sep 2024",
      role: "Full-Stack Developer Intern",
      mode: "Remote",
      logo: "/experience/auroskkil.png",
      bullets: [
        "Developed 2+ full-stack apps on the MERN stack with modular, scalable architecture.",
        "Built reusable React components and RESTful APIs for responsive, maintainable UIs.",
      ],
    },

  ],

  skillGroups: [
    {
      title: "AI / GenAI",
      items: [
        "LLMs",
        "RAG",
        "NLP",
        "Prompt Engineering",
        "Transformers",
        "Hugging Face",
      ],
    },
    {
      title: "Backend",
      items: ["Python", "Java", "Spring Boot", "REST APIs", "Node.js", "FastAPI"],
    },
    {
      title: "Frontend",
      items: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React.js",
        "TypeScript",
      ],
    },
    {
      title: "Cloud / DevOps",
      items: ["AWS", "Docker", "CI/CD", "Linux"],
    },
    {
      title: "Database",
      items: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools / Testing",
      items: ["Git", "Postman", "Software Testing"],
    },
  ],

  /**
   * Projects (per card):
   *   github — full repo URL, e.g. "https://github.com/satyaprakashnath2002/my-repo"
   *   href   — live demo URL
   *   image  — "/projects/screenshot.png" in /public/projects/
   */
  projects: [
    {
      id: "1",
      title: "AI-Powered Job Scraper Application",
      description:
        "Full-stack job scraping platform with FastAPI and TypeScript for real-time listings, JWT authentication, search/filtering, and AI-driven job recommendations with optimized PostgreSQL performance.",
      tags: [
        "Python",
        "TypeScript",
        "PostgreSQL",
        "FastAPI",
        "BeautifulSoup",
        "JWT",
      ],
      href: "",
      github: "https://github.com/satyaprakashnath2002/job-scraper-ai", // e.g. https://github.com/satyaprakashnath2002/job-scraper
      image: "/projects/job-scraper.png",
      featured: true,
    },
    {
      id: "2",
      title: "Full-Stack Event SaaS & Digital Ticketing",
      description:
        "Event management SaaS with real-time status tracking, secure QR-based attendee verification, analytics dashboard, and Google API integrations for smoother booking workflows.",
      tags: ["React.js", "Spring Boot", "MySQL", "Recharts", "Google APIs"],
      href: "",
      github: "https://github.com/satyaprakashnath2002/event-management-saas",
      image: "/projects/event-saas.png",
      featured: true,
    },
    {
      id: "3",
      title: "Image Processing using AI",
      description:
        "AI-driven image fusion with FusionGAN (PyTorch), preserving thermal and texture detail; quality validated with quantitative metrics using OpenCV and NumPy.",
      tags: ["Python", "PyTorch", "GANs", "OpenCV", "NumPy"],
      href: "",
      github: "https://github.com/satyaprakashnath2002/Image-processing", 
      image: "/projects/image-ai.png",
    },
    {
       id: "4",
      title: "nestorria-real-estate",
      description:
        "A modern real estate web application designed to help users explore, search, and manage property listings efficiently. The project features a responsive user interface, property details pages, search and filtering functionality, and a smooth user experience built using full-stack web technologies.",
      tags: ["Reactjs", "javaScript", "HTML", "CSS"],
      href: "",
      github: "https://github.com/satyaprakashnath2002/nestorria-real-estate", 
      image: "/projects/nestorria-real-estate.png",
    },
    {
       id: "5",
      title: "Book_Finder",
      description:
        "A web application that allows users to search and discover books quickly using an intuitive interface. The project includes features like real-time book search, book details display, responsive design, and API integration to fetch book information dynamically",
      tags: ["Reactjs", "javaScript", "HTML", "CSS"],
      href: "",
      github: "https://github.com/satyaprakashnath2002/Book_Finder", 
      image: "/projects/Book_Finder.png",
    },
     {
       id: "6",
      title: "Blog",
      description:
        "A full-stack blogging application where users can create, edit, delete, and manage blog posts. The project includes user authentication, responsive UI, dynamic content management, and secure backend integration for handling posts and user data efficiently",
      tags: ["TypeScript", "javaScript", "HTML", "CSS"],
      href: "",
      github: "https://github.com/satyaprakashnath2002/Blog", 
      image: "/projects/blog.png",
    },
    {
       id: "7",
      title: "Dental_care",
      description:
        "A modern healthcare web application designed for dental clinics to showcase services, manage appointments, and improve patient engagement. The project features a responsive design, service information pages, appointment booking functionality, and an intuitive user interface for a seamless user experience ",
      tags: ["React", "javaScript","Bootstrap"],
      href: "",
      github: "https://github.com/satyaprakashnath2002/Dental_care", 
      image: "/projects/dental.png",
    },
     {
       id: "8",
      title: "YtClone",
      description:
        "A video streaming web application inspired by YouTube, featuring video browsing, search functionality, responsive UI, and video playback capabilities. The project focuses on creating a smooth user experience with modern frontend technologies and dynamic content integration. ",
      tags: ["React", "javaScript","Bootstrap"],
      href: "",
      github: "https://github.com/satyaprakashnath2002/YtClone", 
      image: "/projects/ytclone.png",
    }
  ],
};
