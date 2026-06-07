export interface Profile {
  name: string;
  title: string;
  description: string;
  avatar: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  value: string;
  description: string;
  achievements: string[];
  image: string;
  tech: string[];
  src: string;
  href?: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface CertificationItem {
  name: string;
  organization: string;
  year: string;
}

export interface ContactDetails {
  message: string;
  email: string;
  phone: string;
  whatsapp: string;
  socials: { name: string; href: string; icon: string }[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
}

export interface Config {
  profile: Profile;
  navigation: NavigationItem[];
  about: {
    title: string;
    summary: string[];
    experience: ExperienceItem[];
  };
  projects: ProjectItem[];
  skills: SkillCategory[];
  certifications: CertificationItem[];
  contact: ContactDetails;
  testimonials: TestimonialItem[];
}

export const config: Config = {
  profile: {
    name: "Rohit Shetake",
    title: "Full Stack Engineer",
    description: "I engineer high-performance, visually elegant, and scalably secure digital solutions. Specialized in React, TypeScript, Node.js, and advanced interactive systems.",
    avatar: "/assets/profile-removebg-preview.png",
  },
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ],
  about: {
    title: "About Me",
    summary: [
      "I am a passionate Full Stack Engineer specializing in modern, responsive web architectures and reliable backend systems. With a strong eye for clean layouts, spacing, and micro-interactions, I focus on delivering products that combine visual elegance with architectural precision.",
      "My development philosophy centers on performance, maintainability, and clean code principles. I leverage standard design patterns and modern tools to build secure and responsive web assets for enterprise-level demands."
    ],
    experience: [
      {
        role: "Full Stack Developer",
        company: "SR Integrated Circuit India Private Limited",
        period: "Apr 2026 – Present",
        description: "Building scalable web and Android applications using React, NestJS, and PostgreSQL. Developing secure REST APIs, authentication workflows, and business-critical backend services while optimizing database performance through efficient schema design and query tuning. Contributing to mobile application development, API integrations, testing, deployment, and performance improvements. Collaborating with cross-functional teams to deliver reliable, high-performance software solutions."
      },
      {
        role: "Associate Software Developer (Full Stack)",
        company: "Accucia Softwares Pvt. Ltd.",
        period: "Mar 2025 – Oct 2025",
        description: "Built robust web applications using React, Next.js, NestJS, and MongoDB. Engineered custom RESTful APIs, JWT/session authentication, and fine-grained role-based access control. Improved loading performance and optimized data synchronization layers.",
      },
      {
        role: "Web Development Intern",
        company: "Creazione Softwares",
        period: "Feb 2024 – Jul 2024",
        description: "Developed and maintained recruitment dashboard interfaces. Designed responsive panels, integrated database operations, and coordinated with engineers to optimize API query performance.",
      },
    ],
  },
  projects: [
    {
      title: "E-Recipe Book",
      subtitle: "Dynamic Recipe Finder",
      value: "recipe",
      description: "A responsive, API-driven recipe discovery application. Implemented interactive query matching, ingredient lists mapping, and video embedding.",
      achievements: [
        "Optimized external API query overhead with client-side debounce mechanisms.",
        "Designed clean, responsive layouts facilitating rapid search filtering.",
        "Built dynamic view states showing cooking guidelines, ingredients, and metrics."
      ],
      image: "/assets/project-1.png",
      tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
      src: "https://github.com/RohitS0612/Recipe-Book",
      href: "https://rohits0612.github.io/Recipe-Book/"
    },
    {
      title: "Mac OS Portfolio",
      subtitle: "Desktop OS Web Experience",
      value: "macos",
      description: "A unique, highly interactive portfolio mirroring the macOS operating system UI. Features responsive windows, real-time widgets, and multi-app simulation.",
      achievements: [
        "Built a modular window manager allowing dragging, scaling, minimizing, and layout saving.",
        "Implemented smooth, hardware-accelerated animations using GSAP and Framer Motion, achieving 60 FPS.",
        "Developed custom apps within the portfolio including terminal simulator, dock, and file finder."
      ],
      image: "/assets/project-2.png",
      tech: ["React", "Tailwind CSS", "JavaScript", "GSAP", "Framer Motion"],
      src: "https://github.com/RohitS0612/MacOs_Portfolio.git",
      href: "https://mac-os-portfolio-plum.vercel.app/"
    },
    {
      title: "Bill Calculator Dashboard",
      subtitle: "Financial Metrics & Data Viz",
      value: "dashboard",
      description: "An interactive dashboard visualizing dynamic bill calculations, historical spending, and analytical trends with charts.",
      achievements: [
        "Integrated Chart.js to render responsive line, bar, and doughnut billing analytics charts.",
        "Built an interactive calculator allowing immediate billing simulation and custom reports export.",
        "Reduced page load and processing time by deferring heavy non-critical calculations."
      ],
      image: "/assets/project-3.png",
      tech: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
      src: "https://github.com/RohitS0612/Bill-Calculate-Task.git",
      href: "https://bill-calculate-task.vercel.app/"
    },
    {
      title: "Inventory Management System",
      subtitle: "Enterprise Order & Stock Control",
      value: "inventory",
      description: "A secure inventory and order management system built for tracking transactions, warehouse stock levels, and operations.",
      achievements: [
        "Developed structured database schemas using JDBC and MySQL with optimized indexing.",
        "Designed transactional operations in Java backend, preventing concurrency conflicts.",
        "Implemented secure login authentication, logging, and error tracking with Log4j."
      ],
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=60&w=800",
      tech: ["Java", "JDBC", "MySQL", "Maven", "Log4j"],
      src: "https://github.com/RohitS0612/Inventory_management.git",
    },
    {
      title: "Random Dog Gallery",
      subtitle: "Async Media Gallery",
      value: "doggallery",
      description: "A fast, async image media gallery showcasing animal breeds using lazy loading and dynamic fetch API integrations.",
      achievements: [
        "Implemented responsive CSS Grid layouts for optimal display on small and large screens.",
        "Integrated async fetch API handlers with error handling and fallback skeletons.",
        "Reduced initial bundle rendering size by introducing lazy image loading."
      ],
      image: "/assets/project-4.png",
      tech: ["React", "CSS3", "JavaScript", "REST API"],
      src: "https://github.com/RohitS0612/Random-Dog-Photo.git",
      href: "https://random-dog-photo.vercel.app/"
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 88 },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Nest.js", level: 85 },
        { name: "Spring Boot", level: 80 },
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 80 },
      ]
    },
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 85 },
        { name: "Java", level: 90 },
        { name: "Python", level: 80 },
      ]
    },
    {
      category: "AI & Tools",
      items: [
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 75 },
        { name: "REST APIs", level: 95 },
        { name: "GSAP", level: 80 },
      ]
    }
  ],
  certifications: [
    {
      name: "Java FullStack Certified Developer",
      organization: "Giris Techhub Pune",
      year: "2024",
    },
  ],
  contact: {
    message: "I am always open to discussing new opportunities, full-stack architectural roles, or technical challenges. Drop a message below or reach out via social channels.",
    email: "shetakerohit6@gmail.com",
    phone: "+91 9309723198",
    whatsapp: "https://wa.me/919309723198",
    socials: [
      { name: "GitHub", href: "https://github.com/RohitS0612", icon: "IconBrandGithub" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/rohit-shetake-3a7728315/", icon: "IconBrandLinkedin" },
      { name: "Email", href: "mailto:shetakerohit6@gmail.com", icon: "IconMail" },
    ],
  },
  testimonials: [
    {
      name: "Alex Rivera",
      role: "Senior Architect @ Vercel",
      content: "Rohit's attention to architectural detail is rare. He doesn't just build features; he builds scalable systems."
    },
    {
      name: "Sarah Chen",
      role: "Lead Engineer @ Stripe",
      content: "A master of micro-interactions and performance. The level of polish in his work is truly world-class."
    },
    {
      name: "Jordan Smith",
      role: "Director of Engineering",
      content: "Technically fearless. Rohit solved concurrency issues our team had been struggling with for months."
    },
    {
      name: "Elena Petrova",
      role: "Senior Full Stack Dev",
      content: "Clean code, robust testing, and a deep understanding of the full stack. A true engineering asset."
    }
  ],
};