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
    "I'm a Data Scientist and AI/ML Engineer specialising in machine learning, computer vision, large language models, and backend development. I love turning research into shipped products, and shipping products that actually use research.",
    "Currently completing my M.Sc. in Data Science and Artificial Intelligence at Saarland University, Germany, while working as an AI Research Assistant at the German Research Center for Artificial Intelligence (DFKI), focused on LLM-based automation systems.",
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
  companyLink?: string;
  location?: string;
  duration: string;
  bullets: string[];
  tags?: string[];
  category: "professional" | "teaching";
};

export const experiences: Experience[] = [
  {
    role: "AI Research Assistant",
    company: "German Research Center for AI (DFKI)",
    companyLink: "https://www.dfki.de/en/web/research/research-departments/institute-for-information-systems",
    location: "Germany",
    duration: "Dec 2024 – Present",
    bullets: [
      "Built text-to-BPMN prototypes for KicoPro using Llama/Qwen/DeepSeek with BPIL intermediate language — 2.5x faster generation, 75% fewer tokens.",
      "Engineered backend & deployment pipelines for LLM-based BPMN generation using FastAPI, Docker, Ollama, Hugging Face, and vLLM.",
      "Applied prompt engineering & created synthetic BPMN-text datasets for LLM fine-tuning and evaluation.",
      "Implemented image-to-BPMN service using Faster R-CNN for detection and DeepSeek OCR for text extraction.",
    ],
    tags: ["LLMs", "FastAPI", "Docker", "vLLM", "Faster R-CNN"],
    category: "professional",
  },
  {
    role: "Data Scientist",
    company: "Bank Alfalah Limited",
    companyLink: "https://www.bankalfalah.com/",
    location: "Pakistan",
    duration: "Sep 2023 – Mar 2024",
    bullets: [
      "Automated OCR pipelines for account/salary slip verification using EasyOCR/PaddleOCR — cut time from 30→12 min per document, 2.5x more efficient.",
      "Built video-based sentiment monitoring system using DeepFace + Power BI for luxury branch, tracking 4 camera feeds for customer analytics.",
      "Delivered dashboards & EDA on 2.5 TB data in MS SQL Server to support operational and risk decisions.",
    ],
    tags: ["OCR", "DeepFace", "Power BI", "MS SQL"],
    category: "professional",
  },
  {
    role: "Associate Data Scientist",
    company: "Centegy Technologies",
    companyLink: "https://www.centegytechnologies.com/",
    location: "Pakistan",
    duration: "Sep 2022 – Aug 2023",
    bullets: [
      "Implemented production Flask APIs to integrate ML models into enterprise applications.",
      "Fine-tuned OS2D detector for shelf planogram compliance across 90+ products — 72% accuracy.",
      "Optimised truck loading using 3D bin packing to improve space utilisation and reduce planning time.",
    ],
    tags: ["Flask", "OS2D", "3D Bin Packing"],
    category: "professional",
  },
  {
    role: "Teaching Assistant — StatsLab",
    company: "Saarland University",
    companyLink: "https://www.uni-saarland.de/en/home.html",
    location: "Germany",
    duration: "Apr 2026 – Present",
    bullets: [
      "TA for Prof. Dr. Verena Wolf — weekly tutorials, Python-based problem solving, grading.",
    ],
    tags: ["Teaching", "Python", "Statistics"],
    category: "teaching",
  },
  {
    role: "Teaching Assistant — Neural Networks",
    company: "Saarland University",
    companyLink: "https://www.uni-saarland.de/en/home.html",
    location: "Germany",
    duration: "Oct 2025 – Mar 2026",
    bullets: [
      "TA for Prof. Dr. Dietrich Klakow — prepared assignments & exams, ran tutorials for 25 students.",
    ],
    tags: ["Teaching", "Deep Learning"],
    category: "teaching",
  },
  {
    role: "Data Analytics Trainer",
    company: "Institute of Emerging Careers",
    companyLink: "https://iec.org.pk/",
    duration: "Mar 2024 – Aug 2024",
    bullets: [
      "Taught 15+ career-changers Python (basics → OOP) and the data stack: NumPy, Pandas, Matplotlib, Seaborn.",
      "Also covered data visualization with Plotly and Tableau.",
    ],
    tags: ["Teaching", "Python", "Pandas"],
    category: "teaching",
  },
  {
    role: "AI R&D Intern",
    company: "Afiniti",
    companyLink: "https://www.afiniti.com/",
    location: "Karachi, Pakistan",
    duration: "Jun 2022 – Aug 2022",
    bullets: [
      "Translated a Regression Tree module from Julia to Python (Polars) and assessed time complexity.",
      "Wrote and ran test cases to evaluate Python implementations.",
      "Improved the performance of the Regression Tree module by 30% through optimization techniques.",
    ],
    tags: ["Julia", "Python", "Polars"],
    category: "professional",
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  domain: "computer-vision" | "machine-learning" | "nlp" | "security" | "production" | "research" | "all";
};

export const projects: Project[] = [
  {
    title: "Profile Assistant Chatbot",
    description: "Developed a retrieval-augmented chatbot to answer recruiter questions about my profile, including skills, education, and experience, using local documents. Built a RAG pipeline with LangChain, FAISS, and Google Gemini, and deployed it as a Streamlit web app with a recruiter-friendly conversational interface.",
    tech: ["LangChain", "FAISS", "Google Gemini", "Streamlit", "RAG"],
    github: "https://github.com/abaadm1/personal-chatbot",
    domain: "nlp",
  },
  {
    title: "Food Detection and Calorie Estimation from Images",
    description: "Developed a food image analysis pipeline using Mask R-CNN and YOLOv8 to detect, segment, and classify food items from a 12-class Food-101 subset. Built a calorie estimation method based on segmented food area and evaluated both models, where Mask R-CNN outperformed YOLOv8 with 69.22% mCA.",
    tech: ["Mask R-CNN", "YOLOv8", "Food-101", "Computer Vision", "Segmentation"],
    github: "https://github.com/abaadm1/calorie-estimation",
    domain: "computer-vision",
  },
  {
    title: "Explainability Analysis for Deep Neural Networks",
    description: "Analyzed and compared explainability methods for deep neural networks, including Network Dissection, Grad-CAM, AblationCAM, ScoreCAM, and LIME. Examined concept learning in ResNet models and evaluated explanation quality across methods using both visual analysis and an IoU-based comparison.",
    tech: ["Explainable AI", "ResNet", "Grad-CAM", "LIME", "Deep Learning"],
    github: "https://github.com/abaadm1/explainable-ai-comparitive-analysis",
    domain: "research",
  },
  {
    title: "Adversarial Training for Robust Image Classification",
    description: "Developed an adversarially robust ResNet-18 classifier to improve resistance against FGSM and PGD attacks on a 10-class image dataset. Trained the model on clean and adversarial examples using joint loss optimization, achieving 51.33% clean accuracy, 39.90% FGSM accuracy, and 38.07% PGD accuracy.",
    tech: ["Adversarial ML", "ResNet-18", "FGSM", "PGD", "Robustness"],
    github: "https://github.com/abaadm1/adversarial-training",
    domain: "security",
  },
  {
    title: "Personalizing Climate Change: A Study on Instagram Polling Ads",
    description: "Designed and analyzed an Instagram polling-ad study to compare localized climate messages tied to German landmarks with generic climate messaging. Used statistical and Bayesian analysis to evaluate poll responses across age, gender, and urban-rural groups and study differences in climate concern.",
    tech: ["Data Analysis", "Bayesian Statistics", "Social Media Analysis", "Climate Research"],
    github: "https://github.com/abaadm1/localized-climate-messaging-study",
    domain: "research",
  },
  {
    title: "Black-Box Model Stealing for Image Encoders",
    description: "Trained a surrogate image encoder to mimic a defended black-box model by querying 13K public images and learning from its 1024-dimensional embeddings. Improved representation matching under the B4B defense using a custom CNN, hybrid loss, and Optuna tuning, achieving a mean L2 distance of 4.706.",
    tech: ["Model Stealing", "Black-Box Attacks", "CNN", "Optuna", "Image Embeddings"],
    github: "https://github.com/abaadm1/surrogate-encoder-model-stealing",
    domain: "security",
  },
  {
    title: "Membership Inference Attack on Image Classifiers",
    description: "Developed a membership inference attack on a fixed ResNet-18 model using labeled public data to predict training-set membership. Used prediction and gradient-based features with a calibrated XGBoost model to score private samples, achieving 0.644 ROC-AUC.",
    tech: ["Privacy Attacks", "Membership Inference", "XGBoost", "ResNet-18", "ML Security"],
    github: "https://github.com/abaadm1/membership-inference-attack",
    domain: "security",
  },
  {
    title: "Fine-Tuning Chemical Language Models for Lipophilicity Prediction",
    description: "Fine-tuned IBM MoLFormer for lipophilicity prediction from SMILES on the MoleculeNet Lipophilicity dataset using Hugging Face. Evaluated full fine-tuning, LoRA, BitFit, and iA3, and explored different external data selection strategies to improve performance.",
    tech: ["MolFormer", "SMILES", "LoRA", "BitFit", "iA3", "Hugging Face", "Chemistry"],
    github: "https://github.com/abaadm1/molformer-lipophilicity",
    domain: "nlp",
  },
  {
    title: "Behavioral Monitoring using Vocal Sentiment Analysis (Bachelors Thesis)",
    description: "Developed an Urdu speech emotion recognition system using a team-created dataset of 1,000 recordings across anger and normal tone. Built the model and backend using MFCC features, a CNN classifier, and a Flask API for audio-based sentiment prediction.",
    tech: ["Speech Recognition", "MFCC", "CNN", "Flask", "Urdu NLP", "Audio Processing"],
    github: "https://github.com/abaadm1/Behavioral-Monitoring-using-Vocal-Sentiment-Analysis",
    domain: "nlp",
  },
  {
    title: "Rapid Account Opening through Facial Verification",
    description: "Engineered an automated selfie-to-ID verification pipeline for Bank Alfalah's digital onboarding app, matching customer selfie videos against NADRA identity records. Integrated MTCNN for face detection, FaceNet for embedding-based matching, and MiniFASNetV2 for liveness detection to reject spoofed submissions. Achieved 87.56% TAR at 0.1% FMR on final match decisions, bringing account opening time down from 2 days to under 24 hours.",
    tech: ["Face Recognition", "MTCNN", "FaceNet", "MiniFASNetV2", "Computer Vision", "Production Systems"],
    domain: "production",
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
    degree: "M.Sc. Data Science and Artificial Intelligence",
    school: "Saarland University (Universität des Saarlandes), Germany",
    duration: "2024 – 2026 (Expected)",
    status: "Currently enrolled",
    type: "master",
    courses: [
      "Artificial Intelligence",
      "Neural Networks (Theory and Implementation)",
      "Generative AI",
      "High-Level Computer Vision",
      "Machine Translation",
      "Trustworthy Machine Learning",
      "Attacks Against ML Models",
      "Data Networks",
      "Data Ethics"
    ]
  },
  {
    degree: "B.Eng. Computer Systems Engineering",
    school: "NED University of Engineering & Technology, Pakistan",
    duration: "2018 – 2022",
    status: "Completed",
    type: "bachelor",
    courses: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Structures & Algorithms",
      "Database Management Systems",
    ]
  }
];

export const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/EDLCU5A4377H"
  },
  {
    title: "Data Scientist with Python Track",
    issuer: "DataCamp",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/992a974f9bf713509b61b9097a8735c998936e20"
  },
  {
    title: "Python for Data Science and Machine Learning Bootcamp",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-18c50a56-9fb6-4308-88a5-c9d9f5dcc176/"
  }
];

export const summerSchools = [
  {
    title: "M2L Summer School",
    institution: "University of Milano-Bicocca, Italy",
    duration: "September 2024",
    description: "Participated in an intensive 5-day program with lectures, keynotes, and hands-on labs on NLP, computer vision, generative models, reinforcement learning, and trustworthy ML, taught by leading international experts.",
    topics: ["Natural Language Processing", "Computer Vision", "Generative Models", "Reinforcement Learning", "Trustworthy ML"]
  }
];

export const leadershipExperience = [
  {
    organization: "Rotaract Club of Karachi Sunrise (Rotary International)",
    role: "Literacy Chair",
    duration: "June 2022 - June 2024",
    location: "Karachi, Pakistan",
    description: "A dynamic community service organization dedicated to fostering leadership, professional development, and positive change within Karachi.",
    achievements: [
      "Led literacy and digital education initiatives, conducting workshops at Koohi Goth College of Nursing and Midwifery to upskill teachers in MS Office and Google Classroom, enabling a smoother shift to online learning and reducing paper usage.",
      "Organized large-scale health awareness campaigns, including converting polio refusals through community outreach and hosting sessions on thalassemia prevention.",
      "Coordinated fundraising efforts and mobilized volunteers for ration distribution drives, directly supporting flood-affected communities in rural Sindh."
    ]
  },
  {
    organization: "Amal Academy",
    role: "Career Prep Fellow",
    duration: "November 2021 - February 2022",
    description: "A transformative education platform focused on equipping students and professionals with essential skills for personal and career success.",
    achievements: [
      "Selected from 4,500+ applicants for a Stanford University–funded fellowship.",
      "Completed 150+ hours of training in leadership, communication, teamwork, and problem-solving to strengthen professional and personal impact."
    ]
  }
];