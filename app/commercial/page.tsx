"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Building2, Users, Lightbulb, TrendingUp, Target, Zap } from "lucide-react"
import { useEffect, useRef } from "react"

export default function CommercialPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const projects = [
    {
      title: "Modern Office Space",
      description: "A contemporary workspace designed for collaboration and productivity",
      image: "/modern-office-interior.png",
    },
    {
      title: "Retail Showroom",
      description: "Elegant retail space that enhances customer experience",
      image: "/luxury-retail-showroom-interior.jpg",
    },
    {
      title: "Corporate Headquarters",
      description: "Executive offices that reflect brand excellence",
      image: "/corporate-office-headquarters-interior.jpg",
    },
  ]

  const features = [
    {
      icon: Building2,
      title: "Space Planning",
      description: "Optimize your commercial space for maximum efficiency and flow",
    },
    {
      icon: Users,
      title: "Brand Integration",
      description: "Design that reflects and reinforces your company identity",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Creative approaches to modern workplace challenges",
    },
    {
      icon: TrendingUp,
      title: "ROI Focused",
      description: "Designs that enhance productivity and business performance",
    },
  ]

  const benefits = [
    {
      icon: Target,
      title: "Increased Productivity",
      description:
        "Well-designed workspaces can boost employee productivity by up to 20% through optimized layouts and ergonomic solutions.",
    },
    {
      icon: Users,
      title: "Enhanced Collaboration",
      description:
        "Create spaces that foster teamwork and innovation with strategic placement of collaborative zones and meeting areas.",
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description:
        "Sustainable design choices that reduce operational costs while creating a healthier work environment for your team.",
    },
    {
      icon: TrendingUp,
      title: "Brand Reinforcement",
      description:
        "Your office space is a powerful brand statement. We ensure every design element reflects your company's values and culture.",
    },
  ]

  const caseStudies = [
    {
      title: "Tech Startup Headquarters",
      challenge:
        "Transform a 10,000 sq ft warehouse into a modern, collaborative workspace for a growing tech company.",
      solution:
        "Open-plan design with flexible workstations, soundproof meeting pods, and vibrant breakout areas that reflect the company's innovative culture.",
      result: "40% increase in employee satisfaction and 25% improvement in cross-team collaboration.",
    },
    {
      title: "Law Firm Renovation",
      challenge: "Modernize a traditional law office while maintaining professional gravitas and client confidence.",
      solution:
        "Sophisticated design blending classic elements with contemporary touches, featuring private offices, conference rooms, and a welcoming reception area.",
      result: "Enhanced client perception and 30% increase in new client consultations.",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-commercial-office-interior-design-luxury.jpg"
            alt="Commercial interior design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/80 to-background/40" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full animate-fade-in-up border border-accent/30">
              <Building2 className="text-accent" size={20} />
              <span className="text-sm font-semibold text-accent">Commercial Design Excellence</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Elevate Your Business Environment
            </h1>
            <p
              className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Create inspiring workspaces that boost productivity, reflect your brand identity, and impress clients. Our
              commercial interior design expertise transforms ordinary offices into extraordinary business environments
              that drive success and foster innovation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Why Invest in Commercial Design?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic interior design is more than aesthetics—it's a business investment that delivers measurable
              returns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="bg-secondary border-border animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center">
                      <benefit.icon className="text-accent" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Commercial Design Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your business space with designs that inspire innovation and drive success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <feature.icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful commercial interior design projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our commercial design projects
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card
                key={study.title}
                className="bg-secondary border-border animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-6">{study.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-accent font-semibold mb-2">Challenge</div>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-accent font-semibold mb-2">Solution</div>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <div className="text-accent font-semibold mb-2">Result</div>
                      <p className="text-muted-foreground leading-relaxed">{study.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Ready to Transform Your Commercial Space?</h2>
            <p className="text-lg text-primary-foreground/80">
              Let's create a workspace that drives success and inspires your team
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/contact">
                Get Free Consultation <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
