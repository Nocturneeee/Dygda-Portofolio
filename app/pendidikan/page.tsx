import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function PendidikanPage() {
  const education = [
    {
      level: "Perguruan Tinggi",
      institution: "Universitas Brawijaya",
      faculty: "Fakultas Vokasi",
      period: "2022 - Sekarang",
      description: "Sedang menempuh pendidikan di Fakultas Vokasi dengan fokus pada teknologi informasi dan desain.",
      status: "Mahasiswa Aktif",
    },
    {
      level: "Sekolah Menengah Atas",
      institution: "SMA Negeri (Nama Sekolah)",
      faculty: "Jurusan IPA/IPS",
      period: "2019 - 2022",
      description: "Lulus dengan prestasi yang baik dan aktif dalam kegiatan ekstrakurikuler.",
      status: "Lulus",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50 py-16 md:py-20">
          <div className="container text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Pendidikan</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Riwayat pendidikan formal yang telah saya tempuh
            </p>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="container py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative space-y-8">
              {/* Timeline Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border hidden md:block" />

              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <Card className="md:ml-20">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="space-y-2">
                          <CardTitle className="text-2xl">{edu.institution}</CardTitle>
                          <CardDescription className="text-base">{edu.faculty}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                            {edu.status}
                          </div>
                          <p className="text-sm text-muted-foreground">{edu.period}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                      <div className="pt-2">
                        <span className="inline-block px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">
                          {edu.level}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-muted/50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-bold">Komitmen terhadap Pembelajaran</h2>
              <p className="text-muted-foreground leading-relaxed">
                Selama menempuh pendidikan, saya selalu berusaha untuk mengembangkan diri tidak hanya secara akademik,
                tetapi juga melalui pengalaman organisasi dan magang. Saya percaya bahwa pembelajaran berkelanjutan
                adalah kunci untuk berkembang di era digital ini.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
