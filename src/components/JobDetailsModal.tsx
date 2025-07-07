
import { X, MapPin, Clock, DollarSign, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface JobDetailsModalProps {
  job: {
    title: string;
    description: string;
    location: string;
    price: string;
    time: string;
    category: string;
  };
  onClose: () => void;
  onContact: () => void;
}

const JobDetailsModal = ({ job, onClose, onContact }: JobDetailsModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white text-lg">{job.title}</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4 text-gray-400" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm inline-block">
            {job.category}
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            {job.description}
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center text-gray-300">
              <MapPin size={16} className="mr-2 text-gray-400" />
              <span className="text-sm">{job.location}</span>
            </div>
            
            <div className="flex items-center text-green-400">
              <DollarSign size={16} className="mr-2" />
              <span className="text-sm font-medium">{job.price}</span>
            </div>
            
            <div className="flex items-center text-gray-300">
              <Clock size={16} className="mr-2 text-gray-400" />
              <span className="text-sm">{job.time}</span>
            </div>
          </div>
          
          <div className="pt-4">
            <Button
              onClick={onContact}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              <MessageCircle size={18} className="mr-2" />
              Contactar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetailsModal;
