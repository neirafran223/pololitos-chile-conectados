
import { useState } from "react";
import { User, Mail, Phone, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";

interface AuthScreenProps {
  onLogin: () => void;
}

const AuthScreen = ({ onLogin }: AuthScreenProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/20 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }} />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <Card className="w-full max-w-lg relative backdrop-blur-lg border-0 bg-card/80 shadow-2xl">
        <div className="p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="relative mx-auto mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <Sparkles className="text-primary-foreground" size={32} />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse" />
            </div>
            <h1 className="text-foreground text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Pololitos
            </h1>
            <p className="text-muted-foreground text-lg">Conecta con trabajos temporales</p>
          </div>
          
          {/* Tab switcher */}
          <div className="flex mb-8 p-1 bg-secondary/50 rounded-xl">
            <Button
              variant={isLogin ? "default" : "ghost"}
              onClick={() => setIsLogin(true)}
              className="flex-1 rounded-lg transition-all duration-200"
              size="lg"
            >
              Iniciar Sesión
            </Button>
            <Button
              variant={!isLogin ? "default" : "ghost"}
              onClick={() => setIsLogin(false)}
              className="flex-1 rounded-lg transition-all duration-200"
              size="lg"
            >
              Registrarse
            </Button>
          </div>
          
          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="relative group">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors z-10" size={20} />
                <Input
                  type="text"
                  placeholder="Nombre de usuario"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  className="pl-10 h-12 bg-background/50 border-2 border-border/50 focus:border-primary/50 transition-all duration-200"
                  required={!isLogin}
                />
              </div>
            )}
            
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors z-10" size={20} />
              <Input
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="pl-10 h-12 bg-background/50 border-2 border-border/50 focus:border-primary/50 transition-all duration-200"
                required
              />
            </div>
            
            {!isLogin && (
              <div className="relative group">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors z-10" size={20} />
                <Input
                  type="tel"
                  placeholder="Número de teléfono (+56 9 XXXX XXXX)"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="pl-10 h-12 bg-background/50 border-2 border-border/50 focus:border-primary/50 transition-all duration-200"
                  required={!isLogin}
                />
              </div>
            )}
            
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors z-10" size={20} />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="pl-10 pr-12 h-12 bg-background/50 border-2 border-border/50 focus:border-primary/50 transition-all duration-200"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10 text-muted-foreground hover:text-primary"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </Button>
            </div>
            
            {!isLogin && (
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors z-10" size={20} />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirmar contraseña"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="pl-10 pr-12 h-12 bg-background/50 border-2 border-border/50 focus:border-primary/50 transition-all duration-200"
                  required={!isLogin}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10 text-muted-foreground hover:text-primary"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </Button>
              </div>
            )}
            
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              size="lg"
            >
              {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
            </Button>
          </form>
          
          {/* Divider and Google Auth */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground font-medium">O continuar con</span>
              </div>
            </div>
            
            <Button
              type="button"
              variant="outline"
              onClick={onLogin}
              className="w-full mt-6 h-12 border-2 hover:bg-accent/10 transition-all duration-200 font-semibold"
              size="lg"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar con Google
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AuthScreen;
