import Link from "next/link"
import { Instagram, Mail, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Portofolio</h3>
            <p className="text-sm text-muted-foreground">
              Website portofolio pribadi untuk menampilkan karya, pengalaman, dan pencapaian saya.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigasi</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Beranda
              </Link>
              <Link href="/tentang" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Tentang Saya
              </Link>
              <Link
                href="/pendidikan"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pendidikan
              </Link>
              <Link
                href="/pengalaman"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pengalaman
              </Link>
              <Link
                href="/portofolio"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Portofolio
              </Link>
              <Link href="/kontak" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Kontak
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Portofolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
