import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TentangPage() {
  const tools = [
    {
      name: "Figma",
      logo: "https://placehold.co/80x80?text=Figma+logo+minimalist+design+tool+icon",
      description: "UI/UX Design",
    },
    {
      name: "VS Code",
      logo: "https://placehold.co/80x80?text=VS+Code+logo+blue+code+editor+icon",
      description: "Code Editor",
    },
    {
      name: "Adobe Photoshop",
      logo: "https://placehold.co/80x80?text=Photoshop+logo+blue+Ps+icon",
      description: "Photo Editing",
    },
    {
      name: "Adobe Illustrator",
      logo: "https://pngdownload.io/png-image/adobe-illustrator-2024-logo-png-transparent-creative-and-distinctive-design/",
      description: "Vector Design",
    },
    {
      name: "Canva",
      logo: "https://placehold.co/80x80?text=Canva+logo+colorful+design+platform+icon",
      description: "Graphic Design",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50 py-16 md:py-20">
          <div className="container text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Tentang Saya</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mengenal lebih dekat tentang keahlian dan tools yang saya gunakan
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="container py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
                  <div className="mx-auto">
                    <img
                      src="https://placehold.co/300x300?text=Professional+headshot+photo+of+designer+and+developer+with+clean+background"
                      alt="Professional headshot photo of designer and developer with clean background"
                      className="rounded-full w-full h-auto aspect-square object-cover shadow-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">UI/UX Designer & Backend Developer</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Saya adalah mahasiswa Fakultas Vokasi Universitas Brawijaya yang memiliki passion di bidang desain
                      UI/UX dan pengembangan backend. Dengan pengalaman magang di DISKOMINFO Kota Malang sebagai UI/UX
                      Designer dan di CMLABS sebagai Backend Developer, saya telah mengembangkan kemampuan untuk
                      menciptakan solusi digital yang user-friendly dan efisien.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Selain itu, saya juga aktif dalam berbagai organisasi kemahasiswaan, khususnya di bidang desain,
                      dokumentasi, dan multimedia. Pengalaman ini telah membentuk saya menjadi individu yang dapat
                      bekerja dalam tim dan memiliki leadership yang baik.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tools & Skills */}
        <section className="bg-muted/50 py-16 md:py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Spesialisasi & Tools</h2>
              <p className="text-muted-foreground">Tools dan aplikasi yang saya kuasai</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {tools.map((tool) => (
                <Card key={tool.name} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-20 h-20 mx-auto">
                      <img
                        src={tool.logo || "/placeholder.svg"}
                        alt={`${tool.name} logo representing ${tool.description}`}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Overview */}
        <section className="container py-16 md:py-20">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">UI/UX Design</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>User Research & Analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Wireframing & Prototyping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Visual Design & Branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Usability Testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Responsive Design</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Development</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Backend Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>API Design & Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Database Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Version Control (Git)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Web Development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
