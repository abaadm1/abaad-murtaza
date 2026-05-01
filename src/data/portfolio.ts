export const profile = {
  name: "Abaad Murtaza",
  title: "Data Scientist — AI & Machine Learning Engineer",
  location: "Germany",
  email: "abaadmurtaza105@gmail.com",
  phone: "+49 1776 864013",
  github: "https://github.com/abaadm1",
  linkedin: "https://www.linkedin.com/in/abaad-murtaza/",
  tagline:
    "Building end-to-end AI systems — from LLM pipelines and RAG to computer vision in production.",
  intro:
    "Data Scientist & AI/ML Engineer with 2+ years of experience across research and industry. Currently pursuing an M.Sc. in Data Science & AI at Saarland University while researching at DFKI.",
};

export const about = {
  paragraphs: [
    "I'm a Data Scientist and AI/ML Engineer specialising in machine learning, computer vision, large language models, and backend development. I love turning research into shipped products — and shipping products that actually use research.",
    "Today I'm completing my M.Sc. in Data Science and Artificial Intelligence at Saarland University, Germany, while working as an AI Research Assistant at the German Research Center for Artificial Intelligence (DFKI), focused on LLM-based automation systems.",
  ],
  highlights: [
    "M.Sc. Data Science & AI — Saarland University (2024–2026)",
    "AI Research Assistant at DFKI",
    "2+ years across LLMs, RAG, CV and OCR pipelines",
    "Languages: Urdu (native), English (C1), German (A1)",
  ],
};

export type Experience = {
  role: string;
  company: string;
  location?: string;
  duration: string;
  bullets: string[];
  tags?: string[];
};

export const experiences: Experience[] = [
  {
    role: "AI Research Assistant",
    company: "German Research Center for AI (DFKI)",
    location: "Germany",
    duration: "Dec 2024 – Present",
    bullets: [
      "Built text-to-BPMN prototypes (Llama, Qwen, GPT-OSS, DeepSeek) with an intermediate language (BPIL) — ~2.5x faster generation, ~75% fewer tokens than direct XML.",
      "Engineered backend & deployment pipelines using FastAPI, Docker, Ollama, Hugging Face, Transformers, and vLLM.",
      "Implemented an image-to-BPMN service using Faster R-CNN for element detection and DeepSeek OCR for text extraction.",
      "Produced synthetic BPMN-text datasets and applied prompt engineering for LLM fine-tuning and evaluation.",
    ],
    tags: ["LLMs", "FastAPI", "Docker", "vLLM", "Faster R-CNN"],
  },
  {
    role: "Data Scientist",
    company: "Bank Alfalah Limited",
    location: "Pakistan",
    duration: "Sep 2023 – Mar 2024",
    bullets: [
      "Automated OCR pipelines (EasyOCR, PaddleOCR) for account statement & salary slip verification — cut review time from 30 → 12 min/document, 2.5x more efficient.",
      "Built a video-based sentiment monitoring system (DeepFace + Power BI) across 4 camera feeds for a luxury branch.",
      "Delivered dashboards & EDA on ~2.5 TB of data in MS SQL Server for operational and risk decisions.",
    ],
    tags: ["OCR", "DeepFace", "Power BI", "MS SQL"],
  },
  {
    role: "Associate Data Scientist",
    company: "Centegy Technologies",
    location: "Pakistan",
    duration: "Sep 2022 – Aug 2023",
    bullets: [
      "Shipped production Flask APIs to serve ML models inside enterprise applications.",
      "Fine-tuned a one-shot detector (OS2D) for shelf planogram compliance across 90+ products at 72% accuracy.",
      "Optimised truck loading via 3D bin packing — improving space utilisation and planning time.",
    ],
    tags: ["Flask", "OS2D", "3D Bin Packing"],
  },
  {
    role: "Teaching Assistant — StatsLab",
    company: "Saarland University",
    location: "Germany",
    duration: "Apr 2026 – Present",
    bullets: [
      "TA for Prof. Dr. Verena Wolf — weekly tutorials, Python-based problem solving, grading.",
    ],
    tags: ["Teaching", "Python", "Statistics"],
  },
  {
    role: "Teaching Assistant — Neural Networks",
    company: "Saarland University",
    location: "Germany",
    duration: "Oct 2025 – Mar 2026",
    bullets: [
      "TA for Prof. Dr. Dietrich Klakow — prepared assignments & exams, ran tutorials for 25 students.",
    ],
    tags: ["Teaching", "Deep Learning"],
  },
  {
    role: "Data Analytics Trainer",
    company: "Institute of Emerging Careers",
    duration: "Mar 2024 – Aug 2024",
    bullets: [
      "Taught 15+ career-changers Python (basics → OOP) and the data stack: NumPy, Pandas, Matplotlib, Seaborn.",
    ],
    tags: ["Teaching", "Python", "Pandas"],
  },
  {
    role: "AI R&D Intern",
    company: "Afiniti",
    location: "Karachi, Pakistan",
    duration: "Jun 2022 – Aug 2022",
    bullets: [
      "Translated a Regression Tree module from Julia to Python (Polars) and assessed time complexity.",
      "Wrote and ran test cases to evaluate Python implementations.",
    ],
    tags: ["Julia", "Python", "Polars"],
  },
  {
    role: "Software Engineer Intern",
    company: "Xynotech",
    location: "Karachi, Pakistan",
    duration: "Feb 2022 – May 2022",
    bullets: [
      "Built UIs with AngularJS, HTML and SCSS; integrated RESTful services; wrote unit tests.",
    ],
    tags: ["AngularJS", "REST", "SCSS"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Profile Assistant Chatbot",
    description:
      "RAG chatbot that answers recruiter questions about my profile from local docs — LangChain + FAISS + Gemini, deployed as a Streamlit app with quick-prompt buttons.",
    tech: ["LangChain", "FAISS", "Gemini", "Streamlit", "RAG"],
  },
  {
    title: "Rapid Account Opening via Facial Verification",
    description:
      "Selfie-to-ID verification pipeline for Bank Alfalah onboarding. MTCNN + FaceNet embeddings + MiniFASNetV2 liveness — 87.6% TAR @ 0.1% FMR; cut onboarding from 2 days to <24h.",
    tech: ["MTCNN", "FaceNet", "MiniFASNetV2", "Computer Vision"],
  },
  {
    title: "Vocal Sentiment Analysis (Urdu)",
    description:
      "Urdu speech emotion recognition system. Built a 1,000-sample dataset, MFCC features, CNN classifier, and a Flask API for predictions.",
    tech: ["MFCC", "CNN", "Flask", "NLP"],
  },
  {
    title: "Food Detection & Calorie Estimation",
    description:
      "Detect, segment and classify food items from images and estimate calories. Mask R-CNN beat YOLOv8 with 69.22% mean class accuracy on a 12-class Food-101 subset.",
    tech: ["Mask R-CNN", "YOLOv8", "Segmentation"],
  },
  {
    title: "Fine-Tuning MolFormer for Lipophilicity",
    description:
      "Fine-tuned IBM MolFormer on the MoleculeNet Lipophilicity dataset and compared full FT, LoRA, BitFit and iA3 — plus external data selection strategies.",
    tech: ["MolFormer", "LoRA", "BitFit", "iA3", "Hugging Face"],
  },
  {
    title: "Solar Energy Yield Forecasting",
    description:
      "Research collaboration forecasting solar energy yield from photovoltaic cells using deep learning time-series methods.",
    tech: ["Deep Learning", "Time Series", "Python"],
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "SQL", "NoSQL", "Julia"],
  },
  {
    title: "AI / ML",
    items: [
      "PyTorch",
      "Hugging Face",
      "scikit-learn",
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "AutoGen",
      "Pydantic AI",
      "LoRA / BitFit / iA3",
      "Prompt Engineering",
    ],
  },
  {
    title: "Computer Vision",
    items: [
      "OpenCV",
      "Faster R-CNN",
      "Mask R-CNN",
      "YOLOv8",
      "MTCNN",
      "FaceNet",
      "DeepFace",
      "OS2D",
      "MiniFASNetV2",
    ],
  },
  {
    title: "NLP & OCR",
    items: [
      "NLP",
      "Machine Translation",
      "Speech Emotion Recognition",
      "MFCC",
      "EasyOCR",
      "PaddleOCR",
      "DeepSeek OCR",
    ],
  },
  {
    title: "LLM Tooling",
    items: ["Ollama", "vLLM", "Llama", "Qwen", "DeepSeek", "GPT-OSS", "Gemini", "OpenAI API"],
  },
  {
    title: "Data & Analytics",
    items: ["NumPy", "Pandas", "Polars", "Matplotlib", "Seaborn", "Power BI", "MS SQL Server"],
  },
  {
    title: "Backend & Web",
    items: ["FastAPI", "Flask", "Django", "Streamlit", "Node.js", "React", "AngularJS", "REST"],
  },
  {
    title: "DevOps & Infra",
    items: ["Docker", "Portainer", "CI/CD", "Git", "Bash", "Linux", "FAISS", "ChromaDB"],
  },
];

export const education = [
  {
    degree: "M.Sc. Data Science & Artificial Intelligence",
    school: "Saarland University, Germany",
    duration: "2024 – 2026 (expected)",
  },
  {
    degree: "B.Eng. Computer Systems Engineering",
    school: "NED University of Engineering & Technology, Pakistan",
    duration: "2018 – 2022",
  },
  {
    degree: "M2L Summer School (Mediterranean ML)",
    school: "University of Milano-Bicocca, Italy",
    duration: "September 2024",
  },
];

export const certifications = [
  "Google Data Analytics Professional Certificate — Coursera",
  "Data Scientist with Python Track — DataCamp",
];