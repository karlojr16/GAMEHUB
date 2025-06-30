import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, Users, Trophy } from "lucide-react";

export default function TournamentSearch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tournament-gray-50 to-tournament-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-tournament-black mb-6">
            Encuentra tu Próximo Torneo
          </h1>
          <p className="text-xl text-tournament-gray-600 max-w-2xl mx-auto mb-8">
            Descubre y únete a torneos emocionantes en tu área o en todo el
            mundo.
          </p>

          <div className="max-w-2xl mx-auto flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-tournament-gray-400" />
              <Input
                placeholder="Buscar torneos por deporte, ubicación..."
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Button
              size="lg"
              className="bg-tournament-red hover:bg-tournament-red-dark px-8"
            >
              Buscar
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Filtros</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Deporte</h4>
                  <div className="space-y-2">
                    {["Box", "Kickboxing", "Basquetbol", "Padel", "Fútbol"].map(
                      (sport) => (
                        <label key={sport} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>{sport}</span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Ubicación</h4>
                  <Input placeholder="Ciudad o país" />
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Fecha</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="date" className="mr-2" />
                      <span>Esta semana</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="date" className="mr-2" />
                      <span>Este mes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="date" className="mr-2" />
                      <span>Próximo mes</span>
                    </label>
                  </div>
                </div>

                <Button className="w-full bg-tournament-red hover:bg-tournament-red-dark">
                  Aplicar Filtros
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Tournament Results */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-tournament-black">
                Torneos Disponibles
              </h2>
              <p className="text-tournament-gray-600">24 torneos encontrados</p>
            </div>

            <div className="space-y-6">
              {/* Sample Tournament Cards */}
              {[
                {
                  title: "Campeonato Nacional de Box 2024",
                  sport: "Box",
                  location: "Ciudad de México",
                  date: "15-17 Marzo 2024",
                  participants: "64/128",
                  prize: "$50,000",
                  status: "Inscripciones Abiertas",
                },
                {
                  title: "Liga Profesional de Kickboxing",
                  sport: "Kickboxing",
                  location: "Guadalajara",
                  date: "22-24 Marzo 2024",
                  participants: "32/64",
                  prize: "$25,000",
                  status: "Últimos Lugares",
                },
                {
                  title: "Torneo Internacional de Basquetbol",
                  sport: "Basquetbol",
                  location: "Monterrey",
                  date: "5-7 Abril 2024",
                  participants: "16/32",
                  prize: "$75,000",
                  status: "Inscripciones Abiertas",
                },
              ].map((tournament, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-tournament-red transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-tournament-black mb-2">
                          {tournament.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{tournament.sport}</Badge>
                          <Badge
                            className={
                              tournament.status === "Inscripciones Abiertas"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {tournament.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-tournament-red">
                          {tournament.prize}
                        </div>
                        <div className="text-sm text-tournament-gray-500">
                          Premio
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-tournament-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-tournament-red" />
                        {tournament.location}
                      </div>
                      <div className="flex items-center text-tournament-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-tournament-red" />
                        {tournament.date}
                      </div>
                      <div className="flex items-center text-tournament-gray-600">
                        <Users className="w-4 h-4 mr-2 text-tournament-red" />
                        {tournament.participants} participantes
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <Button
                        variant="outline"
                        className="border-tournament-red text-tournament-red hover:bg-tournament-red hover:text-white"
                      >
                        Ver Detalles
                      </Button>
                      <Button className="bg-tournament-red hover:bg-tournament-red-dark">
                        <Trophy className="w-4 h-4 mr-2" />
                        Inscribirse
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
