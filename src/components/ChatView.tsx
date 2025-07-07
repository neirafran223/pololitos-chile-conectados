
import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'other';
  timestamp: string;
}

interface ChatViewProps {
  contact: {
    name: string;
    avatar: string;
  };
  onBack: () => void;
}

const ChatView = ({ contact, onBack }: ChatViewProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hola! Me interesa el trabajo que publicaste",
      sender: 'other',
      timestamp: '10:30'
    },
    {
      id: 2,
      text: "¡Hola! Perfecto, ¿tienes experiencia con perros?",
      sender: 'me',
      timestamp: '10:32'
    },
    {
      id: 3,
      text: "Sí, he cuidado perros antes. ¿A qué hora sería?",
      sender: 'other',
      timestamp: '10:35'
    }
  ]);
  
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now(),
        text: newMessage,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString('es-CL', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      setMessages(prev => [...prev, message]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gray-800 px-4 py-4 flex items-center border-b border-gray-700">
        <Button variant="ghost" size="icon" onClick={onBack} className="mr-3">
          <ArrowLeft className="h-5 w-5 text-white" />
        </Button>
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
          {contact.avatar}
        </div>
        <h1 className="text-white font-medium">{contact.name}</h1>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.sender === 'me'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-100'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'me' ? 'text-blue-100' : 'text-gray-400'
              }`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-gray-800 p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1 bg-gray-700 border-gray-600 text-white"
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button
            onClick={sendMessage}
            size="icon"
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
