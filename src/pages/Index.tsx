
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
      <div className="min-h-screen bg-gray-900">
        {renderActiveScreen()}
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </AppProvider>
  );
};

export default Index;
