# Abaad's AI Assistant Chatbot

A Streamlit-based AI chatbot that provides information about Abaad Murtaza - Data Scientist & AI/ML Engineer.

## Features

- 🤖 Interactive chat interface
- 📝 Predefined responses about Abaad's background, skills, and projects
- 🎨 Clean, modern UI with custom styling
- 📱 Responsive design
- 🔗 Quick links to portfolio and social profiles

## Setup Instructions

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Installation

1. Navigate to the chatbot directory:
```bash
cd chatbot
```

2. Install the required dependencies:
```bash
pip install -r requirements.txt
```

3. Run the Streamlit app:
```bash
streamlit run app.py
```

4. Open your browser and navigate to the provided URL (usually `http://localhost:8501`)

## Usage

The chatbot can answer questions about:
- Abaad's background and experience
- Technical skills and expertise
- Projects and portfolio
- Education and research work
- How to contact him

## Deployment

To deploy this chatbot:

### Using Streamlit Cloud
1. Push the code to a GitHub repository
2. Connect the repository to Streamlit Cloud
3. Deploy with automatic CI/CD

### Using Other Platforms
- Heroku, AWS, Google Cloud, or any platform that supports Python web applications
- Ensure the platform supports Streamlit or can run Python web apps

## Customization

To customize the chatbot responses:
1. Edit the `get_bot_response()` function in `app.py`
2. Add new response patterns and answers
3. Modify the predefined responses as needed

## Technologies Used

- **Streamlit**: Web application framework
- **Python**: Backend language
- **HTML/CSS**: Custom styling
- **Lucide Icons**: UI icons (via Streamlit)

## File Structure

```
chatbot/
├── app.py              # Main Streamlit application
├── requirements.txt    # Python dependencies
└── README.md          # This file
```

## Current Deployment

The chatbot is currently deployed at: https://abaad-chatbot.streamlit.app/

## Support

For any issues or questions about the chatbot, please contact Abaad Murtaza directly.
