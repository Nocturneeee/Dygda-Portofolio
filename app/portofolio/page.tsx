import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PortofolioPage() {
  // 10 placeholder projects untuk diisi user
  const projects = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    description:
      "Deskripsi project akan ditambahkan di sini. Jelaskan tentang project, teknologi yang digunakan, dan hasil yang dicapai.",
    image: `https://placehold.co/600x400?text=Project+${i + 1}+showcase+image+modern+design+interface`,
    tags: ["UI/UX", "Design", "Development"],
    year: "2024",
  }))

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50 py-16 md:py-20">
          <div className="container text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Portofolio</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kumpulan karya dan project yang telah saya kerjakan
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="container py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} showcase image with modern design interface`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.year}</Badge>
                  </div>
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-muted/50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-bold">Tertarik Berkolaborasi?</h2>
              <p className="text-muted-foreground">
                Saya selalu terbuka untuk project dan kolaborasi baru. Mari berdiskusi tentang ide Anda dan bagaimana
                saya dapat membantu mewujudkannya.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
