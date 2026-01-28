export const config = {
  profile: {
    name: "Rohit Shetake",
    title: "Full Stack Developer",
    description: "I build high-performance, visually stunning digital experiences. Specialized in React, Node.js, and pushing the boundaries of web UI.",
    avatar: "/assets/profile-removebg-preview.png",
  },
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    // { name: "Gallery", href: "#gallery" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ],
  about: {
    title: "About Me",
    summary: [
      "I'm a passionate full-stack developer with expertise in building modern web applications. With a keen eye for design and a love for clean code, I create digital experiences that are both beautiful and functional.",
    ],
    experience: [
      {
        role: "Associate Software Developer (Full Stack)",
        company: "Accucia Softwares pvt. ltd.",
        period: "Mar-2025 – Oct-2025",
        description: "Built full-stack web applications using React, Next.js, NestJS, and MongoDB. Implemented REST APIs, JWT authentication, and role-based access control while collaborating with cross-functional teams.",
        color: "blue-500",
      },
      {
        role: "Web Development Intern",
        company: "Creazione Softwares",
        period: "Feb 2024 – Jul 2024",
        description: "Worked as a Web Developer and team member on the Online Recruitment Portal project. Contributed to designing, developing, and implementing web features while collaborating closely with the team. Demonstrated strong problem-solving skills, dedication, and a disciplined work ethic throughout the internship.",
        color: "purple-500",
      },
    ],
  },
  projects: [
    {
      title: "E-Recipe Book ",
      subtitle: "Recipe Finder App",
      value: "recipe",
      description: "🌍 Fetches meal data from TheMealDB API based on your search.📜 Displays the meal’s image, origin, and ingredients. 📖 Toggles between showing and hiding recipe instructions for a cleaner interface.",
      image: "/assets/project-1.png",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      color: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-900 to-black",
      src:"https://github.com/RohitS0612/Recipe-Book",
      href:"https://rohits0612.github.io/Recipe-Book/"
    },
    {
      title: "Mac Os Portfolio",
      subtitle: "Mac OS Themed Portfolio",
      value: "macos",
      description: "A portfolio website inspired by the Mac OS interface, featuring a sleek design, interactive elements, and smooth animations to showcase projects and skills.",
      image: "/assets/project-2.png",
      tech: ["React", "Tailwind CSS", "JavaScript", "GSAP"],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900 to-black",
      src:"https://github.com/RohitS0612/MacOs_Portfolio.git",
      href:"https://mac-os-portfolio-plum.vercel.app/"
    },
    {
      title: "Bill Calculator Dashboard",
      subtitle: "Data Visualization Dashboard",
      value: "dashboard",
      description: "An interactive dashboard that visualizes billing data using charts and graphs, allowing users to analyze expenses and track financial performance over time.",
      image: "/assets/project-3.png",
      tech: ["Html", "CSS", "JavaScript", "Chart.js"],
      color: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-900 to-black",
      src:"https://github.com/RohitS0612/Bill-Calculate-Task.git",
      href:"https://bill-calculate-task.vercel.app/"
    },
    {
      title: "Inventry Order Management System",
      subtitle: "Inventory Management App",
      value: "inventory",
      description: "A comprehensive inventory management system that helps businesses track stock levels, manage orders, and streamline operations with an intuitive user interface.",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=60&w=800",
      tech: ["Java", "Jdbc", "MySQL", "Lombok", "Maven", "log4j"],
      color: "from-rose-500 to-orange-500",
      bgGradient: "from-rose-900 to-black",
       src:"https://github.com/RohitS0612/Inventory_management.git",
    },
    {
      title: "Random Dog Gallery",
      subtitle: "Dog Image Fetcher",
      value: "doggallery",
      description: "An application that fetches and displays random dog images from the Dog CEO API, allowing users to explore different breeds and enjoy adorable dog pictures.",
      image: "/assets/project-4.png",
      tech: ["React", "CSS", "JavaScript", "API"],
      color: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-900 to-black",
      src:"https://github.com/RohitS0612/Random-Dog-Photo.git",
      href:"https://random-dog-photo.vercel.app/"
    },
  ],
  skills: [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 80 },
    { name: "Tailwind CSS", level: 92 },
    { name: "MongoDB", level: 85 },
    { name: "JAVA", level: 95 },
    { name: "SprigBoot", level: 85 },
    { name: "Nest.js", level: 85 },
    { name: "Express.js", level: 85 },
    
  ],
  certifications: [
    {
      name: "Java FullStack Certified Developer",
      organization: "Giris techhub pune",
      year: "2024",
    },
    
  ],
//   gallery: [
//     { id: 1, src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400", x: 100, y: 100 },
//     { id: 2, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400", x: 400, y: 150 },
//     { id: 3, src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400", x: 700, y: 100 },
//     { id: 4, src: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=400", x: 250, y: 350 },
//     { id: 5, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400", x: 550, y: 300 },
//   ],
  contact: {
    message: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
    socials: [
      { name: "GitHub", href: "https://github.com/RohitS0612", icon: "IconBrandGithub" },
      { name: "Twitter", href: "#", icon: "IconBrandTwitter" },
      { name: "Email", href: "mailto:shetakerohit6@gmail.com", icon: "IconMail" },
      // { name: "LinkedIn", href: "https://www.linkedin.com/in/rohit-shetake-3a7728315/", icon: "IconBrandLinkedin" },
      // { name: "Phone ", href: "tel:+919309723198", icon: "IconPhone" },
    ],
  },
};
