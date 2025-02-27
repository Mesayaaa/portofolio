import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiRedux, SiSocketdotio, SiVuedotjs, SiD3Dotjs, SiFirebase, SiTensorflow, SiGraphql, SiMongodb } from "react-icons/si";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  technologies?: {
    name: string;
    icon: any;
  }[];
}

export const projects: Project[] = [
  {
    title: "Modern E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Includes user authentication, product management, and payment integration.",
    image: "/images/mesaya11.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "https://github.com/christophermesaya/ecommerce",
    demo: "https://ecommerce.christophermesaya.dev",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    title: "Task Management Dashboard",
    description:
      "A responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/mesaya11.jpg",
    tags: ["React", "Redux", "Node.js", "Socket.io"],
    github: "https://github.com/christophermesaya/task-dashboard",
    demo: "https://dashboard.christophermesaya.dev",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Redux", icon: SiRedux },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Socket.io", icon: SiSocketdotio },
    ],
  },
  {
    title: "Social Media Analytics",
    description:
      "An analytics dashboard for social media managers with data visualization, reporting tools, and AI-powered insights.",
    image: "/images/mesaya11.jpg",
    tags: ["Vue.js", "D3.js", "Firebase", "TensorFlow.js"],
    github: "https://github.com/christophermesaya/social-analytics",
    demo: "https://analytics.christophermesaya.dev",
    technologies: [
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "D3.js", icon: SiD3Dotjs },
      { name: "Firebase", icon: SiFirebase },
      { name: "TensorFlow.js", icon: SiTensorflow },
    ],
  },
  {
    title: "Real Estate Platform",
    description:
      "A modern real estate platform with property listings, virtual tours, and advanced search functionality.",
    image: "/images/mesaya11.jpg",
    tags: ["React", "Next.js", "GraphQL", "MongoDB"],
    github: "https://github.com/christophermesaya/realestate",
    demo: "https://realestate.christophermesaya.dev",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "GraphQL", icon: SiGraphql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
]; 