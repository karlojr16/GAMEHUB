import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tournament-gray-50 to-tournament-gray-100">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-tournament-black mb-6">
            Acerca de TourneyPro
          </h1>
          <p className="text-xl text-tournament-gray-600 max-w-2xl mx-auto">
            Revolucionando la organización de torneos deportivos con tecnología
            de vanguardia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 hover:border-tournament-red transition-colors">
            <CardHeader>
              <Trophy className="w-12 h-12 text-tournament-red mb-4" />
              <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-tournament-gray-600 leading-relaxed">
                Democratizar la organización de torneos deportivos,
                proporcionando herramientas profesionales que antes solo estaban
                disponibles para grandes organizaciones.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-tournament-red transition-colors">
            <CardHeader>
              <Target className="w-12 h-12 text-tournament-red mb-4" />
              <CardTitle className="text-2xl">Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-tournament-gray-600 leading-relaxed">
                Ser la plataforma líder mundial para torneos deportivos,
                conectando atletas, organizadores y fanáticos en una experiencia
                digital perfecta.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-tournament-black mb-8">
            Nuestros Valores
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Users className="w-16 h-16 text-tournament-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-tournament-black mb-2">
                Comunidad
              </h3>
              <p className="text-tournament-gray-600">
                Fomentamos la conexión entre atletas y organizadores de todo el
                mundo.
              </p>
            </div>

            <div className="text-center">
              <Zap className="w-16 h-16 text-tournament-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-tournament-black mb-2">
                Innovación
              </h3>
              <p className="text-tournament-gray-600">
                Utilizamos la última tecnología para simplificar procesos
                complejos.
              </p>
            </div>

            <div className="text-center">
              <Trophy className="w-16 h-16 text-tournament-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-tournament-black mb-2">
                Excelencia
              </h3>
              <p className="text-tournament-gray-600">
                Nos comprometemos a ofrecer la mejor experiencia posible en cada
                torneo.
              </p>
            </div>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-tournament-black to-tournament-gray-900 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Tienes preguntas?</h2>
            <p className="text-tournament-gray-300 mb-6">
              Nuestro equipo está aquí para ayudarte a organizar torneos
              exitosos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@tourneypro.com"
                className="bg-tournament-red hover:bg-tournament-red-dark px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contactános
              </a>
              <a
                href="#"
                className="border-2 border-white hover:bg-white hover:text-tournament-black px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Centro de Ayuda
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
