# Rajesh C — Personal Portfolio Website (Generative AI Developer)

A modern, high-performance, responsive personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, **Three.js** (`@react-three/fiber` & `@react-three/drei`), and **Framer Motion**.

---

## 🌟 Key Features

1. **Interactive 3D Neural Network (Hero)**:
   - Dynamic 3D neural node-and-synapse mesh with real-time mouse parallax, ambient particle dust, and central pulsing core.
   - Built with `@react-three/fiber` and `@react-three/drei`.
   - Optimized with DPR capping (`[1, 1.5]`), mobile node reduction, and graceful CSS/SVG fallback for non-WebGL environments.

2. **Rotating Typewriter Effect**:
   - Smooth typewriter effect cycling through:
     - *"Gen AI Developer"*
     - *"Python & ML Enthusiast"*
     - *"RAG & LLM Builder"*

3. **3D Tilt Project Cards**:
   - Interactive perspective tilt following cursor with dynamic glare spotlight sheen and smooth spring physics.
   - Showcases the 3 featured projects:
     - **ShipLens** (Logistics Shipment Data Analysis & Cleaning with Pandas, NumPy, Matplotlib)
     - **DelayPredict** (Multi-Modal Shipment Delay Prediction & CNN/ANN Image Classification with TensorFlow/Keras)
     - **DocuMind** (RAG Document Q&A Chatbot with LangChain, FAISS, and Streamlit)
   - "Live Demo" button is automatically hidden when no URL is provided.
   - Strictly adheres to real project technical specs without fabricated metrics.

4. **3D Interactive Skill Cloud & Floating Badges**:
   - 3D rotating spherical skill cloud with Fibonacci distribution.
   - Grouped into 3 domains: **Gen AI & LLMs**, **Programming & ML**, **Data & Tools**.
   - Floating interactive skill badges with proficiency tags.

5. **Vertical Animated Timeline (Experience)**:
   - Features Rajesh C's role as **Customer Service Coordinator at Hapag-Lloyd, Chennai** (Jan 2025 - Present).
   - Animated timeline beacons, clear responsibility bullets, and operational competencies.

6. **Credentials & Academics**:
   - **B.Com (Information Systems)** — Ramakrishna Mission Vivekananda College, Chennai (Graduated 2024).
   - **Generative AI Certification**.
   - **Microsoft Excel Certification**.

7. **Interactive Contact & Connect**:
   - Direct communication cards with one-click email and phone copying.
   - Interactive message form with particle confetti celebration (`canvas-confetti`) and mailto fallback.

8. **Desktop Cursor Follower & Scroll Progress**:
   - Glowing dual-layer neon cursor follower with spring physics and clickable element detection.
   - Top-edge gradient scroll progress indicator.

---

## ⚙️ Configuration & Customization

All personal details, URLs, placeholder usernames, and project descriptions are centralized in **one single file**:
📁 `src/data/portfolioConfig.js`

To customize your GitHub username, edit `GITHUB_USERNAME`:
```javascript
export const GITHUB_USERNAME = "rajeshc-genai";
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or v20/v22 LTS)
- npm or pnpm or yarn

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```
Builds the static application to `dist/` with chunk splitting for high performance.

### Preview Production Build
```bash
npm run preview
```

---

## 🎨 Tech Stack
- **Framework**: React 18, Vite 5
- **Styling**: Tailwind CSS 3
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Effects**: canvas-confetti
