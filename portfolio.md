Build a professional, modern, advanced personal portfolio website for a Generative AI Intern candidate in this workspace. It must look premium, with smooth 3D effects and animations, and work on mobile and desktop.

ABOUT ME (use this real content)
Name: Rajesh C
Location: Chennai, Tamil Nadu, India
Email: rajesh7904952116@gmail.com
Phone: 7904952116
LinkedIn: https://www.linkedin.com/in/rajeshc
GitHub: https://github.com/YOUR-USERNAME (use a placeholder constant that I can change in one config file)
Tagline: "Aspiring Generative AI Developer"
Intro: Customer Service Coordinator with 1.11 years of experience at Hapag-Lloyd and a Generative AI certification, moving into Gen AI. Hands-on with Python, Pandas, NumPy, machine learning, neural networks, LLM APIs, prompt engineering and RAG, backed by strong data validation and reporting skills.

TECH
React + Vite, Tailwind CSS, Three.js with @react-three/fiber and @react-three/drei, Framer Motion, Lucide icons. Use the latest compatible versions and make sure the project builds with no errors.

DESIGN
- Dark theme with a deep navy/black background, and a cyan-to-purple gradient accent.
- Modern font pairing (for example Inter for body, Space Grotesk or Sora for headings) loaded from Google Fonts.
- Glassmorphism cards (blur, thin border, soft glow), generous spacing, clean and not cluttered.
- A light/dark mode toggle is optional; default is dark.

3D AND ANIMATION EFFECTS
1. Hero section: a full-screen interactive 3D background using react-three-fiber, for example a floating glowing neural-network style node-and-line structure or a distorted glowing sphere, that slowly rotates and reacts to mouse movement (parallax).
2. A typing/rotating text effect for the tagline ("Gen AI Developer", "Python & ML Enthusiast", "RAG & LLM Builder").
3. Project cards with 3D tilt on hover (perspective transform that follows the cursor) plus a glow effect.
4. Skills section: either a rotating 3D skill sphere/cloud or animated skill badges that float, grouped as Gen AI & LLMs, Programming & ML, Data & Tools.
5. Scroll-triggered fade/slide-up animations on every section with Framer Motion.
6. A custom glowing cursor follower on desktop, and a scroll progress bar at the top.
7. Smooth scrolling and an animated sticky navbar that highlights the current section.
8. Performance: lazy-load the 3D scene, cap the pixel ratio, reduce particles on mobile, respect prefers-reduced-motion by turning off heavy animations, and fall back to a simple gradient background if WebGL is not available.

SECTIONS (single page)
1. Hero: name, rotating tagline, short intro, buttons "View Projects", "Download Resume" (link to /resume.pdf in the public folder) and "Contact Me", plus GitHub and LinkedIn icons.
2. About: short bio, a small stats row (1.11 years experience, 3 Gen AI/ML projects, 2 certifications), location.
3. Skills: grouped skills with animated badges or the 3D skill cloud.
4. Projects (3 cards, each with name, description, tech tags, a GitHub link button and a "Live Demo" button that can be hidden if no URL is set):
   - ShipLens: Shipment data analysis and cleaning with Python, Pandas, NumPy and Matplotlib. Cleaned a logistics dataset, handled missing values, duplicates and outliers, built group-by and pivot summaries, and visualised delay trends and route-wise performance.
   - DelayPredict: Shipment delay prediction and image classification with a Random Forest classifier plus two neural networks (an ANN on tabular data and a CNN for image classification) in TensorFlow/Keras, compared against the ML baseline.
   - DocuMind: A RAG-based document Q&A chatbot using LangChain, FAISS, embeddings and an LLM API with a Streamlit interface, giving answers grounded in the uploaded documents.
   Do not invent accuracy numbers or metrics.
5. Experience: a vertical animated timeline with Customer Service Coordinator, Hapag-Lloyd, Chennai (Jan 2025 - Present) and 3 short bullets: managing end-to-end shipment bookings and validating data; root-cause analysis, escalations and daily Excel reports; using generative AI tools for summarisation and documentation, following SOPs and mentoring new team members.
6. Education and Certifications: B.Com (Information Systems), Ramakrishna Mission Vivekananda College, Chennai, graduated 2024; Generative AI Certification; Microsoft Excel