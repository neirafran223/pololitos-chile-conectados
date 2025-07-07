
import { MapPin, Clock, DollarSign } from "lucide-react";

interface JobCardProps {
  title: string;
  description: string;
  location: string;
  price: string;
  time: string;
  category: string;
}

const JobCard = ({ title, description, location, price, time, category }: JobCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-4 border border-gray-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <span className="bg-blue-600 text-blue-100 px-2 py-1 rounded-full text-xs">
          {category}
        </span>
      </div>
      
      <p className="text-gray-300 mb-3 text-sm">{description}</p>
      
      <div className="flex flex-wrap gap-3 text-sm">
        <div className="flex items-center text-gray-400">
          <MapPin size={14} className="mr-1" />
          {location}
        </div>
        <div className="flex items-center text-green-400">
          <DollarSign size={14} className="mr-1" />
          {price}
        </div>
        <div className="flex items-center text-gray-400">
          <Clock size={14} className="mr-1" />
          {time}
        </div>
      </div>
      
      <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all">
        Ver Detalles
      </button>
    </div>
  );
};

export default JobCard;
