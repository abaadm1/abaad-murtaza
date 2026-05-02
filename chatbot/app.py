import streamlit as st
import requests
import json
from typing import Dict, Any

# Page configuration
st.set_page_config(
    page_title="Abaad's AI Assistant",
    page_icon="🤖",
    layout="centered",
    initial_sidebar_state="collapsed"
)

# Custom CSS for better styling
st.markdown("""
<style>
    .main-header {
        text-align: center;
        padding: 2rem 0;
        color: #1a1a1a;
    }
    .chat-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
    }
    .user-message {
        background-color: #e3f2fd;
        padding: 1rem;
        border-radius: 10px;
        margin: 1rem 0;
        border-left: 4px solid #2196f3;
    }
    .bot-message {
        background-color: #f5f5f5;
        padding: 1rem;
        border-radius: 10px;
        margin: 1rem 0;
        border-left: 4px solid #4caf50;
    }
    .stTextInput > div > div > input {
        border-radius: 20px;
        padding: 12px 20px;
    }
    .stButton > button {
        border-radius: 20px;
        padding: 12px 30px;
        background-color: #2196f3;
        color: white;
        border: none;
        font-weight: bold;
    }
    .stButton > button:hover {
        background-color: #1976d2;
    }
</style>
""", unsafe_allow_html=True)

# Initialize session state
if 'messages' not in st.session_state:
    st.session_state.messages = []

# Header
st.markdown("""
<div class="main-header">
    <h1>🤖 Abaad's AI Assistant</h1>
    <p>Hi! I'm Abaad Murtaza's AI assistant. I'm here to help you learn more about his work, skills, and projects.</p>
    <p>Feel free to ask me anything about his experience in Data Science, AI/ML, or any other questions!</p>
</div>
""", unsafe_allow_html=True)

# Function to get chatbot response
def get_bot_response(message: str) -> str:
    """Generate a response based on the user's message."""
    message_lower = message.lower()
    
    # Predefined responses about Abaad
    if any(word in message_lower for word in ['hello', 'hi', 'hey', 'greetings']):
        return "Hello! I'm Abaad's AI assistant. How can I help you learn more about Abaad today?"
    
    elif any(word in message_lower for word in ['who', 'about', 'introduce']):
        return """Abaad Murtaza is a Data Scientist & AI/ML Engineer based in Germany. 
        He works as an AI Research Assistant at DFKI and is pursuing his M.Sc. in Data Science & AI at Saarland University.
        His expertise includes LLMs, RAG (Retrieval-Augmented Generation), computer vision, and backend engineering."""
    
    elif any(word in message_lower for word in ['experience', 'work', 'job', 'career']):
        return """Abaad works as an AI Research Assistant at DFKI (German Research Center for Artificial Intelligence).
        He has extensive experience in building LLM systems, RAG applications, computer vision projects, and backend development.
        His academic background includes M.Sc. in Data Science & AI from Saarland University."""
    
    elif any(word in message_lower for word in ['skills', 'technologies', 'tech stack']):
        return """Abaad's technical skills include:
        • Programming: Python, JavaScript, TypeScript
        • AI/ML: LLMs, RAG, Computer Vision, NLP
        • Frameworks: TensorFlow, PyTorch, Streamlit, React
        • Backend: FastAPI, Node.js, Docker
        • Databases: SQL, NoSQL, Vector Databases
        • Cloud: AWS, Google Cloud, Azure"""
    
    elif any(word in message_lower for word in ['projects', 'portfolio']):
        return """Abaad has worked on various exciting projects including:
        • Personal AI Chatbot (this application!)
        • Climate Messaging Study with localized analysis
        • Calorie Estimation using computer vision
        • Explainable AI comparative analysis
        • Adversarial training for ML models
        • Various data analysis and visualization projects
        
        You can check out his portfolio for more detailed project information."""
    
    elif any(word in message_lower for word in ['education', 'university', 'degree']):
        return """Abaad is currently pursuing his M.Sc. in Data Science & AI at Saarland University.
        He has a strong academic background with focus on artificial intelligence, machine learning, and data science."""
    
    elif any(word in message_lower for word in ['contact', 'email', 'reach']):
        return """You can contact Abaad through:
        • Email: Check his portfolio for contact information
        • LinkedIn: Available in his portfolio sidebar
        • GitHub: Check out his open-source projects
        • Portfolio: All his projects and contact info are available there"""
    
    elif any(word in message_lower for word in ['dfki', 'research']):
        return """At DFKI (German Research Center for Artificial Intelligence), Abaad works as an AI Research Assistant.
        He contributes to cutting-edge research in artificial intelligence, working on advanced ML projects and collaborating with other researchers."""
    
    elif any(word in message_lower for word in ['llm', 'large language model']):
        return """Abaad has significant experience with Large Language Models including:
        • Building custom LLM applications
        • RAG (Retrieval-Augmented Generation) systems
        • Fine-tuning models for specific tasks
        • Integration with various LLM APIs
        • Optimizing LLM performance and cost"""
    
    elif any(word in message_lower for word in ['bye', 'goodbye', 'exit']):
        return "Thank you for chatting! Feel free to reach out if you have more questions about Abaad. Have a great day!"
    
    else:
        return """I'm here to help you learn about Abaad Murtaza! You can ask me about:
        • His background and experience
        • Technical skills and expertise
        • Projects and portfolio
        • Education and research work
        • How to contact him
        
        What would you like to know?"""

# Display chat messages
for message in st.session_state.messages:
    if message["role"] == "user":
        st.markdown(f"""
        <div class="user-message">
            <strong>You:</strong> {message["content"]}
        </div>
        """, unsafe_allow_html=True)
    else:
        st.markdown(f"""
        <div class="bot-message">
            <strong>🤖 Assistant:</strong> {message["content"]}
        </div>
        """, unsafe_allow_html=True)

# Chat input
user_input = st.chat_input("Type your message here...")

if user_input:
    # Add user message to session state
    st.session_state.messages.append({"role": "user", "content": user_input})
    
    # Get bot response
    bot_response = get_bot_response(user_input)
    
    # Add bot response to session state
    st.session_state.messages.append({"role": "assistant", "content": bot_response})
    
    # Rerun to display the new messages
    st.rerun()

# Sidebar with additional info
with st.sidebar:
    st.markdown("---")
    st.markdown("### 📊 Quick Info")
    st.info("""
    **Current Role:** AI Research Assistant at DFKI
    
    **Education:** M.Sc. Data Science & AI at Saarland University
    
    **Location:** Germany
    
    **Expertise:** LLMs, RAG, Computer Vision, Backend Engineering
    """)
    
    st.markdown("### 🔗 Useful Links")
    st.markdown("""
    • [Abaad's Portfolio](https://abaad-murtaza.streamlit.app/)
    • [GitHub Profile](https://github.com/abaadm1)
    • [LinkedIn Profile](https://linkedin.com/in/abaad-murtaza)
    """)

# Footer
st.markdown("---")
st.markdown("""
<div style='text-align: center; color: #666; padding: 1rem;'>
    <p>🤖 This AI assistant is powered by predefined responses about Abaad Murtaza</p>
    <p>For real-time conversations, please contact Abaad directly</p>
</div>
""", unsafe_allow_html=True)
