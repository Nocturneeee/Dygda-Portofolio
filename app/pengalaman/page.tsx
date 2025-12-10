import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Users } from "lucide-react"

export default function PengalamanPage() {
  const internships = [
    {
      position: "UI/UX Designer",
      company: "DISKOMINFO Kota Malang",
      period: "2023",
      type: "Magang",
      description:
        "Bertanggung jawab dalam merancang user interface dan user experience untuk aplikasi pemerintahan. Melakukan research, wireframing, prototyping, dan usability testing.",
      achievements: [
        "Merancang UI/UX untuk 3 aplikasi pemerintahan",
        "Melakukan user research dengan 50+ responden",
        "Meningkatkan user satisfaction score hingga 85%",
      ],
    },
    {
      position: "Backend Developer",
      company: "CMLABS",
      period: "2024",
      type: "Magang",
      description:
        "Mengembangkan dan memelihara backend system untuk berbagai project. Bekerja dengan REST API, database management, dan server optimization.",
      achievements: [
        "Mengembangkan 5+ REST API endpoints",
        "Optimasi database query untuk performa lebih baik",
        "Kolaborasi dengan frontend team untuk integrasi API",
      ],
    },
  ]

  const organizations = [
    {
      position: "Dirjen Media Informasi Kementerian Komunikasi dan Informatika",
      organization: "Badan Eksekutif Mahasiswa Fakultas Vokasi Universitas Brawijaya",
      period: "2025",
      description: "Memimpin divisi media informasi dan bertanggung jawab atas strategi komunikasi digital organisasi.",
    },
    {
      position: "Steering Committee Company Profile",
      organization: "Badan Eksekutif Mahasiswa Fakultas Vokasi Universitas Brawijaya",
      period: "2025",
      description: "Koordinasi dan pengawasan pembuatan company profile organisasi.",
    },
    {
      position: "Steering Committee Voks Night (Gala Premiere ComProf)",
      organization: "Badan Eksekutif Mahasiswa Fakultas Vokasi Universitas Brawijaya",
      period: "2025",
      description: "Koordinasi acara peluncuran company profile organisasi.",
    },
    {
      position: "Steering Committee Buku Akhir Tahun (BAT)",
      organization: "Badan Eksekutif Mahasiswa Fakultas Vokasi Universitas Brawijaya",
      period: "2025",
      description: "Koordinasi pembuatan buku kenangan akhir tahun organisasi.",
    },
    {
      position: "Koordinator Divisi Desain, Dokumentasi dan Multimedia",
      organization: "Vokasi Internal Stage (VINTAGE) 2024",
      period: "2024",
      description: "Memimpin tim desain dan dokumentasi untuk acara internal fakultas.",
    },
    {
      position: "Koordinator Divisi Desain, Dokumentasi dan Multimedia",
      organization: "Pekan Seni dan Olahraga (PESONA) 2024",
      period: "2024",
      description: "Memimpin divisi kreatif untuk event seni dan olahraga fakultas.",
    },
    {
      position: "Staff Ahli Kementerian Seni dan Olahraga",
      organization: "BEM Fakultas Vokasi Universitas Brawijaya",
      period: "2024",
      description: "Memberikan konsultasi dan dukungan untuk kegiatan seni dan olahraga.",
    },
    {
      position: "Staff Magang Kementerian Komunikasi dan Informasi",
      organization: "Eksekutif Mahasiswa Universitas Brawijaya",
      period: "2024",
      description: "Mendukung kegiatan komunikasi dan informasi tingkat universitas.",
    },
    {
      position: "Staff Divisi Desain, Dokumentasi dan Multimedia",
      organization: "E-Magazine Launching COMPROF EM UB",
      period: "2024",
      description: "Berkontribusi dalam pembuatan konten visual untuk e-magazine.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50 py-16 md:py-20">
          <div className="container text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Pengalaman</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Perjalanan profesional dan organisasi yang telah membentuk karir saya
            </p>
          </div>
        </section>

        {/* Experience Tabs */}
        <section className="container py-16 md:py-20">
          <Tabs defaultValue="internship" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="internship" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Magang
              </TabsTrigger>
              <TabsTrigger value="organization" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Organisasi
              </TabsTrigger>
            </TabsList>

            <TabsContent value="internship" className="mt-8 space-y-6">
              {internships.map((intern, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl">{intern.position}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground">
                          {intern.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                          {intern.type}
                        </div>
                        <p className="text-sm text-muted-foreground">{intern.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{intern.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Pencapaian:</h4>
                      <ul className="space-y-2">
                        {intern.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="organization" className="mt-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {organizations.map((org, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight">{org.position}</CardTitle>
                      <CardDescription className="text-sm">{org.organization}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-primary font-medium">{org.period}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{org.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Summary */}
        <section className="bg-muted/50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-bold">Pengalaman yang Beragam</h2>
              <p className="text-muted-foreground leading-relaxed">
                Melalui pengalaman magang dan organisasi, saya telah mengembangkan kemampuan teknis, leadership, dan
                soft skills yang essential. Setiap pengalaman memberikan pelajaran berharga yang membentuk
                profesionalisme saya.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
