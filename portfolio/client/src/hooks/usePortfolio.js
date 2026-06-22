import { useState, useEffect } from 'react';
import api from '../utils/api';

const fallback = {
  personal: {
    name: "Namrata Karki",
    title: "Data Science & AI Enthusiast",
    tagline: "Turning data into insight. Engineering what matters.",
    email: "karkinamrata030@gmail.com",
    phone: "+977 ",
    location: "Aarubari, Kathmandu, Nepal",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  about: "I'm a BSc Computing student at Islington College (London Metropolitan University) with a deep interest in data science, artificial intelligence, and research-driven problem solving. I enjoy working with data — finding patterns, building models, and turning numbers into decisions. I've built full-stack production systems including a core banking internship, and I bring that engineering foundation into everything I do. Ultimately, I want to work at the intersection of data, AI, and meaningful technical research.",
  experience: [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "Core Banking System (CBS)",
      location: "Chandol-4, Kathmandu",
      period: "Jun 2025 – Sep 2025",
      type: "Internship",
      points: [
        "Built transactional modules and RESTful APIs using .NET and ASP.NET Core MVC",
        "Implemented role-based access control and Razor UI components",
        "Optimized PostgreSQL database performance and query efficiency",
        "Handled logging, error management, and testing for real-time banking operations",
        "Used Dapper ORM for data access layer across complex financial modules"
      ],
      tech: [".NET", "ASP.NET Core MVC", "Dapper", "PostgreSQL", "C#"]
    }
  ],
  education: [
    { degree: "BSc (Hons) Computing", institution: "Islington College — London Metropolitan University", period: "2023 – Present", status: "ongoing" },
    { degree: "+2 Science", institution: "Kathmandu Modal College — NEB", period: "2020 – 2022", status: "completed" }
  ],
  skills: {
    languages: ["C#", "Java", "Python", "JavaScript", "SQL", "HTML & CSS"],
    frameworks: [".NET / ASP.NET Core", "React.js", "Node.js", "Express.js", "FastAPI", ".NET MAUI Blazor"],
    databases: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "Oracle"],
    tools: ["Git", "GitHub", "RESTful APIs", "Machine Learning", "TensorFlow", "Data Analysis", "Data Visualization"],
    soft: ["Leadership", "Critical Thinking", "Problem Solving", "Team Collaboration", "Adaptability", "Creativity"]
  },
  projects: [
    {
      id: "agriscan",
      title: "AgriScan",
      category: "AI / ML",
      type: "Personal Project",
      tagline: "AI-Powered Crop Disease Detection for Rural Nepal",
      description: "A mobile web application that uses computer vision to detect crop diseases from leaf photos, designed for low-literacy farmers in rural Nepal.",
      longDescription: "AgriScan is a mobile-first web application built to help rural farmers in Nepal identify crop diseases quickly and accurately — without needing to log in or navigate complex UIs. Farmers simply take a photo of a diseased leaf and receive an instant diagnosis along with treatment recommendations in Nepali.\n\nThe core ML model is a fine-tuned EfficientNetB0 trained across 39 disease classes with 93% accuracy. rembg strips distracting backgrounds before inference. Groq LLM generates dynamic, context-aware treatment recommendations. gTTS converts recommendations to Nepali audio output.",
      highlights: ["93% accuracy across 39 disease classes", "Nepali voice output via gTTS", "Zero login friction design", "Background removal with rembg", "Groq LLM treatment recommendations"],
      tech: ["React.js", "Python", "FastAPI", "TensorFlow", "EfficientNetB0", "Groq API", "gTTS"],
      screenshots: ["agriscan-1.png", "agriscan-2.png", "agriscan-3.png"],
      highlight: true,
      color: "#4a7c59"
    },
    {
      id: "learnbox",
      title: "LearnBox",
      category: "Full Stack / AI",
      type: "Academic Project",
      tagline: "AI-Powered Educational Platform",
      description: "Centralizes learning resources with semantic search, assessments, and progress tracking with role-based access control.",
      longDescription: "LearnBox is a comprehensive educational platform that brings together learning resources, AI-powered semantic search, assessments, and real-time progress tracking. Role-based access control separates the experience for students, instructors, and administrators.\n\nInstructors can upload and curate content, create assessments, and monitor student progress. The PostgreSQL backend handles complex relational data across users, content, and assessments efficiently.",
      highlights: ["Semantic search with AI integration", "Role-based access for students & instructors", "Real-time progress tracking", "Assessment engine with auto-grading"],
      tech: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "AI"],
      screenshots: ["learnbox-1.png", "learnbox-2.png"],
      highlight: true,
      color: "#5b6fa6"
    },
    {
      id: "heart-disease",
      title: "Heart Disease Prediction",
      category: "Machine Learning",
      type: "Academic Project",
      tagline: "Supervised ML for Cardiac Risk Assessment",
      description: "Supervised ML model to predict heart disease risk with feature engineering, model comparison, and a clean evaluation pipeline.",
      longDescription: "This project implements a supervised learning pipeline to predict the likelihood of heart disease in patients based on clinical features. Multiple classifiers were trained and evaluated with the best model selected based on accuracy, precision, and recall.\n\nFeature engineering played a key role: correlation analysis, handling class imbalance with SMOTE, and hyperparameter tuning using GridSearchCV.",
      highlights: ["Multiple classifier comparison", "SMOTE for class imbalance", "GridSearchCV hyperparameter tuning", "Cross-validated evaluation pipeline"],
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      screenshots: [],
      highlight: true,
      color: "#a64f5b"
    },
    {
      id: "vpms",
      title: "Vehicle Parts Management",
      category: "Full Stack",
      type: "Academic Project",
      tagline: "Inventory & Service Management Platform",
      description: "Comprehensive platform with vendor/customer management, financial reporting, role-based access, and real-time appointment scheduling.",
      longDescription: "VPMS handles the full operational workflow: vendor onboarding, customer management, parts inventory, service scheduling, and financial reporting. Role-based access separates functionality for admins, staff, and customers.",
      highlights: ["Real-time appointment scheduling", "Financial reporting module", "Vendor & customer management", "Role-based access control"],
      tech: ["ASP.NET Core 8.0", "React", "PostgreSQL", "C#"],
      screenshots: [],
      highlight: false,
      color: "#6a5a8a"
    },
    {
      id: "journalmate",
      title: "JournalMate",
      category: "Mobile / Desktop",
      type: "Academic Project",
      tagline: "Cross-Platform Secure Journaling App",
      description: "Cross-platform journaling app with PIN authentication, AES encryption, SQLite storage, and modern Razor UI.",
      longDescription: "JournalMate is a privacy-first journaling app built with .NET MAUI Blazor Hybrid. All entries are AES-encrypted at rest, key derived from the user's PIN. SQLite handles local storage for offline-first operation.",
      highlights: ["AES encryption for all entries", "PIN-derived encryption key", "Cross-platform: Android & Windows", "Offline-first with SQLite"],
      tech: [".NET MAUI", "Blazor Hybrid", "SQLite", "C#"],
      screenshots: [],
      highlight: false,
      color: "#5a8a6a"
    },
    {
      id: "kumaricinemas",
      title: "KumariCinemas",
      category: "Full Stack",
      type: "Academic Project",
      tagline: "Cinema Management & Ticketing",
      description: "Full cinema management with automated cancellations, real-time occupancy monitoring, and complete theatre operations.",
      longDescription: "KumariCinemas handles the full lifecycle of theatre operations: scheduling shows, processing bookings, and monitoring seat occupancy in real time. Automated ticket cancellation releases held seats if payment isn't completed in time.",
      highlights: ["Automated ticket cancellation", "Real-time occupancy monitoring", "Multi-theatre management"],
      tech: ["ASP.NET Web Forms", "Oracle Database", "Bootstrap"],
      screenshots: [],
      highlight: false,
      color: "#8a6a3a"
    },
    {
      id: "cliniterra",
      title: "Cliniterra",
      category: "Web App",
      type: "Academic Project",
      tagline: "Clinic Management & Patient Portal",
      description: "Responsive clinic management system with secure backend, patient-doctor interactions, and appointment management.",
      longDescription: "Cliniterra enables secure patient registration, doctor profile management, appointment booking, and admin oversight. Patients can book appointments online, view history, and communicate with doctors.",
      highlights: ["Patient-doctor interaction portal", "Online appointment booking", "Admin dashboard"],
      tech: ["Jakarta EE", "Java", "Relational Database"],
      screenshots: [],
      highlight: false,
      color: "#3a6a8a"
    }
  ],
  certificates: [
    "AWS Academy Cloud Foundations",
    "AWS Academy Machine Learning Foundations",
    "AWS Academy ML for Natural Language Processing",
    "AWS Academy Data Engineering",
    "Supervised Machine Learning: Regression and Classification",
    "Full Stack Development with JS, React and Node",
    "Data Structures and Algorithms",
    "Full Stack Developer Intern Completion"
  ]
};

export function usePortfolio() {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/portfolio')
      .then(r => setData(r.data))
      .catch(() => {}) // silently use fallback
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
