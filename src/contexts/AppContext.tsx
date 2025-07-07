
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  theme: 'dark' | 'light';
  language: 'es' | 'en';
  toggleTheme: () => void;
  setLanguage: (lang: 'es' | 'en') => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    home: "Inicio",
    messages: "Mensajes",
    profile: "Perfil",
    settings: "Ajustes",
    
    // Home Screen
    welcome: "¡Hola! Encuentra tu próximo pololito",
    searchJobs: "Buscar trabajos...",
    publishJob: "Publicar Trabajo",
    availableJobs: "Trabajos Disponibles",
    viewDetails: "Ver Detalles",
    
    // Settings
    appearance: "Apariencia",
    darkTheme: "Tema Oscuro",
    darkThemeDesc: "Cambiar entre modo claro y oscuro",
    language: "Idioma",
    languageDesc: "Cambiar idioma de la aplicación",
    account: "Cuenta",
    privacySecurity: "Privacidad y Seguridad",
    privacyDesc: "Gestionar tu privacidad",
    notifications: "Notificaciones",
    notificationsDesc: "Configurar alertas",
    paymentMethods: "Métodos de Pago",
    paymentDesc: "Gestionar formas de pago",
    logout: "Cerrar Sesión",
    
    // Messages
    searchConversations: "Buscar conversaciones...",
    noMessages: "No tienes mensajes",
    noMessagesDesc: "Cuando tengas conversaciones aparecerán aquí",
    
    // Job Form
    publishJobTitle: "Publicar Trabajo",
    jobTitle: "Título del trabajo",
    jobTitlePlaceholder: "Ej: Pasear perro golden retriever",
    description: "Descripción",
    descriptionPlaceholder: "Describe brevemente el trabajo...",
    location: "Ubicación (Comuna/Ciudad)",
    locationPlaceholder: "Ej: Las Condes, Santiago",
    price: "Precio ofrecido",
    pricePlaceholder: "Ej: $25.000",
    datetime: "Fecha/Hora (opcional)",
    category: "Categoría",
    cancel: "Cancelar",
    publish: "Publicar",
    contact: "Contactar",
    
    // Categories
    pets: "Mascotas",
    garden: "Jardín",
    homeCategory: "Hogar",
    moving: "Mudanza",
    transport: "Transporte",
    technology: "Tecnología",
    education: "Educación",
    events: "Eventos",
    general: "General"
  },
  en: {
    // Navigation
    home: "Home",
    messages: "Messages",
    profile: "Profile",
    settings: "Settings",
    
    // Home Screen
    welcome: "Hello! Find your next little job",
    searchJobs: "Search jobs...",
    publishJob: "Publish Job",
    availableJobs: "Available Jobs",
    viewDetails: "View Details",
    
    // Settings
    appearance: "Appearance",
    darkTheme: "Dark Theme",
    darkThemeDesc: "Switch between light and dark mode",
    language: "Language",
    languageDesc: "Change app language",
    account: "Account",
    privacySecurity: "Privacy & Security",
    privacyDesc: "Manage your privacy",
    notifications: "Notifications",
    notificationsDesc: "Configure alerts",
    paymentMethods: "Payment Methods",
    paymentDesc: "Manage payment options",
    logout: "Sign Out",
    
    // Messages
    searchConversations: "Search conversations...",
    noMessages: "No messages",
    noMessagesDesc: "When you have conversations they will appear here",
    
    // Job Form
    publishJobTitle: "Publish Job",
    jobTitle: "Job title",
    jobTitlePlaceholder: "Ex: Walk golden retriever",
    description: "Description",
    descriptionPlaceholder: "Briefly describe the job...",
    location: "Location (City/Area)",
    locationPlaceholder: "Ex: Las Condes, Santiago",
    price: "Offered price",
    pricePlaceholder: "Ex: $25.000",
    datetime: "Date/Time (optional)",
    category: "Category",
    cancel: "Cancel",
    publish: "Publish",
    contact: "Contact",
    
    // Categories
    pets: "Pets",
    garden: "Garden",
    homeCategory: "Home",
    moving: "Moving",
    transport: "Transport",
    technology: "Technology",
    education: "Education",
    events: "Events",
    general: "General"
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [language, setLanguageState] = useState<'es' | 'en'>('es');

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    const savedLanguage = localStorage.getItem('language') as 'es' | 'en';
    
    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguageState(savedLanguage);
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const setLanguage = (lang: 'es' | 'en') => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <AppContext.Provider value={{
      theme,
      language,
      toggleTheme,
      setLanguage,
      t
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
