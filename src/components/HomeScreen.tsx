
import { useState } from "react";
import { Search, Plus, Filter, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import JobCard from "./JobCard";
import PublishJobForm from "./PublishJobForm";
import JobDetailsModal from "./JobDetailsModal";

const HomeScreen = () => {
  const [showPublishForm, setShowPublishForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Pasear perro",
      description: "Necesito alguien para pasear a mi golden retriever por las mañanas, es muy tranquilo y obediente.",
      location: "Las Condes",
      price: "$15.000",
      time: "Mañanas",
      category: "Mascotas"
    },
    {
      id: 2,
      title: "Cortar el pasto",
      description: "Busco persona para cortar el pasto de mi jardín pequeño. Herramientas incluidas.",
      location: "Providencia",
      price: "$25.000",
      time: "Fin de semana",
      category: "Jardín"
    },
    {
      id: 3,
      title: "Limpieza hogar",
      description: "Limpieza general de departamento de 2 dormitorios. Productos de limpieza incluidos.",
      location: "Ñuñoa",
      price: "$30.000",
      time: "Flexible",
      category: "Hogar"
    },
    {
      id: 4,
      title: "Ayuda con mudanza",
      description: "Necesito ayuda para mover algunos muebles y cajas a nuevo departamento.",
      location: "Santiago Centro",
      price: "$40.000",
      time: "Sábado",
      category: "Mudanza"
    }
  ]);

  const handlePublishJob = (newJob: any) => {
    setJobs(prev => [newJob, ...prev]);
  };

  const handleJobClick = (job: any) => {
    setSelectedJob(job);
  };

  const handleContact = () => {
    setSelectedJob(null);
    // Aquí se abriría el chat
    console.log("Abriendo chat...");
  };

  return (
    <div className="pb-20 relative">
      {/* Header */}
      <Card className="mx-4 mt-6 mb-6 border-0 bg-card/80 backdrop-blur-lg shadow-2xl">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mr-4">
              <Sparkles className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="text-foreground text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ¡Hola! Encuentra tu próximo pololito
              </h1>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative mb-6 group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors z-10" size={20} />
            <Input
              type="text"
              placeholder="Buscar trabajos..."
              className="pl-10 h-12 bg-background/50 border-2 border-border/50 focus:border-primary/50 transition-all duration-200"
            />
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button 
              onClick={() => setShowPublishForm(true)}
              className="flex-1 h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              size="lg"
            >
              <Plus size={18} className="mr-2" />
              Publicar Trabajo
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="h-12 w-12 border-2 hover:bg-accent/10 transition-all duration-200"
            >
              <Filter size={18} />
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Jobs List */}
      <div className="px-4">
        <h2 className="text-foreground text-xl font-semibold mb-4 flex items-center">
          <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full mr-3" />
          Trabajos Disponibles
        </h2>
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard 
              key={job.id} 
              {...job} 
              onClick={() => handleJobClick(job)}
            />
          ))}
        </div>
      </div>

      {/* Modals */}
      {showPublishForm && (
        <PublishJobForm
          onClose={() => setShowPublishForm(false)}
          onSubmit={handlePublishJob}
        />
      )}

      {selectedJob && (
        <JobDetailsModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onContact={handleContact}
        />
      )}
    </div>
  );
};

export default HomeScreen;
