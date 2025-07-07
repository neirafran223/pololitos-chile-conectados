
import { useState } from "react";
import { MessageCircle, Search } from "lucide-react";
import ChatView from "./ChatView";

const MessagesScreen = () => {
  const [selectedChat, setSelectedChat] = useState<any>(null);
  
  const conversations = [
    {
      id: 1,
      name: "María González",
      lastMessage: "¿A qué hora podríamos coordinar para el trabajo?",
      time: "10:30",
      unread: 2,
      avatar: "MG"
    },
    {
      id: 2,
      name: "Carlos Pérez",
      lastMessage: "Perfecto, nos vemos mañana entonces",
      time: "Ayer",
      unread: 0,
      avatar: "CP"
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      lastMessage: "Gracias por el excelente trabajo",
      time: "Lun",
      unread: 0,
      avatar: "AR"
    }
  ];

  if (selectedChat) {
    return (
      <ChatView
        contact={selectedChat}
        onBack={() => setSelectedChat(null)}
      />
    );
  }

  return (
    <div className="pb-20 h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-6">
        <h1 className="text-white text-2xl font-bold mb-4">Mensajes</h1>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar conversaciones..."
            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      {/* Conversations */}
      <div className="px-4 py-4">
        {conversations.length > 0 ? (
          conversations.map((conversation) => (
            <div 
              key={conversation.id} 
              onClick={() => setSelectedChat(conversation)}
              className="flex items-center p-4 bg-gray-800 rounded-xl mb-3 hover:bg-gray-750 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                {conversation.avatar}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-white font-medium">{conversation.name}</h3>
                  <span className="text-gray-400 text-sm">{conversation.time}</span>
                </div>
                <p className="text-gray-300 text-sm truncate">{conversation.lastMessage}</p>
              </div>
              
              {conversation.unread > 0 && (
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center ml-2">
                  <span className="text-white text-xs">{conversation.unread}</span>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <MessageCircle size={48} className="text-gray-600 mx-auto mb-4" />
            <h3 className="text-gray-400 text-lg mb-2">No tienes mensajes</h3>
            <p className="text-gray-500">Cuando tengas conversaciones aparecerán aquí</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesScreen;
