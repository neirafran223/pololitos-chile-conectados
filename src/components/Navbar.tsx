
import { Home, MessageCircle, User, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { useApp } from "../contexts/AppContext";

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  const { t } = useApp();
  
  const navItems = [
    { id: "home", label: t("home"), icon: Home },
    { id: "messages", label: t("messages"), icon: MessageCircle },
    { id: "profile", label: t("profile"), icon: User },
    { id: "settings", label: t("settings"), icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-xl border-t border-border/50 px-4 py-3 z-50 shadow-2xl">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center h-auto py-2 px-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? "text-primary bg-primary/10 shadow-lg transform scale-105" 
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <Icon size={22} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
