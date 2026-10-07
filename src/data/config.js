export const GITHUB_USERNAME = 'rajeshc-genai';
const githubUrl = `https://github.com/${GITHUB_USERNAME}`;

export const portfolio = {
  personal: {
    name: 'Rajesh C',
    location: 'Chennai, Tamil Nadu, India',
    email: 'rajesh7904952116@gmail.com',
    phone: '7904952116',
    formattedPhone: '+91 7904952116',
    linkedinUrl: 'https://www.linkedin.com/in/rajeshc',
    githubUrl,
    resumeUrl: '/resume.pdf',
    portrait: '/rajesh.jpg',
    taglines: ['Aspiring AI & ML Professional', 'Python & Data Enthusiast', 'Open to AI/ML Opportunities'],
    intro: 'Customer Service Coordinator with 1.11 years of experience at Hapag-Lloyd and a Generative AI certification, now building a career in AI and ML. Hands-on with Python, Pandas, NumPy, machine learning, neural networks, LLM APIs, prompt engineering and RAG, backed by strong data validation and reporting skills. Seeking AI/ML roles where I can learn, build and contribute.',
    photos: ['/rajesh.jpg'],
    stats: [{ value: '1.11', label: 'Years of experience' }, { value: '3', label: 'AI/ML projects' }, { value: '2', label: 'Certifications' }],
  },
  navigation: ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Gallery', 'Contact'].map((label) => ({ label, href: `#${label.toLowerCase()}` })),
  skills: [
    { title: 'AI & LLMs', items: ['Prompt Engineering', 'LLM APIs', 'RAG', 'Embeddings', 'FAISS', 'ChromaDB', 'LangChain'] },
    { title: 'Programming & ML', items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow / Keras', 'SQL (Basic)', 'Matplotlib'] },
    { title: 'Data & Tools', items: ['MS Excel (Pivot Tables, XLOOKUP, Data Validation)', 'Jupyter Notebook', 'Git / GitHub', 'MS Word', 'PowerPoint'] },
    { title: 'Soft skills', items: ['Root-Cause Analysis', 'Stakeholder Coordination', 'Communication', 'Mentoring', 'Time Management'] },
  ],
  projects: [
    { name: 'ShipLens', resumeTitle: 'Shipment Data Analysis & Cleaning', number: '01', description: 'Shipment data analysis and cleaning with Python, Pandas, NumPy and Matplotlib. Cleaned a logistics dataset, handled missing values, duplicates and outliers, built group-by and pivot summaries, and visualised delay trends and route performance.', resumeBullets: ['Cleaned and analysed a logistics-style shipment dataset with Pandas and NumPy, handling missing values, duplicates and outliers and building group-by and pivot summaries.', 'Visualised delay trends and route-wise performance with Matplotlib; automated the workflow in a reusable Python script.'], tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib'], githubUrl: `${githubUrl}/ShipLens`, liveUrl: '' },
    { name: 'DelayPredict', resumeTitle: 'Shipment Delay Prediction & Image Classification', number: '02', description: 'Shipment delay prediction and image classification with a Random Forest classifier plus two neural networks (an ANN on tabular data and a CNN for image classification) in TensorFlow/Keras, compared against the ML baseline.', resumeBullets: ['Trained a Scikit-learn Random Forest classifier for shipment delays; evaluated accuracy, precision, recall and a confusion matrix.', 'Built an ANN on tabular data and a CNN for MNIST image classification in TensorFlow/Keras; compared both with the ML baseline.'], tags: ['Python', 'Scikit-learn', 'TensorFlow', 'Keras', 'ANN', 'CNN'], githubUrl: `${githubUrl}/DelayPredict`, liveUrl: '' },
    { name: 'DocuMind', resumeTitle: 'RAG-Based Document Q&A Chatbot', number: '03', description: 'A RAG-based document Q&A chatbot using LangChain, FAISS, embeddings and an LLM API with a Streamlit interface, giving answers grounded in uploaded documents.', resumeBullets: ['Split PDF and SOP documents into chunks, created embeddings, stored them in FAISS and retrieved relevant context for each query.', 'Used retrieved context with an LLM API and prompt templates for grounded answers; built a Streamlit chat interface.'], tags: ['LangChain', 'FAISS', 'Embeddings', 'LLM API', 'Streamlit'], githubUrl: `${githubUrl}/DocuMind`, liveUrl: '' },
  ],
  experience: {
    role: 'Customer Service Coordinator', company: 'Hapag-Lloyd', location: 'Chennai', period: 'Jan 2025 - Present',
    bullets: ['Managed end-to-end shipment bookings with high accuracy; validated customer and shipment data to keep records error-free.', 'Performed root-cause analysis on booking errors, owned escalations across departments and built daily Excel reports using Pivot Tables and XLOOKUP.', 'Used generative AI tools to speed up data summarisation and documentation; followed SOPs and mentored new team members.'],
  },
  education: {
    degree: 'B.Com (Information Systems)', institution: 'Ramakrishna Mission Vivekananda College', location: 'Chennai', year: 'Graduated 2024',
    certifications: ['Generative AI Certification', 'Microsoft Excel Certification'], languages: ['English (Fluent)', 'Tamil (Native)'],
  },
  resume: {
    target: 'Seeking a Generative AI Intern role',
    summary: 'Customer Service Coordinator with 1.11 years of experience at Hapag-Lloyd and a Generative AI certification, seeking a Generative AI Intern role. Hands-on with Python (Pandas, NumPy), machine learning, neural networks, LLM APIs, prompt engineering and Retrieval-Augmented Generation (RAG), backed by strong data validation and reporting skills.',
  },
};