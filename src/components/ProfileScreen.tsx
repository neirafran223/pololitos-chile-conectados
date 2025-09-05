
import { Edit, Star, Award, Calendar, User, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

const ProfileScreen = () => {
  return (
    <div className="pb-20 relative">
      {/* Header */}
      <Card className="mx-4 mt-6 mb-6 border-0 bg-card/80 backdrop-blur-lg shadow-2xl">
        <div className="p-6">
          <div className="flex items-center">
            <Avatar className="w-20 h-20 mr-4">
              <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-foreground text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                Juan Díaz
              </h1>
              <p className="text-muted-foreground font-medium">juan.diaz@email.com</p>
              <p className="text-muted-foreground text-sm">+56 9 8765 4321</p>
            </div>
            <Button 
              variant="outline" 
              size="icon"
              className="h-10 w-10 border-2 hover:bg-primary/10 hover:border-primary transition-all duration-200"
            >
              <Edit size={18} />
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Stats */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 text-center border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Star className="text-white" size={24} />
            </div>
            <p className="text-foreground font-bold text-xl mb-1">4.8</p>
            <p className="text-muted-foreground text-sm font-medium">Calificación</p>
          </Card>
          
          <Card className="p-4 text-center border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Award className="text-white" size={24} />
            </div>
            <p className="text-foreground font-bold text-xl mb-1">23</p>
            <p className="text-muted-foreground text-sm font-medium">Completados</p>
          </Card>
          
          <Card className="p-4 text-center border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-3">
              <Calendar className="text-primary-foreground" size={24} />
            </div>
            <p className="text-foreground font-bold text-xl mb-1">2</p>
            <p className="text-muted-foreground text-sm font-medium">Meses</p>
          </Card>
        </div>
      </div>
      
      {/* Menu Options */}
      <div className="px-4 space-y-3">
        <Card className="p-0 border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group cursor-pointer">
          <div className="p-4 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-foreground font-semibold mb-1 group-hover:text-primary transition-colors">
                Mis Trabajos Publicados
              </h3>
              <p className="text-muted-foreground text-sm">Ver y gestionar tus publicaciones</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </Card>
        
        <Card className="p-0 border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group cursor-pointer">
          <div className="p-4 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-foreground font-semibold mb-1 group-hover:text-primary transition-colors">
                Trabajos Aplicados
              </h3>
              <p className="text-muted-foreground text-sm">Seguimiento de tus postulaciones</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </Card>
        
        <Card className="p-0 border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group cursor-pointer">
          <div className="p-4 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-foreground font-semibold mb-1 group-hover:text-primary transition-colors">
                Calificaciones
              </h3>
              <p className="text-muted-foreground text-sm">Ver comentarios y puntuaciones</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </Card>
        
        <Card className="p-0 border-0 bg-card/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group cursor-pointer">
          <div className="p-4 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-foreground font-semibold mb-1 group-hover:text-primary transition-colors">
                Historial de Pagos
              </h3>
              <p className="text-muted-foreground text-sm">Revisar transacciones</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileScreen;
