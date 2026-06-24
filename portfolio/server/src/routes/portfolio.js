const express = require('express');
const router = express.Router();

const data = {
  personal: {
    name: "Namrata Karki",
    title: "Data Science & AI Enthusiast",
    tagline: "Turning data into insight. Engineering what matters.",
    email: "karkinamrata030@gmail.com",
    phone: "+977 ",
    location: "Aarubari, Kathmandu, Nepal",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "#",
    resumeUrl: encodeURI("/Namrata Resume.pdf"),
    resumeFileName: "Namrata-Karki-Resume.pdf"
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
    { degree: "+2 Science", institution: "Kathmandu Modal College — NEB", period: "2020 – 2022", status: "completed" },
    { degree: "SEE", institution: "Jeevan Tara Academy — NEB", period: "2020", status: "completed" }
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
      description: "A mobile web application that uses computer vision to detect crop diseases from leaf photos, designed specifically for low-literacy farmers in rural Nepal.",
      longDescription: "AgriScan is a mobile-first web application built to help rural farmers in Nepal identify crop diseases quickly and accurately — without needing to log in or navigate complex UIs. Farmers simply take a photo of a diseased leaf and receive an instant diagnosis along with treatment recommendations in Nepali.\n\nThe core ML model is a fine-tuned EfficientNetB0 trained across 39 disease classes with 93% accuracy. The rembg library strips distracting backgrounds from leaf photos before inference. Groq LLM generates dynamic, context-aware treatment recommendations in plain language. gTTS converts recommendations to Nepali audio output, making the tool accessible to farmers who can't read.",
      highlights: ["93% accuracy across 39 disease classes", "Nepali voice output via gTTS", "Zero login friction design", "Background removal with rembg", "Groq LLM treatment recommendations"],
      tech: ["React.js", "Python", "FastAPI", "TensorFlow", "EfficientNetB0", "Groq API", "gTTS", "rembg"],
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
      description: "Centralizes learning resources with semantic search, assessments, and progress tracking. Built with role-based access control and AI integration.",
      longDescription: "LearnBox is a comprehensive educational platform that brings together learning resources, AI-powered semantic search, assessments, and real-time progress tracking under one roof. Students can search for learning content semantically — not just keyword matching — and receive personalized suggestions based on their progress.\n\nRole-based access control separates the experience for students, instructors, and administrators. Instructors can upload and curate content, create assessments, and monitor student progress. The PostgreSQL backend handles complex relational data across users, content, and assessments efficiently.",
      highlights: ["Semantic search with AI integration", "Role-based access for students & instructors", "Real-time progress tracking", "Assessment engine with auto-grading", "PostgreSQL relational data architecture"],
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
      description: "A supervised machine learning model to predict heart disease risk with high accuracy, including feature engineering and a clean evaluation pipeline.",
      longDescription: "This project implements a supervised learning pipeline to predict the likelihood of heart disease in patients based on clinical features. Multiple classification algorithms were trained and evaluated — including Logistic Regression, Random Forest, and SVM — with the best model selected based on accuracy, precision, and recall metrics.\n\nFeature engineering played a key role: correlation analysis, handling class imbalance with SMOTE, and hyperparameter tuning using GridSearchCV. The final model achieves strong performance on held-out test data with proper cross-validation to prevent overfitting.",
      highlights: ["Multiple classifier comparison", "SMOTE for class imbalance", "GridSearchCV hyperparameter tuning", "Cross-validated evaluation pipeline", "Feature importance analysis"],
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "SMOTE"],
      screenshots: ["heart-1.png", "heart-2.png"],
      highlight: true,
      color: "#a64f5b"
    },
    {
      id: "vpms",
      title: "Vehicle Parts Management System",
      category: "Full Stack",
      type: "Academic Project",
      tagline: "Inventory & Service Management Platform",
      description: "Comprehensive platform with vendor/customer management, financial reporting, role-based access, and real-time appointment scheduling.",
      longDescription: "VPMS is a full-stack inventory and service management application for vehicle parts distribution. It handles the full operational workflow: vendor onboarding, customer management, parts inventory, service appointment scheduling, and financial reporting.\n\nRole-based access control separates functionality for admins, staff, and customers. Real-time appointment scheduling prevents double-booking. The financial reporting module generates summaries of sales, returns, and revenue — all exportable.",
      highlights: ["Real-time appointment scheduling", "Financial reporting module", "Vendor & customer management", "Role-based access control", "Inventory tracking with alerts"],
      tech: ["ASP.NET Core 8.0", "React", "PostgreSQL", "C#", "Entity Framework"],
      screenshots: ["vpms-1.png", "vpms-2.png"],
      highlight: false,
      color: "#6a5a8a"
    },
    {
      id: "journalmate",
      title: "JournalMate",
      category: "Mobile / Desktop",
      type: "Academic Project",
      tagline: "Cross-Platform Secure Journaling App",
      description: "Cross-platform journaling app with PIN authentication, AES encryption, SQLite storage, and modern Razor component UI.",
      longDescription: "JournalMate is a privacy-first journaling application built with .NET MAUI Blazor Hybrid, targeting both Android and Windows from a shared codebase. All journal entries are encrypted at rest using AES encryption — the encryption key is derived from the user's PIN, so no one else can access entries.\n\nThe UI uses Razor components for a responsive, consistent experience across screen sizes. SQLite handles local storage with an efficient schema designed for fast search and filtering of journal entries.",
      highlights: ["AES encryption for all entries", "PIN-derived encryption key", "Cross-platform: Android & Windows", "Offline-first with SQLite", "Full-text search across entries"],
      tech: [".NET MAUI", "Blazor Hybrid", "SQLite", "C#", "AES Encryption"],
      screenshots: ["journalmate-1.png"],
      highlight: false,
      color: "#5a8a6a"
    },
    {
      id: "kumaricinemas",
      title: "KumariCinemas",
      category: "Full Stack",
      type: "Academic Project",
      tagline: "Cinema Management & Ticketing System",
      description: "Full cinema management system with automated ticket cancellation, real-time occupancy monitoring, and complete theatre operations.",
      longDescription: "KumariCinemas is a web-based cinema management system that handles the full lifecycle of theatre operations: managing theatres, scheduling movie shows, processing ticket bookings, and monitoring real-time seat occupancy.\n\nThe automated ticket cancellation module runs on a timer — if payment isn't completed within a window, seats are released back to inventory automatically. The admin dashboard gives a live view of occupancy per show, with Bootstrap-powered responsive UI.",
      highlights: ["Automated ticket cancellation module", "Real-time occupancy monitoring", "Multi-theatre management", "Complete booking lifecycle", "Responsive Bootstrap UI"],
      tech: ["ASP.NET Web Forms", "Oracle Database", "Bootstrap", "C#"],
      screenshots: ["kumari-1.png"],
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
      longDescription: "Cliniterra is a full-featured clinic management web application built with Jakarta EE. It enables secure patient registration, doctor profile management, appointment booking, and admin oversight of the entire clinic workflow.\n\nPatients can book appointments online, view their history, and communicate with doctors through the portal. Doctors manage their schedule and patient records. Admins have full visibility and control over all clinic operations.",
      highlights: ["Patient-doctor interaction portal", "Online appointment booking", "Secure auth with Jakarta EE", "Admin dashboard", "Appointment history tracking"],
      tech: ["Jakarta EE", "Java", "Relational Database", "JSP", "Servlet"],
      screenshots: ["cliniterra-1.png"],
      highlight: false,
      color: "#3a6a8a"
    },
    {
      id: "rental-system",
      title: "Rental Management System",
      category: "Python App",
      type: "Academic Project",
      tagline: "Land Rental Operations for TechnoPropertyNepal",
      description: "Python application for TechnoPropertyNepal enabling efficient land rental record management with intuitive UI for transaction processing.",
      longDescription: "Built for TechnoPropertyNepal, this Python application manages the full lifecycle of land rental operations: recording new rental agreements, tracking payment histories, generating receipts, and managing tenant records.\n\nThe application uses a clean menu-driven interface that non-technical staff can operate with minimal training. File-based persistence ensures data survives application restarts without requiring a database server.",
      highlights: ["Menu-driven interface for non-technical staff", "Full rental agreement lifecycle", "Payment tracking & receipt generation", "File-based persistence", "OOP architecture"],
      tech: ["Python", "OOP", "File I/O", "CLI"],
      screenshots: [],
      highlight: false,
      color: "#6a8a3a"
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

router.get('/', (req, res) => res.json(data));
router.get('/projects', (req, res) => res.json(data.projects));
router.get('/projects/:id', (req, res) => {
  const p = data.projects.find(p => p.id === req.params.id);
  if (!p) return res.status(404).json({ error: 'Project not found' });
  res.json(p);
});

module.exports = router;
