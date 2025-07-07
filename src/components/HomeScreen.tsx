
import { Search, Plus, Filter } from "lucide-react";
import JobCard from "./JobCard";

const HomeScreen = () => {
  const jobs = [
    {
      title: "Pasear perro",
      description: "Necesito alguien para pasear a mi golden retriever por las mañanas, es muy tranquilo y obediente.",
      location: "Las Condes",
      price: "$15.000",
      time: "Mañanas",
      category: "Mascotas"
    },
    {
      title: "Cortar el pasto",
      description: "Busco persona para cortar el pasto de mi jardín pequeño. Herramientas incluidas.",
      location: "Providencia",
      price: "$25.000",
      time: "Fin de semana",
      category: "Jardín"
    },
    {
      title: "Limpieza hogar",
      description: "Limpieza general de departamento de 2 dormitorios. Productos de limpieza incluidos.",
      location: "Ñuñoa",
      price: "$30.000",
      time: "Flexible",
      category: "Hogar"
    },
    {
      title: "Ayuda con mudanza",
      description: "Necesito ayuda para mover algunos muebles y cajas a nuevo departamento.",
      location: "Santiago Centro",
      price: "$40.000",
      time: "Sábado",
      category: "Mudanza"
    }
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-6">
        <h1 className="text-white text-2xl font-bold mb-4">¡Hola! Encuentra tu próximo pololito</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar trabajos..."
            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
            <Plus size={18} className="mr-2" />
            Publicar Trabajo
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors">
            <Filter size={18} />
          </button>
        </div>
      </div>
      
      {/* Jobs List */}
      <div className="px-4 py-6">
        <h2 className="text-white text-xl font-semibold mb-4">Trabajos Disponibles</h2>
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
