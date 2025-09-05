
import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface JobCardProps {
  title: string;
  description: string;
  location: string;
  price: string;
  time: string;
  category: string;
  onClick?: () => void;
}

const JobCard = ({ title, description, location, price, time, category, onClick }: JobCardProps) => {
  return (
    <Card 
      onClick={onClick}
      className="p-6 border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:bg-card/90"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">{title}</h3>
        <div className="flex items-center gap-2">
          <Badge 
            variant="secondary" 
            className="bg-primary/10 text-primary border-primary/20 font-medium"
          >
            {category}
          </Badge>
          <ArrowRight 
            size={16} 
            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
          />
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center text-muted-foreground hover:text-primary transition-colors">
          <MapPin size={16} className="mr-2" />
          <span className="font-medium">{location}</span>
        </div>
        <div className="flex items-center text-green-600 dark:text-green-400 font-semibold">
          <DollarSign size={16} className="mr-2" />
          <span>{price}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Clock size={16} className="mr-2" />
          <span>{time}</span>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
