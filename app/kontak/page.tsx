import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Mail, Github, Linkedin } from "lucide-react"

export default function KontakPage() {
  const contacts = [
    {
      name: "Instagram",
      icon: Instagram,
      description: "Follow saya di Instagram",
      link: "https://instagram.com/yourusername",
      handle: "@yourusername",
    },
    {
      name: "Email",
      icon: Mail,
      description: "Kirim email ke saya",
      link: "mailto:your.email@example.com",
      handle: "your.email@example.com",
    },
    {
      name: "GitHub",
      icon: Github,
      description: "Lihat project saya",
      link: "https://github.com/yourusername",
      handle: "@yourusername",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      description: "Connect dengan saya",
      link: "https://linkedin.com/in/yourusername",
      handle: "linkedin.com/in/yourusername",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50 py-16 md:py-20">
          <div className="container text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Kontak</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mari terhubung dan berdiskusi tentang project atau kolaborasi
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="container py-16 md:py-20">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {contacts.map((contact) => {
              const Icon = contact.icon
              return (
                <a
                  key={contact.name}
                  href={contact.link}
                  target={contact.name !== "Email" ? "_blank" : undefined}
                  rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="block group"
                >
                  <Card className="h-full hover:shadow-lg transition-all group-hover:border-primary">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{contact.name}</CardTitle>
                          <CardDescription>{contact.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground font-medium group-hover:text-primary transition-colors">
                        {contact.handle}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              )
            })}
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-muted/50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Mari Berkolaborasi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Saya selalu terbuka untuk diskusi tentang project baru, peluang kerja sama, atau sekadar berbagi
                    ide. Jangan ragu untuk menghubungi saya melalui salah satu platform di atas.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Saya biasanya merespons dalam 1-2 hari kerja. Untuk pertanyaan mendesak, email adalah cara tercepat
                    untuk menghubungi saya.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
