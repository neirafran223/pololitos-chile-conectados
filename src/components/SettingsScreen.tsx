
import { Moon, Sun, Globe, LogOut, Shield, Bell, CreditCard } from "lucide-react";
import { useState } from "react";

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-6">
        <h1 className="text-white text-2xl font-bold">Ajustes</h1>
      </div>
      
      {/* Settings Options */}
      <div className="px-4 py-6 space-y-6">
        {/* Appearance */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Apariencia</h2>
          <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center">
              {darkMode ? <Moon className="text-blue-400 mr-3" size={20} /> : <Sun className="text-yellow-400 mr-3" size={20} />}
              <div>
                <h3 className="text-white font-medium">Tema Oscuro</h3>
                <p className="text-gray-400 text-sm">Cambiar entre modo claro y oscuro</p>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-gray-600'} relative transition-colors`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
          </div>
        </div>
        
        {/* Language */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Idioma</h2>
          <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-xl flex items-center transition-colors">
            <Globe className="text-green-400 mr-3" size={20} />
            <div className="flex-1 text-left">
              <h3 className="text-white font-medium">Español (Chile)</h3>
              <p className="text-gray-400 text-sm">Cambiar idioma de la aplicación</p>
            </div>
          </button>
        </div>
        
        {/* Account */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Cuenta</h2>
          <div className="space-y-3">
            <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-xl flex items-center transition-colors">
              <Shield className="text-purple-400 mr-3" size={20} />
              <div className="flex-1 text-left">
                <h3 className="text-white font-medium">Privacidad y Seguridad</h3>
                <p className="text-gray-400 text-sm">Gestionar tu privacidad</p>
              </div>
            </button>
            
            <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-xl flex items-center transition-colors">
              <Bell className="text-orange-400 mr-3" size={20} />
              <div className="flex-1 text-left">
                <h3 className="text-white font-medium">Notificaciones</h3>
                <p className="text-gray-400 text-sm">Configurar alertas</p>
              </div>
            </button>
            
            <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-xl flex items-center transition-colors">
              <CreditCard className="text-green-400 mr-3" size={20} />
              <div className="flex-1 text-left">
                <h3 className="text-white font-medium">Métodos de Pago</h3>
                <p className="text-gray-400 text-sm">Gestionar formas de pago</p>
              </div>
            </button>
          </div>
        </div>
        
        {/* Logout */}
        <div className="pt-4">
          <button className="w-full bg-red-600 hover:bg-red-700 p-4 rounded-xl flex items-center justify-center transition-colors">
            <LogOut className="text-white mr-3" size={20} />
            <span className="text-white font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
