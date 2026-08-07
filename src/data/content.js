export const personal = {
  name: "Pedro Rios",
  fullName: "Pedro Henrique Rodrigues dos Santos",
  tagline: "I'm <br/> Pedro Rios",
  role: "Fullstack Developer",
  bio: `My name is Pedro (Rios) Henrique Rodrigues dos Santos :D
I'm a fullstack developer building REST APIs with Java and Spring Boot, and web and desktop interfaces with React, TypeScript, and Tauri/Rust. Full development cycle experience: domain modeling, JWT authentication, Swagger/OpenAPI documentation, React frontends, and Docker deployment. Solid foundation in clean code, SOLID principles, and design patterns.

Outside of coding, I live through audiovisual work — recording, editing, color, audio, music. Logical thinking and creativity are my tools.`,
  photo: "/images/photo/perfil.jpeg",
  cvFile: "/files/Pedro_Rios_Fullstack_2026.pdf",
  whatsapp: "https://wa.me/5561992880436",
  whatsappNumber: "+55 (61) 99288-0436",
  email: "pedrohr1507@gmail.com",
  location: "Gama, DF — Brazil",
};

export const education = [
  {
    years: "2020–2022",
    title: "IT Technician",
    school: "Sena Jessé Freire — DF",
    description:
      "I had my first contact with programming during the technical course. I learned about hardware, software, and networks.",
    side: "right",
  },
  {
    years: "2023–2025",
    title: "Systems Analysis and Development",
    school: "Catholic University of Brasília",
    description:
      "Technology degree completed. I deepened my knowledge in programming and software development, learning fundamental concepts such as software architecture, databases, and agile methodologies.",
    side: "left",
  },
];

export const experience = [
  {
    year: "2024",
    subtitle: "— Present",
    title: "Fullstack Developer",
    company: "Freelancer / Personal Projects",
    description:
      "Developed REST APIs with Spring Boot, including a URL shortener with access tracking and an e-commerce system with 6 modeled domain entities. Built a cross-platform desktop application using Tauri, Rust, and React. Deployed applications using Docker with complete Swagger documentation. Applied Git version control, SOLID principles, and clean code practices throughout.",
  },
  {
    year: "2025",
    subtitle: "Mar — Aug 2025",
    title: "IT Support Technician",
    company: "Prioriza Soluções Digitais",
    description:
      "Preventive and corrective maintenance of IT equipment. Installation and configuration of operating systems and software. Diagnosis of hardware and local network issues.",
  },
  {
    year: "2023",
    subtitle: "— Mar 2025",
    title: "IT Support Technician",
    company: "Drogaria Manancial",
    description:
      "Technical support for internal equipment and networks. Diagnosis and resolution of hardware and software issues. Customer-facing technical support.",
  },
];

export const services = [
  {
    iconKey: "api",
    title: "REST APIs",
    description:
      "Development of RESTful APIs with Java and Spring Boot — domain modeling, JWT authentication, Swagger/OpenAPI documentation, and PostgreSQL persistence.",
  },
  {
    iconKey: "web",
    title: "Web Frontends",
    description:
      "Development of web interfaces with React and TypeScript, integrating with backend APIs and delivering responsive, accessible user experiences.",
  },
  {
    iconKey: "desktop",
    title: "Desktop Apps",
    description:
      "Development of cross-platform desktop applications with Tauri, Rust, and React — native-feeling, lightweight, and deployable with Docker.",
  },
  {
    iconKey: "design",
    title: "UI Prototyping",
    description:
      "Prototyping and designing interfaces in Figma — user flows, wireframes, and high-fidelity mockups with UX best practices.",
  },
];

export const skills = [
  { name: "Java", percent: 90, color: "#00c8ff" },
  { name: "Spring Boot", percent: 85, color: "#ff8511" },
  { name: "React", percent: 80, color: "#f26525" },
  { name: "TypeScript", percent: 80, color: "#3178c6" },
  { name: "Rust", percent: 70, color: "#ce422b" },
  { name: "Docker", percent: 75, color: "#1d8bbe" },
  { name: "PostgreSQL", percent: 85, color: "#336791" },
  { name: "Git", percent: 85, color: "#f34f29" },
  { name: "Figma", percent: 65, color: "#a259ff" },
  { name: "Linux", percent: 75, color: "#fcc624" },
];

import pomiImage from '../assets/Images/pomiimage.png';
import todoImage from '../assets/Images/ToDoList.png';
import nosqlImage from '../assets/Images/nosql.png';
import contactImage from '../assets/Images/contact.png';
import paytoolImage from '../assets/Images/paytool.png';
import overcomeCampvideo from '../assets/Videos/Overcomecampvideo.mov';
export const projects = [
  {
    slug: "pomi-app",
    title: "Pomi",
    headline: "Minimalist Pomodoro timer that lives in the macOS menu bar",
    description:
      "A distraction-free Pomodoro timer built with Tauri 2 that lives in the menu bar. Features quick presets (5/15/25/45 min), a customizable slider, a visual progress ring that changes color in the last 20%, and native macOS notifications when time runs out.",
    problem:
      "Existing Pomodoro apps were either too heavy, lived in the Dock instead of the menu bar, or distracted with ads and unnecessary features. Wanted a minimal, native-feeling timer that's always one click away without cluttering the workspace.",
    stack: ["React", "TypeScript", "Tauri", "Rust"],
    category: "Desktop",
    year: 2026,
    image: pomiImage,
    mediaType: "image",
    link: "https://rios-pedro.github.io/pomi-site/",
    repo: "https://github.com/rios-pedro/pomi",
    linkedinPost: null,
    highlight: true,
  },
  {
    slug: "overcome-camp",
    title: "Overcome Camp 2026",
    headline: "Automated church camp member management",
    description:
      "A web app that connects to a Google Sheet to display and update church camp members and teams in real time.",
    problem:
      "Camp leaders had to manually compile and share lists every time membership or team assignments changed. There was no single source of truth accessible by multiple people.",
    stack: ["React", "TypeScript", "Google Sheets API"],
    category: "Fullstack",
    year: 2026,
    image: "/images/content/overcome.png",
    mediaType: "video",
    video: overcomeCampvideo,
    link: "https://overcomecamp2026.vercel.app/",
    repo: null,
    linkedinPost: "https://www.linkedin.com/posts/pedro-rios-backend_overcomecamp2026-react-typescript-activity-123456789",
    highlight: true,
  },
  {
    slug: "paytool",
    title: "Paytool",
    headline: "RESTful payment service with layered architecture",
    description:
      "A web service with a complete domain model (Users, Orders, Products, Categories and Payments), structured in logical layers with exception handling and H2 in-memory database for testing.",
    problem:
      "Needed a clean, testable backend foundation for a payment domain that separates concerns across Resource, Service, and Repository layers.",
    stack: ["Java", "Spring Boot", "JPA", "Hibernate", "H2"],
    category: "Backend",
    year: 2026,
    image: paytoolImage,
    mediaType: "image",
    link: "https://github.com/rios-pedro/paytool",
    repo: "https://github.com/rios-pedro/paytool",
    linkedinPost: "https://www.linkedin.com/posts/pedro-rios-backend_paytool-java-springboot-activity-123456789",
    highlight: false,
  },
  {
    slug: "react-todo",
    title: "React To-Do List",
    headline: "Lightweight task manager with local persistence",
    description:
      "A responsive task manager built with React and Hooks. Add, remove, and toggle tasks with data persisted via localStorage.",
    problem:
      "Wanted a zero-dependency, fast-loading task manager that works offline and doesn't require a backend or account.",
    stack: ["React", "Hooks", "CSS"],
    category: "Fullstack",
    year: 2025,
    image: todoImage,
    mediaType: "image",
    link: "https://react-to-do-list-ten-gray.vercel.app",
    repo: "https://github.com/rios-pedro/React-To-Do-List",
    linkedinPost: null,
    highlight: false,
  },
  {
    slug: "social-api-nosql",
    title: "Social API NoSQL",
    headline: "Social network API backed by document-oriented NoSQL",
    description:
      "A RESTful social network API built with Java, Spring Boot and MongoDB. Uses a document-oriented NoSQL database to manage user data and social interactions.",
    problem:
      "Wanted to explore MongoDB's document model for social graph data — flexible schemas for user profiles, posts, and interactions without rigid table joins.",
    stack: ["Java", "Spring Boot", "MongoDB"],
    category: "Backend",
    year: 2025,
    image: nosqlImage,
    mediaType: "image",
    link: "https://github.com/rios-pedro/socialApiNoSql",
    repo: "https://github.com/rios-pedro/socialApiNoSql",
    linkedinPost: null,
    highlight: false,
  },
  {
    slug: "contact-api",
    title: "Contact API",
    headline: "Contact management REST API with Swagger docs",
    description:
      "REST API for contact management built with Spring Boot. Fully documented with Swagger, features validation (minimum age 18), CRUD operations, and PostgreSQL persistence.",
    problem:
      "Needed a production-ready contact management backend with auto-generated API docs, input validation, and soft-delete patterns for future frontend consumption.",
    stack: ["Java 17", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Swagger", "Lombok"],
    category: "Backend",
    year: 2025,
    image: contactImage,
    mediaType: "image",
    link: "https://github.com/rios-pedro/contact",
    repo: "https://github.com/rios-pedro/contact",
    linkedinPost: null,
    highlight: true,
  },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/predu_hr/",
  github: "https://github.com/rios-pedro",
  linkedin: "https://www.linkedin.com/in/pedro-rios-backend",
  whatsapp: "https://wa.me/5561992880438",
};

export const formspreeEndpoint = "https://formspree.io/f/mlqgjrjpo";