import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Instagram, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Halo, Saya
                <span className="block text-primary mt-2">UI/UX Designer & Developer</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Seorang mahasiswa yang bersemangat dalam desain UI/UX dan pengembangan web. Saya senang menciptakan
                pengalaman digital yang menarik dan fungsional.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/portofolio">Lihat Portofolio</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/kontak">Hubungi Saya</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <img
                  src="https://placehold.co/600x600?text=Professional+portrait+photo+of+a+UI+UX+designer+and+developer+with+modern+minimalist+background"
                  alt="Professional portrait photo of a UI UX designer and developer with modern minimalist background"
                  className="rounded-2xl object-cover w-full h-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Introduction */}
        <section className="bg-muted/50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold">Tentang Saya</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mahasiswa Fakultas Vokasi Universitas Brawijaya dengan passion di bidang UI/UX Design dan Backend
                Development. Saya memiliki pengalaman magang di DISKOMINFO Kota Malang dan CMLABS, serta aktif dalam
                berbagai organisasi kemahasiswaan.
              </p>
              <Button asChild variant="outline" className="mt-4 bg-transparent">
                <Link href="/tentang">Selengkapnya</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Mari Terhubung</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <Instagram className="h-8 w-8" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <Mail className="h-8 w-8" />
                <span className="text-sm font-medium">Email</span>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <Github className="h-8 w-8" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <Linkedin className="h-8 w-8" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
