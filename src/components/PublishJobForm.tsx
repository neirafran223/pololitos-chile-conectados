
import { useState } from "react";
import { X, MapPin, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PublishJobFormProps {
  onClose: () => void;
  onSubmit: (job: any) => void;
}

const PublishJobForm = ({ onClose, onSubmit }: PublishJobFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    datetime: "",
    category: "General"
  });

  const categories = [
    "Mascotas", "Jardín", "Hogar", "Mudanza", "Transporte", 
    "Tecnología", "Educación", "Eventos", "General"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.location && formData.price) {
      onSubmit({
        ...formData,
        id: Date.now(),
        time: formData.datetime || "Flexible"
      });
      onClose();
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Publicar Trabajo</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4 text-gray-400" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-white text-sm font-medium mb-2 block">
                Título del trabajo *
              </label>
              <Input
                placeholder="Ej: Pasear perro golden retriever"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>

            <div>
              <label className="text-white text-sm font-medium mb-2 block">
                Descripción (máx. 200 caracteres) *
              </label>
              <Textarea
                placeholder="Describe brevemente el trabajo..."
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value.slice(0, 200))}
                className="bg-gray-700 border-gray-600 text-white resize-none"
                rows={3}
                required
              />
              <p className="text-gray-400 text-xs mt-1">
                {formData.description.length}/200 caracteres
              </p>
            </div>

            <div>
              <label className="text-white text-sm font-medium mb-2 block">
                <MapPin className="inline w-4 h-4 mr-1" />
                Ubicación (Comuna/Ciudad) *
              </label>
              <Input
                placeholder="Ej: Las Condes, Santiago"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>

            <div>
              <label className="text-white text-sm font-medium mb-2 block">
                <DollarSign className="inline w-4 h-4 mr-1" />
                Precio ofrecido *
              </label>
              <Input
                placeholder="Ej: $25.000"
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>

            <div>
              <label className="text-white text-sm font-medium mb-2 block">
                <Clock className="inline w-4 h-4 mr-1" />
                Fecha/Hora (opcional)
              </label>
              <Input
                type="datetime-local"
                value={formData.datetime}
                onChange={(e) => handleChange("datetime", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="text-white text-sm font-medium mb-2 block">
                Categoría
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleChange("category", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Publicar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PublishJobForm;
