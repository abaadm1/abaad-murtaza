import { Bot } from "lucide-react";

export function ChatbotWidget() {
  const openChatbot = () => {
    window.open('https://abaad-chatbot.streamlit.app/', '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={openChatbot}
        className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      >
        <Bot className="w-5 h-5" />
        <span className="font-medium">Chat with Abaad's Assistant</span>
      </button>
    </div>
  );
}
