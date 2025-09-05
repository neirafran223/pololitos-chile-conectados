
import { useState } from "react";
import { MessageCircle, Search, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
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
    <div className="pb-20 h-screen relative">
      {/* Header */}
      <Card className="mx-4 mt-6 mb-6 border-0 bg-card/80 backdrop-blur-lg shadow-2xl">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mr-4">
              <MessageCircle className="text-primary-foreground" size={24} />
            </div>
            <h1 className="text-foreground text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mensajes
            </h1>
          </div>
          
          {/* Search */}
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors z-10" size={20} />
            <Input
              type="text"
              placeholder="Buscar conversaciones..."
              className="pl-10 h-12 bg-background/50 border-2 border-border/50 focus:border-primary/50 transition-all duration-200"
            />
          </div>
        </div>
      </Card>
      
      {/* Conversations */}
      <div className="px-4">
        {conversations.length > 0 ? (
          <div className="space-y-3">
            {conversations.map((conversation) => (
              <Card 
                key={conversation.id} 
                onClick={() => setSelectedChat(conversation)}
                className="p-4 border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:bg-card/90"
              >
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold">
                      {conversation.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                        {conversation.name}
                      </h3>
                      <span className="text-muted-foreground text-sm">{conversation.time}</span>
                    </div>
                    <p className="text-muted-foreground text-sm truncate leading-relaxed">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  
                  {conversation.unread > 0 && (
                    <Badge 
                      className="ml-3 bg-primary text-primary-foreground h-6 w-6 rounded-full p-0 flex items-center justify-center font-bold text-xs"
                    >
                      {conversation.unread}
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 border-0 bg-card/80 backdrop-blur-lg shadow-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-foreground text-lg font-semibold mb-2">No tienes mensajes</h3>
            <p className="text-muted-foreground">Cuando tengas conversaciones aparecerán aquí</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MessagesScreen;
