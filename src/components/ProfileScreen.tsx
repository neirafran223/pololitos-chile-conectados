
import { Edit, Star, Award, Calendar } from "lucide-react";

const ProfileScreen = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-6">
        <div className="flex items-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
            JD
          </div>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Juan Díaz</h1>
            <p className="text-gray-300">juan.diaz@email.com</p>
            <p className="text-gray-400 text-sm">+56 9 8765 4321</p>
          </div>
          <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors">
            <Edit size={18} className="text-white" />
          </button>
        </div>
      </div>
      
      {/* Stats */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <Star className="text-yellow-400 mx-auto mb-2" size={24} />
            <p className="text-white font-bold text-lg">4.8</p>
            <p className="text-gray-400 text-sm">Calificación</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <Award className="text-green-400 mx-auto mb-2" size={24} />
            <p className="text-white font-bold text-lg">23</p>
            <p className="text-gray-400 text-sm">Completados</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <Calendar className="text-blue-400 mx-auto mb-2" size={24} />
            <p className="text-white font-bold text-lg">2</p>
            <p className="text-gray-400 text-sm">Meses</p>
          </div>
        </div>
        
        {/* Menu Options */}
        <div className="space-y-3">
          <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-xl text-left transition-colors">
            <h3 className="text-white font-medium mb-1">Mis Trabajos Publicados</h3>
            <p className="text-gray-400 text-sm">Ver y gestionar tus publicaciones</p>
          </button>
          
          <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-xl text-left transition-colors">
            <h3 className="text-white font-medium mb-1">Trabajos Aplicados</h3>
            <p className="text-gray-400 text-sm">Seguimiento de tus postulaciones</p>
          </button>
          
          <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-xl text-left transition-colors">
            <h3 className="text-white font-medium mb-1">Calificaciones</h3>
            <p className="text-gray-400 text-sm">Ver comentarios y puntuaciones</p>
          </button>
          
          <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-xl text-left transition-colors">
            <h3 className="text-white font-medium mb-1">Historial de Pagos</h3>
            <p className="text-gray-400 text-sm">Revisar transacciones</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
