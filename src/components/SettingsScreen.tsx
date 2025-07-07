
import { Moon, Sun, Globe, LogOut, Shield, Bell, CreditCard } from "lucide-react";
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
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-6">
        <h1 className="text-white text-2xl font-bold">{t('settings')}</h1>
      </div>
      
      {/* Settings Options */}
      <div className="px-4 py-6 space-y-6">
        {/* Appearance */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">{t('appearance')}</h2>
          <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center">
              {theme === 'dark' ? <Moon className="text-blue-400 mr-3" size={20} /> : <Sun className="text-yellow-400 mr-3" size={20} />}
              <div>
                <h3 className="text-white font-medium">{t('darkTheme')}</h3>
                <p className="text-gray-400 text-sm">{t('darkThemeDesc')}</p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className={`w-12 h-6 rounded-full ${theme === 'dark' ? 'bg-blue-600' : 'bg-gray-600'} relative transition-colors`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
          </div>
        </div>
        
        {/* Language */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">{t('language')}</h2>
          <div className="space-y-2">
            <button 
              onClick={() => setLanguage('es')}
              className={`w-full p-4 rounded-xl flex items-center transition-colors ${
                language === 'es' 
                  ? 'bg-blue-600/20 border border-blue-500' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <Globe className="text-green-400 mr-3" size={20} />
              <div className="flex-1 text-left">
                <h3 className="text-white font-medium">Español (Chile)</h3>
                <p className="text-gray-400 text-sm">Idioma por defecto</p>
              </div>
              {language === 'es' && (
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
              )}
            </button>
            
            <button 
              onClick={() => setLanguage('en')}
              className={`w-full p-4 rounded-xl flex items-center transition-colors ${
                language === 'en' 
                  ? 'bg-blue-600/20 border border-blue-500' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <Globe className="text-green-400 mr-3" size={20} />
              <div className="flex-1 text-left">
                <h3 className="text-white font-medium">English</h3>
                <p className="text-gray-400 text-sm">International language</p>
              </div>
              {language === 'en' && (
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
              )}
            </button>
          </div>
        </div>
        
        {/* Account */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">{t('account')}</h2>
          <div className="space-y-3">
            <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-xl flex items-center transition-colors">
              <Shield className="text-purple-400 mr-3" size={20} />
              <div className="flex-1 text-left">
                <h3 className="text-white font-medium">{t('privacySecurity')}</h3>
                <p className="text-gray-400 text-sm">{t('privacyDesc')}</p>
              </div>
            </button>
            
            <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-xl flex items-center transition-colors">
              <Bell className="text-orange-400 mr-3" size={20} />
              <div className="flex-1 text-left">
                <h3 className="text-white font-medium">{t('notifications')}</h3>
                <p className="text-gray-400 text-sm">{t('notificationsDesc')}</p>
              </div>
            </button>
            
            <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-xl flex items-center transition-colors">
              <CreditCard className="text-green-400 mr-3" size={20} />
              <div className="flex-1 text-left">
                <h3 className="text-white font-medium">{t('paymentMethods')}</h3>
                <p className="text-gray-400 text-sm">{t('paymentDesc')}</p>
              </div>
            </button>
          </div>
        </div>
        
        {/* Logout */}
        <div className="pt-4">
          <button 
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 p-4 rounded-xl flex items-center justify-center transition-colors"
          >
            <LogOut className="text-white mr-3" size={20} />
            <span className="text-white font-medium">{t('logout')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
