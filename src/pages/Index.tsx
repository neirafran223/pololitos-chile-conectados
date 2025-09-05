
import { useState } from "react";
import { AppProvider } from "../contexts/AppContext";
import Navbar from "../components/Navbar";
import HomeScreen from "../components/HomeScreen";
import MessagesScreen from "../components/MessagesScreen";
import ProfileScreen from "../components/ProfileScreen";
import SettingsScreen from "../components/SettingsScreen";
import AuthScreen from "../components/AuthScreen";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab("home");
  };

  if (!isLoggedIn) {
    return (
      <AppProvider>
        <AuthScreen onLogin={() => setIsLoggedIn(true)} />
      </AppProvider>
    );
  }

  const renderActiveScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />;
      case "messages":
        return <MessagesScreen />;
      case "profile":
        return <ProfileScreen />;
      case "settings":
        return <SettingsScreen onLogout={handleLogout} />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        {renderActiveScreen()}
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </AppProvider>
  );
};

export default Index;
