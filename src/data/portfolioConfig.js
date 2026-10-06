/**
 * Rajesh C - Portfolio Configuration & Content
 * 
 * Update your personal links, username, or content here.
 * Everything across the site references this central file!
 */

export const GITHUB_USERNAME = "racerrajesh1413-art";

export const PORTFOLIO_CONFIG = {
  // Personal Details
  personal: {
    name: "Rajesh C",
    role: "Aspiring Generative AI Developer",
    location: "Chennai, Tamil Nadu, India",
    email: "rajesh7904952116@gmail.com",
    phone: "7904952116",
    formattedPhone: "+91 7904952116",
    
    // Configurable URLs
    githubUsername: GITHUB_USERNAME,
    githubUrl: `https://github.com/${GITHUB_USERNAME}`,
    linkedinUrl: "https://www.linkedin.com/in/rajeshc",
    resumeUrl: "/resume.pdf", // Link to resume in public folder
    
    // Rotating taglines for typewriter/hero banner
    rotatingTitles: [
      "Gen AI Developer",
      "Python & ML Enthusiast",
      "RAG & LLM Builder"
    ],
    
    // Bio & Introduction
    tagline: "Aspiring Generative AI Developer",
    shortBio: "Customer Service Coordinator with 1.11 years of experience at Hapag-Lloyd and a Generative AI certification, moving into Gen AI. Hands-on with Python, Pandas, NumPy, machine learning, neural networks, LLM APIs, prompt engineering and RAG, backed by strong data validation and reporting skills.",
    
    detailedBio: [
      "I am a results-oriented professional transitioning into Generative AI engineering, combining rigorous analytical problem-solving with cutting-edge AI technologies.",
      "With 1.11 years of experience at global logistics leader Hapag-Lloyd, I specialize in end-to-end data integrity, workflow automation, and structured technical problem resolution. Leveraging my Generative AI certification, I build practical AI applications — from Retrieval-Augmented Generation (RAG) pipelines and LLM integrations to machine learning models for predictive forecasting.",
      "Passionate about building scalable AI-native tools, fine-tuning retrieval accuracy, and translating complex data into actionable intelligent solutions."
    ],
    
    // Key highlights / quick stats
    stats: [
      {
        id: "exp",
        value: "1.11+",
        unit: "Years",
        label: "Industry Experience",
        sublabel: "at Hapag-Lloyd"
      },
      {
        id: "projects",
        value: "3",
        unit: "Production",
        label: "AI & ML Projects",
        sublabel: "RAG, DL, Analytics"
      },
      {
        id: "certs",
        value: "2",
        unit: "Verified",
        label: "Certifications",
        sublabel: "Gen AI & Excel"
      },
      {
        id: "location",
        value: "Chennai",
        unit: "TN, India",
        label: "Base Location",
        sublabel: "Open to Relocation/Remote"
      }
    ]
  },

  // Skills Grouped into 3 Main Categories
  skills: {
    categories: [
      {
        id: "genai",
        name: "Gen AI & LLMs",
        description: "Architecting contextual AI systems with retrieval, embeddings, and prompt orchestration.",
        icon: "Bot",
        color: "from-cyan-500 to-blue-500",
        glow: "rgba(6, 182, 212, 0.4)",
        items: [
          { name: "RAG Architecture", level: "Advanced", icon: "Database" },
          { name: "LLM APIs", level: "Advanced", icon: "Cpu" },
          { name: "Prompt Engineering", level: "Advanced", icon: "Sparkles" },
          { name: "LangChain", level: "Hands-on", icon: "Boxes" },
          { name: "FAISS Vector DB", level: "Hands-on", icon: "Layers" },
          { name: "Vector Embeddings", level: "Proficient", icon: "Binary" },
          { name: "Document Q&A Pipelines", level: "Hands-on", icon: "FileText" },
          { name: "Context Retrieval", level: "Proficient", icon: "Search" }
        ]
      },
      {
        id: "ml",
        name: "Programming & ML",
        description: "Implementing deep learning models, classification pipelines, and Python scripting.",
        icon: "Brain",
        color: "from-purple-500 to-pink-500",
        glow: "rgba(168, 85, 247, 0.4)",
        items: [
          { name: "Python", level: "Proficient", icon: "Terminal" },
          { name: "TensorFlow / Keras", level: "Hands-on", icon: "Cpu" },
          { name: "Neural Networks (ANN)", level: "Hands-on", icon: "Network" },
          { name: "Convolutional Networks (CNN)", level: "Hands-on", icon: "Eye" },
          { name: "Random Forest Classifier", level: "Proficient", icon: "GitFork" },
          { name: "Scikit-learn", level: "Proficient", icon: "Sliders" },
          { name: "Model Evaluation", level: "Hands-on", icon: "BarChart3" },
          { name: "Baseline ML Comparison", level: "Proficient", icon: "Scale" }
        ]
      },
      {
        id: "data",
        name: "Data & Tools",
        description: "End-to-end data pipelines, exploratory analysis, reporting, and deployment apps.",
        icon: "Database",
        color: "from-emerald-400 to-cyan-500",
        glow: "rgba(168, 185, 129, 0.4)",
        items: [
          { name: "Pandas", level: "Proficient", icon: "Table" },
          { name: "NumPy", level: "Proficient", icon: "Calculator" },
          { name: "Matplotlib & Seaborn", level: "Proficient", icon: "LineChart" },
          { name: "Data Cleaning & Imputation", level: "Advanced", icon: "Filter" },
          { name: "Pivot & Summary Tables", level: "Advanced", icon: "Grid" },
          { name: "Streamlit UI", level: "Hands-on", icon: "Layout" },
          { name: "Advanced Microsoft Excel", level: "Expert", icon: "Sheet" },
          { name: "Git & Version Control", level: "Proficient", icon: "GitBranch" }
        ]
      }
    ]
  },

  // Projects (Real Content - strictly following user instructions, no invented accuracy numbers)
  projects: [
    {
      id: "shiplens",
      title: "ShipLens",
      subtitle: "Logistics Shipment Data Analysis & Cleaning",
      category: "Data Analytics & Python",
      description: "Comprehensive shipment data analysis and data cleaning pipeline built with Python, Pandas, NumPy, and Matplotlib. Cleaned a real-world logistics dataset, effectively handled missing values, duplicates, and outliers, built group-by and pivot summaries, and visualised delay trends and route-wise performance.",
      longDescription: "ShipLens tackles complex messy shipping datasets by establishing a deterministic data cleaning pipeline. It inspects multi-modal anomalies, resolves null distributions, consolidates carrier and transit paths through aggregation pivots, and yields actionable visual reports on bottlenecks and carrier reliability.",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA", "Data Validation"],
      featured: true,
      githubUrl: `https://github.com/${GITHUB_USERNAME}/ShipLens`,
      liveUrl: null, // Hidden if no URL set
      highlights: [
        "Data hygiene pipeline: eliminated duplicate booking indices, resolved inconsistent null representations, and treated statistical outliers.",
        "Engineered pivot tables and multi-level group-by aggregations to calculate route transit velocities.",
        "Crafted publication-grade Matplotlib charts mapping delay variations across regional hubs and vessel routes."
      ],
      icon: "Ship",
      accent: "cyan"
    },
    {
      id: "delaypredict",
      title: "DelayPredict",
      subtitle: "Multi-Modal Shipment Delay Prediction & Image Classification",
      category: "Machine Learning & Deep Learning",
      description: "Shipment delay prediction and image classification featuring a Random Forest classifier plus two neural networks (an Artificial Neural Network on tabular shipment data and a Convolutional Neural Network for container/cargo image classification) in TensorFlow/Keras, systematically compared against the ML baseline.",
      longDescription: "DelayPredict compares classical machine learning with modern deep learning for supply chain forecasting. Utilizing structured shipment features, the tabular ANN and baseline Random Forest predict transit delay risk, while the CNN module analyzes cargo imagery to evaluate condition attributes.",
      tags: ["Python", "TensorFlow", "Keras", "ANN", "CNN", "Random Forest", "Scikit-learn"],
      featured: true,
      githubUrl: `https://github.com/${GITHUB_USERNAME}/DelayPredict`,
      liveUrl: null, // Hidden if no URL set
      highlights: [
        "Constructed an end-to-end ML workflow benchmarking Random Forest against deep Artificial Neural Networks (ANN).",
        "Engineered a Convolutional Neural Network (CNN) in TensorFlow/Keras for cargo imagery categorization.",
        "Performed rigorous feature scaling, one-hot encoding, and hyperparameter checks to prevent data leakage."
      ],
      icon: "Cpu",
      accent: "purple"
    },
    {
      id: "documind",
      title: "DocuMind",
      subtitle: "RAG-Powered Document Intelligence & Q&A Assistant",
      category: "Generative AI & LLMs",
      description: "A RAG-based document Q&A chatbot using LangChain, FAISS vector search, embeddings, and an LLM API with an interactive Streamlit interface, delivering grounded, hallucination-resistant answers strictly sourced from uploaded documents.",
      longDescription: "DocuMind implements a production-grade Retrieval-Augmented Generation pipeline. It segments long-form PDF, text, and policy documentation into contextual chunks, generates dense vector representations stored in a FAISS index, and retrieves top-k relevant context to guide the LLM's answers with precise attribution.",
      tags: ["LangChain", "FAISS", "LLM APIs", "Embeddings", "RAG", "Streamlit", "Python"],
      featured: true,
      githubUrl: `https://github.com/${GITHUB_USERNAME}/DocuMind`,
      liveUrl: null, // Hidden if no URL set
      highlights: [
        "Built chunking and embedding retrieval pipelines using LangChain and high-performance FAISS indexing.",
        "Integrated prompt templates with strict grounding constraints to guarantee answers originate exclusively from reference docs.",
        "Developed an intuitive Streamlit interface featuring dynamic document upload, retrieval inspector, and streaming chat."
      ],
      icon: "Sparkles",
      accent: "cyan-purple"
    }
  ],

  // Professional Experience
  experience: [
    {
      id: "hapag-lloyd",
      role: "Customer Service Coordinator",
      company: "Hapag-Lloyd",
      companyUrl: "https://www.hapag-lloyd.com",
      location: "Chennai, Tamil Nadu, India",
      period: "Jan 2025 - Present",
      duration: "1.11 years",
      type: "Full-Time",
      description: "Driving operational excellence, high-precision data validation, and AI-assisted workflow optimization at one of the world's leading container liner shipping companies.",
      bullets: [
        "Managing end-to-end shipment bookings and validating critical data with rigorous adherence to global compliance standards.",
        "Executing thorough root-cause analysis for transport anomalies, resolving high-priority escalations, and compiling comprehensive daily Excel reports for regional management.",
        "Leveraging generative AI tools for accelerated summarisation, structured documentation, and SOP workflows, while proactively mentoring new team members on operational protocols."
      ],
      skillsUsed: ["Data Validation", "Generative AI Tools", "Root Cause Analysis", "Excel Reporting", "SOP Compliance", "Stakeholder Communication"]
    }
  ],

  // Education & Certifications
  educationAndCerts: {
    education: [
      {
        degree: "B.Com (Information Systems)",
        institution: "Ramakrishna Mission Vivekananda College",
        location: "Chennai, Tamil Nadu, India",
        year: "Graduated 2024",
        status: "Completed",
        details: "Comprehensive coursework bridging corporate systems, information technology, database concepts, and data management."
      }
    ],
    certifications: [
      {
        title: "Generative AI Certification",
        issuer: "Industry Recognized Program",
        focus: "LLMs, Prompt Engineering, RAG Architectures, Vector Embeddings & Agentic Systems",
        badge: "Gen AI Certified",
        verified: true
      },
      {
        title: "Microsoft Excel Certification",
        issuer: "Microsoft Certified / Advanced Specialist",
        focus: "Advanced Formulas, Pivot Tables, Data Modelling, Lookup Functions & Reporting Dashboards",
        badge: "Excel Specialist",
        verified: true
      }
    ]
  },

  // Contact Info
  contact: {
    email: "rajesh7904952116@gmail.com",
    phone: "7904952116",
    formattedPhone: "+91 7904952116",
    location: "Chennai, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/rajeshc",
    github: `https://github.com/${GITHUB_USERNAME}`,
    availability: "Available for Gen AI & ML Roles / Internships",
    timezone: "IST (UTC+5:30)"
  },

  // Navigation Links
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ]
};
