// src/data/projects.js
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.png";
import projImg8 from "../assets/img/project-img8.png";

const projectData = [
  {
    id: "1",
    title: "Real-Time Code Editor",
    description:
      "Collaborative real-time code editor with WebSockets & Node.js.",
    longDescription:
      "A collaborative real-time code editor built using Node.js and WebSockets, allowing multiple users to edit code simultaneously with live updates.",
    technologies: ["Node.js", "WebSockets", "JavaScript"],
    imgUrl: projImg1,
    images: [projImg1],
    liveUrl: null,
    githubUrl: "https://github.com/imsejal/realtime-code-editor",
  },
  {
    id: "2",
    title: "Sign Language Interpreter",
    description: "Deep learning model to interpret sign language gestures.",
    longDescription:
      "This project uses a convolutional neural network (CNN) to interpret hand gestures and translate them into text, facilitating communication for hearing-impaired users.",
    technologies: ["Python", "CNN", "Deep Learning"],
    imgUrl: projImg8,
    images: [projImg8],
    liveUrl: null,
    githubUrl: "https://github.com/imsejal/sign-language-interpreter",
  },
  {
    id: "3",
    title: "Algorithm Visualization Tool",
    description:
      "Interactive tool to visualize sorting and pathfinding algorithms.",
    longDescription:
      "A web-based tool for visualizing various algorithms in real-time, helping students and developers understand how algorithms work step by step.",
    technologies: ["C++", "DSA", "React"],
    imgUrl: projImg2,
    images: [projImg2],
    liveUrl: null,
    githubUrl: "https://github.com/imsejal/algorithm-visualizer",
  },
  {
    id: "4",
    title: "ImaginAI (Generative AI App)",
    description: "A generative AI app for creating images from prompts.",
    longDescription:
      "An AI-powered app that generates unique images from user prompts using generative AI models. Built with ReactJS and Node.js for a smooth UI/UX.",
    technologies: ["Generative AI", "ReactJS", "Node.js"],
    imgUrl: projImg3,
    images: [projImg3],
    liveUrl: null,
    githubUrl: "https://github.com/imsejal/imaginAI",
  },
  {
    id: "5",
    title: "Billing System",
    description: "A C++ program for managing products and generating bills.",
    longDescription:
      "A console-based billing system built in C++ that manages products, calculates total bills, and generates invoices for customers using file handling.",
    technologies: ["C++", "File Handling"],
    imgUrl: projImg4,
    images: [projImg4],
    liveUrl: null,
    githubUrl: "https://github.com/imsejal/billing-system",
  },
  {
    id: "6",
    title: "2248 Puzzle Game",
    description: "A number-merging puzzle game built with ReactJS.",
    longDescription:
      "A web-based 2248 puzzle game where players merge tiles to reach higher numbers. Built with ReactJS and JavaScript with responsive design.",
    technologies: ["ReactJS", "JavaScript", "CSS"],
    imgUrl: projImg5,
    images: [projImg5],
    liveUrl: null,
    githubUrl: "https://github.com/imsejal/2248-puzzle-game",
  },
];

export default projectData;
