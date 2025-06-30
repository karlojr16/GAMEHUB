import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import {
  Trophy,
  Users,
  Calendar,
  Target,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Crown,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tournament-gray-50 to-tournament-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-tournament-black via-tournament-gray-900 to-tournament-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F25c48a915d7645c7b4b39fc02001bd4d%2F7480793cb4c44488bbd096281663f1ba?format=webp&width=1920')`,
          }}
        ></div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-tournament-black/80 via-tournament-gray-900/70 to-tournament-black/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <Badge className="mb-6 bg-tournament-red/20 text-tournament-red border-tournament-red/30 hover:bg-tournament-red/30">
              🏆 Plataforma #1 de Torneos Deportivos
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Organiza y Participa en
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tournament-red to-tournament-red-light block">
                Torneos Épicos
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-tournament-gray-300 mb-8 max-w-3xl mx-auto">
              La plataforma definitiva para crear, gestionar y participar en
              torneos de box, kickboxing, basquetbol, padel y más deportes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-tournament-red hover:bg-tournament-red-dark text-white px-8 py-4 text-lg"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Crear Mi Torneo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-tournament-black px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-tournament-gray-400">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-tournament-red" />
                <span>+10,000 Atletas</span>
              </div>
              <div className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-tournament-red" />
                <span>+500 Torneos</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-tournament-red" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tournament-black mb-4">
              Todo lo que necesitas para torneos profesionales
            </h2>
            <p className="text-xl text-tournament-gray-600 max-w-2xl mx-auto">
              Herramientas completas para organizadores y atletas en una sola
              plataforma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-tournament-red transition-colors group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-tournament-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-tournament-red group-hover:scale-110 transition-all">
                  <Trophy className="w-8 h-8 text-tournament-red group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Gestión de Torneos</CardTitle>
                <CardDescription>
                  Crea y administra torneos de múltiples deportes con
                  herramientas profesionales
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-tournament-red transition-colors group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-tournament-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-tournament-red group-hover:scale-110 transition-all">
                  <Target className="w-8 h-8 text-tournament-red group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Brackets Automáticos</CardTitle>
                <CardDescription>
                  Genera brackets de eliminación automáticamente con algoritmos
                  inteligentes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-tournament-red transition-colors group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-tournament-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-tournament-red group-hover:scale-110 transition-all">
                  <Users className="w-8 h-8 text-tournament-red group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Registro de Atletas</CardTitle>
                <CardDescription>
                  Sistema completo de inscripciones con verificación y gestión
                  de participantes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-tournament-red transition-colors group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-tournament-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-tournament-red group-hover:scale-110 transition-all">
                  <Calendar className="w-8 h-8 text-tournament-red group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">
                  Programación Inteligente
                </CardTitle>
                <CardDescription>
                  Organiza fechas, horarios y venues automáticamente sin
                  conflictos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-tournament-red transition-colors group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-tournament-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-tournament-red group-hover:scale-110 transition-all">
                  <Shield className="w-8 h-8 text-tournament-red group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Pagos Seguros</CardTitle>
                <CardDescription>
                  Procesa inscripciones y pagos de manera segura con múltiples
                  métodos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-tournament-red transition-colors group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-tournament-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-tournament-red group-hover:scale-110 transition-all">
                  <Zap className="w-8 h-8 text-tournament-red group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Resultados en Vivo</CardTitle>
                <CardDescription>
                  Actualizaciones en tiempo real de marcadores y resultados de
                  competencias
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-24 bg-tournament-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tournament-black mb-4">
              Deportes Soportados
            </h2>
            <p className="text-xl text-tournament-gray-600">
              Organiza torneos para una gran variedad de disciplinas deportivas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "Box", emoji: "🥊" },
              { name: "Kickboxing", emoji: "🦵" },
              { name: "Basquetbol", emoji: "🏀" },
              { name: "Padel", emoji: "🎾" },
              { name: "Fútbol", emoji: "⚽" },
              { name: "Tenis", emoji: "🎾" },
              { name: "Voleibol", emoji: "🏐" },
              { name: "MMA", emoji: "🥋" },
              { name: "Esports", emoji: "🎮" },
              { name: "Y más...", emoji: "➕" },
            ].map((sport, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow cursor-pointer hover:border-tournament-red"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{sport.emoji}</div>
                  <p className="font-semibold text-tournament-black">
                    {sport.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tournament-black mb-4">
              Planes para Organizadores
            </h2>
            <p className="text-xl text-tournament-gray-600">
              Elige el plan perfecto para tus necesidades de organización
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Básico</CardTitle>
                <div className="text-4xl font-bold text-tournament-black my-4">
                  $29
                  <span className="text-lg text-tournament-gray-600">/mes</span>
                </div>
                <CardDescription>Perfecto para comenzar</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    Hasta 3 torneos por mes
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    100 participantes máximo
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    Brackets automáticos
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    Soporte por email
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-tournament-red hover:bg-tournament-red-dark">
                  Comenzar Gratis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-tournament-red relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-tournament-red text-white">
                  <Crown className="w-3 h-3 mr-1" />
                  Más Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="text-4xl font-bold text-tournament-black my-4">
                  $79
                  <span className="text-lg text-tournament-gray-600">/mes</span>
                </div>
                <CardDescription>Para organizadores serios</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    Torneos ilimitados
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    1000 participantes máximo
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    Todas las funciones básicas
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    Streaming en vivo
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    Soporte prioritario
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-tournament-red hover:bg-tournament-red-dark">
                  Empezar Pro
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-tournament-black my-4">
                  Personalizado
                </div>
                <CardDescription>Para grandes organizaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    Todo ilimitado
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    API personalizada
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    Marca personalizada
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    Integraciones avanzadas
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-tournament-red rounded-full mr-3"></div>
                    Soporte 24/7
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-6 border-tournament-red text-tournament-red hover:bg-tournament-red hover:text-white"
                >
                  Contactar Ventas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-tournament-black to-tournament-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para organizar tu próximo torneo?
          </h2>
          <p className="text-xl text-tournament-gray-300 mb-8">
            Únete a miles de organizadores que confían en TourneyPro para crear
            experiencias deportivas increíbles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-tournament-red hover:bg-tournament-red-dark text-white px-8 py-4"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Comenzar Ahora - Gratis
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-tournament-black px-8 py-4"
            >
              Hablar con Ventas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tournament-black text-tournament-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-tournament-red rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold text-xl">TourneyPro</span>
              </div>
              <p className="text-tournament-gray-400">
                La plataforma líder para organizar torneos deportivos
                profesionales.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Producto</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/tournaments" className="hover:text-white">
                    Buscar Torneos
                  </Link>
                </li>
                <li>
                  <Link to="/create" className="hover:text-white">
                    Crear Torneo
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="hover:text-white">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Carreras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentación
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Estado
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-tournament-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 TourneyPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
