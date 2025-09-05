
import { 
  Moon, 
  Sun, 
  Globe, 
  LogOut, 
  Shield, 
  Bell, 
  CreditCard, 
  Settings as SettingsIcon 
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import { useApp } from "../contexts/AppContext";

interface SettingsScreenProps {
  onLogout?: () => void;
}

const SettingsScreen = ({ onLogout }: SettingsScreenProps) => {
  const { theme, language, toggleTheme, setLanguage, t } = useApp();

  const handleLogout = () => {
    // Clear user session data
    localStorage.removeItem('userToken');
    localStorage.removeItem('userSession');
    
    // Call parent logout function if provided
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="pb-20 relative">
      {/* Header */}
      <Card className="mx-4 mt-6 mb-6 border-0 bg-card/80 backdrop-blur-lg shadow-2xl">
        <div className="p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mr-4">
              <SettingsIcon className="text-primary-foreground" size={24} />
            </div>
            <h1 className="text-foreground text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('settings')}
            </h1>
          </div>
        </div>
      </Card>
      
      {/* Settings Sections */}
      <div className="px-4 space-y-6">
        {/* Appearance */}
        <div className="space-y-3">
          <h2 className="text-foreground text-lg font-semibold flex items-center mb-4">
            <div className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full mr-3" />
            {t('appearance')}
          </h2>
          
          <Card className="p-0 border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mr-3">
                  {theme === 'dark' ? 
                    <Moon size={20} className="text-blue-500" /> : 
                    <Sun size={20} className="text-yellow-500" />
                  }
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">{t('darkTheme')}</h3>
                  <p className="text-muted-foreground text-sm">{t('darkThemeDesc')}</p>
                </div>
              </div>
              <Switch 
                checked={theme === 'dark'} 
                onCheckedChange={toggleTheme}
              />
            </div>
          </Card>
        </div>
        
        {/* Language */}
        <div className="space-y-3">
          <h2 className="text-foreground text-lg font-semibold flex items-center mb-4">
            <div className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full mr-3" />
            {t('language')}
          </h2>
          
          <div className="space-y-3">
            <Card className={`p-0 border-0 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer ${
              language === 'es' 
                ? 'bg-primary/10 ring-2 ring-primary/30' 
                : 'bg-card/80 hover:bg-card/90'
            }`}>
              <div 
                onClick={() => setLanguage('es')}
                className="p-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mr-3">
                    <Globe size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold">Español (Chile)</h3>
                    <p className="text-muted-foreground text-sm">Idioma por defecto</p>
                  </div>
                </div>
                {language === 'es' && (
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                )}
              </div>
            </Card>
            
            <Card className={`p-0 border-0 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer ${
              language === 'en' 
                ? 'bg-primary/10 ring-2 ring-primary/30' 
                : 'bg-card/80 hover:bg-card/90'
            }`}>
              <div 
                onClick={() => setLanguage('en')}
                className="p-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mr-3">
                    <Globe size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold">English</h3>
                    <p className="text-muted-foreground text-sm">International language</p>
                  </div>
                </div>
                {language === 'en' && (
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
        
        {/* Account */}
        <div className="space-y-3">
          <h2 className="text-foreground text-lg font-semibold flex items-center mb-4">
            <div className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full mr-3" />
            {t('account')}
          </h2>
          
          <Card className="p-0 border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group cursor-pointer">
            <div className="p-4 flex items-center">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mr-3">
                <Shield size={20} className="text-purple-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                  {t('privacySecurity')}
                </h3>
                <p className="text-muted-foreground text-sm">{t('privacyDesc')}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-0 border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group cursor-pointer">
            <div className="p-4 flex items-center">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mr-3">
                <Bell size={20} className="text-orange-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                  {t('notifications')}
                </h3>
                <p className="text-muted-foreground text-sm">{t('notificationsDesc')}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-0 border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group cursor-pointer">
            <div className="p-4 flex items-center">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mr-3">
                <CreditCard size={20} className="text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                  {t('paymentMethods')}
                </h3>
                <p className="text-muted-foreground text-sm">{t('paymentDesc')}</p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Logout */}
        <Card className="border-0 bg-card/80 backdrop-blur-lg shadow-xl">
          <div className="p-4">
            <Button 
              onClick={handleLogout} 
              variant="outline"
              className="w-full h-12 border-2 border-red-500/20 text-red-500 hover:bg-red-500/10 hover:border-red-500/40 transition-all duration-200 font-semibold"
              size="lg"
            >
              <LogOut size={20} className="mr-2" />
              {t('logout')}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SettingsScreen;
