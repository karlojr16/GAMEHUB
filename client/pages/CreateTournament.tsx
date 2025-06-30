import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Plus, Users, Calendar, Settings, Crown } from "lucide-react";

export default function CreateTournament() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tournament-gray-50 to-tournament-gray-100">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-tournament-black mb-6">
            Crea tu Torneo Profesional
          </h1>
          <p className="text-xl text-tournament-gray-600 max-w-2xl mx-auto mb-8">
            Diseña y gestiona torneos deportivos de clase mundial con nuestras
            herramientas profesionales.
          </p>

          <Button
            size="lg"
            className="bg-tournament-red hover:bg-tournament-red-dark px-8 py-4 text-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Crear Nuevo Torneo
          </Button>
        </div>

        {/* Quick Start Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 hover:border-tournament-red transition-colors cursor-pointer group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-tournament-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-tournament-red group-hover:scale-110 transition-all">
                <Trophy className="w-8 h-8 text-tournament-red group-hover:text-white" />
              </div>
              <CardTitle>Torneo Rápido</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-tournament-gray-600 text-center mb-4">
                Configura un torneo básico en minutos con plantillas
                predefinidas.
              </p>
              <Badge className="w-full justify-center bg-green-100 text-green-800">
                Recomendado para principiantes
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-tournament-red transition-colors cursor-pointer group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-tournament-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-tournament-red group-hover:scale-110 transition-all">
                <Settings className="w-8 h-8 text-tournament-red group-hover:text-white" />
              </div>
              <CardTitle>Torneo Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-tournament-gray-600 text-center mb-4">
                Control total sobre cada aspecto de tu torneo con opciones
                avanzadas.
              </p>
              <Badge className="w-full justify-center bg-blue-100 text-blue-800">
                Para organizadores experimentados
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-tournament-red transition-colors cursor-pointer group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-tournament-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-tournament-red group-hover:scale-110 transition-all">
                <Crown className="w-8 h-8 text-tournament-red group-hover:text-white" />
              </div>
              <CardTitle>Liga Profesional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-tournament-gray-600 text-center mb-4">
                Crea una liga completa con múltiples torneos y temporadas.
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">
                Para organizaciones grandes
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Features Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-tournament-black text-center mb-8">
            Herramientas Incluidas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Gestión de Participantes",
                description: "Registro automático, verificación y comunicación",
              },
              {
                icon: Calendar,
                title: "Programación Inteligente",
                description: "Horarios automáticos sin conflictos",
              },
              {
                icon: Trophy,
                title: "Brackets Dinámicos",
                description: "Eliminación simple, doble o round-robin",
              },
              {
                icon: Settings,
                title: "Configuración Avanzada",
                description: "Reglas personalizadas y formato flexible",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-2 hover:border-tournament-red transition-colors"
                >
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-tournament-red mx-auto mb-4" />
                    <h3 className="font-semibold text-tournament-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-tournament-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Tournaments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Tus Torneos Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <Trophy className="w-16 h-16 text-tournament-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-tournament-gray-600 mb-2">
                No has creado ningún torneo aún
              </h3>
              <p className="text-tournament-gray-500 mb-6">
                ¡Crea tu primer torneo y comienza a organizar competencias
                increíbles!
              </p>
              <Button className="bg-tournament-red hover:bg-tournament-red-dark">
                <Plus className="w-4 h-4 mr-2" />
                Crear Mi Primer Torneo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
