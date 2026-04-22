export type NavItem = {
  id: string;
  label: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  items: Array<{
    name: string;
    level: number;
  }>;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  stack: string[];
  metrics: string[];
  githubUrl: string;
  demoUrl: string;
  accent: string;
};

export type TimelineItem = {
  type: "Experience" | "Education";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  intro: string;
  bio: string;
  goals: string;
  strengths: string[];
};

export type HeroStat = {
  value: string;
  label: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const profile: Profile = {
  name: "Tran Van Quan",
  role: "Website Developer",
  location: "Hiep Phu Ward, Thu Duc City",
  intro:
    "Fourth-year Information Technology student passionate about building intuitive, highly responsive web interfaces with hands-on full-stack project experience.",
  bio:
    "I am a fourth-year IT student majoring in Software Engineering at HUTECH University. I focus on practical website development with clean architecture and user-centered interfaces, and I have project experience across React, TypeScript, Java Spring Boot, ASP.NET Core, and Laravel ecosystems.",
  goals:
    "I am seeking a Website Developer role to apply my academic foundation in a real-world environment and deepen my expertise across the full website development and deployment lifecycle.",
  strengths: [
    "Hands-on delivery of responsive interfaces with reusable component architecture",
    "Solid understanding of OOP, MVC, REST API, and CRUD with practical backend integration",
    "Strong adaptability with Git workflows, CI/CD automation, and AI-assisted development"
  ]
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export const heroStats: HeroStat[] = [
  { value: "4+", label: "Production-style projects" },
  { value: "3", label: "Primary backend ecosystems" },
  { value: "100%", label: "Responsive-first mindset" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive and user-friendly interfaces with modern frameworks.",
    items: [
      { name: "React", level: 80 },
      { name: "Vue.js", level: 76 },
      { name: "JavaScript / TypeScript", level: 78 }
    ]
  },
  {
    title: "Backend",
    description: "Service development and API implementation with practical architecture patterns.",
    items: [
      { name: "Java Spring Boot", level: 77 },
      { name: "ASP.NET Core", level: 75 },
      { name: "Node.js", level: 74 },
      { name: "PHP (Laravel)", level: 72 }
    ]
  },
  {
    title: "Tools",
    description: "Version control, editor workflow, data tools, and deployment automation.",
    items: [
      { name: "Git", level: 79 },
      { name: "GitHub", level: 78 },
      { name: "GitHub Actions", level: 74 },
      { name: "MySQL / SQL Server", level: 73 }
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "okabe-task-manager-website",
    title: "OKABE (Task Manager Website)",
    category: "Full-stack Project",
    summary:
      "A free Kanban-based task management platform that helps small teams and startups organize their workflows efficiently without relying on paid tools.",
    description:
      "Built a collaborative task management website with React, Spring Boot, WebSocket, and Docker to support real-time teamwork, clearer coordination, and practical delivery workflows.",
    challenge:
      "Creating a task platform that stays simple for small teams while still supporting real-time updates, collaboration visibility, and dependable workflow tracking.",
    solution:
      "Implemented a Kanban-style system with React TypeScript on the frontend, Java Spring Boot on the backend, WebSocket for live updates, and Docker plus GitHub Actions for CI/CD and deployment flow.",
    outcome:
      "Improved team collaboration through real-time notifications, shared activity history, and a more transparent task workflow that helps reduce information loss.",
    stack: ["Java Spring Boot", "MySQL", "React", "TypeScript", "WebSocket", "Docker", "GitHub Actions"],
    metrics: ["Kanban-based task workflow", "Real-time updates", "Notification + activity history"],
    githubUrl: "https://github.com/tvquan2004-svg/OKABE",
    demoUrl: "https://okabe.vercel.app/",
    accent: "from-emerald-500/25 via-teal-500/20 to-cyan-500/30"
  },
  {
    slug: "sole-mundo-commerce",
    title: "Sole Mundo (Shoes Shop)",
    category: "E-commerce Project",
    summary:
      "A full-featured online shoe retailer platform with product browsing, search filtering, cart management, and secure checkout.",
    description:
      "Built a practical commerce system with Java Spring Boot, MySQL, and Thymeleaf to deliver a straightforward customer shopping flow and reliable backend operations.",
    challenge:
      "Balancing user-friendly shopping interactions with backend reliability for product and order management in a scalable structure.",
    solution:
      "Implemented core commerce features including browsing, filtering, cart, and checkout with a layered architecture that separates business logic and data operations.",
    outcome:
      "Delivered a stable end-to-end shopping experience while reinforcing my backend architecture, data management, and maintainability mindset.",
    stack: ["Java Spring Boot", "MySQL", "Thymeleaf"],
    metrics: ["Product browsing + filtering", "Cart + secure checkout", "Order management foundation"],
    githubUrl: "https://github.com/tvquan2004-svg/Sole-Mundo",
    demoUrl: "https://github.com/tvquan2004-svg/Sole-Mundo",
    accent: "from-sky-500/25 via-blue-500/20 to-indigo-500/30"
  },
  {
    slug: "no-code-web-app-builder",
    title: "No-code Web App Builder",
    category: "Full-stack Platform",
    summary:
      "A platform that lets users create custom applications through drag-and-drop components and publish them to a shared marketplace.",
    description:
      "Engineered a no-code builder experience using React, ASP.NET Core, and MongoDB to support visual app construction and community publishing workflows.",
    challenge:
      "Designing a system that supports deep app personalization and multiple user-published products while preserving clean architecture and data safety.",
    solution:
      "Combined a drag-and-drop frontend builder with backend services for storing, publishing, and managing generated apps in a marketplace-oriented workflow.",
    outcome:
      "Empowered users with flexible no-code creation while significantly improving my high-level architecture and system design capabilities.",
    stack: ["React", "ASP.NET Core", "MongoDB"],
    metrics: ["Drag-and-drop builder", "Marketplace publishing", "Advanced system design"],
    githubUrl: "https://github.com/tvquan2004-svg/NEXUS",
    demoUrl: "https://github.com/tvquan2004-svg/NEXUS",
    accent: "from-amber-500/25 via-orange-500/20 to-rose-500/30"
  }
];

export const timeline: TimelineItem[] = [
  {
    type: "Experience",
    title: "Project-based Software Development",
    organization: "Academic + Personal Projects",
    period: "2023 - Present",
    description:
      "Delivered multiple real-world inspired projects across frontend and backend technologies to strengthen practical engineering skills.",
    highlights: [
      "Built and maintained layered and multi-tenant architectures",
      "Implemented responsive interfaces with React and modern CSS frameworks",
      "Collaborated through Git workflows and project documentation"
    ]
  },
  {
    type: "Education",
    title: "Information Technology (Software Engineering)",
    organization: "HUTECH University",
    period: "2022 - 2026",
    description:
      "Final-year student with academic focus on software engineering fundamentals and web system development.",
    highlights: [
      "Major: Software Engineering",
      "GPA: 3.0 / 4.0",
      "Coursework and projects in frontend, backend, and database systems"
    ]
  },
  {
    type: "Experience",
    title: "Certifications and Self-learning",
    organization: "Cisco NetAcad + Self-study",
    period: "2025",
    description:
      "Continually improved technical foundations through structured certificates and independent learning.",
    highlights: [
      "Networking Basics (Nov 2025)",
      "JavaScript Essentials 1",
      "JavaScript Essentials 2 (Dec 2025)"
    ]
  }
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "tvquan2004@gmail.com",
    href: "mailto:tvquan2004@gmail.com"
  },
  {
    label: "GitHub",
    value: "github.com/tvquan2004-svg",
    href: "https://github.com/tvquan2004-svg"
  }
];
