
import { Home, MessageCircle, User, Settings } from "lucide-react";
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
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
                isActive 
                  ? "text-blue-400 bg-gray-800" 
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
