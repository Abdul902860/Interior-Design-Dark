"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Factory, Shield, Zap, Settings, CheckCircle, Gauge, Wrench } from "lucide-react"
import { useEffect, useRef } from "react"

export default function IndustrialPage() {
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
      title: "Manufacturing Facility",
      description: "Efficient layout design for optimal production workflow",
      image: "/modern-manufacturing-interior.png",
    },
    {
      title: "Warehouse Optimization",
      description: "Smart storage solutions for maximum space utilization",
      image: "/industrial-warehouse-interior-design-modern.jpg",
    },
    {
      title: "Production Floor",
      description: "Safety-focused design with ergonomic workstations",
      image: "/industrial-production-floor-modern-design.jpg",
    },
  ]

  const features = [
    {
      icon: Factory,
      title: "Workflow Optimization",
      description: "Design layouts that maximize operational efficiency",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Compliance with all industrial safety standards",
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Sustainable solutions that reduce operational costs",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored designs for your specific industrial needs",
    },
  ]

  const specifications = [
    {
      icon: Gauge,
      title: "Performance Metrics",
      items: [
        "Up to 30% improvement in workflow efficiency",
        "25% reduction in operational bottlenecks",
        "40% better space utilization",
        "Compliance with OSHA safety standards",
      ],
    },
    {
      icon: Wrench,
      title: "Technical Expertise",
      items: [
        "Industrial-grade materials and finishes",
        "Heavy-duty flooring solutions",
        "Advanced ventilation systems",
        "Integrated safety features",
      ],
    },
  ]

  const sectors = [
    {
      title: "Manufacturing",
      description:
        "Optimize production lines with ergonomic workstations, efficient material flow, and safety-first design principles.",
    },
    {
      title: "Warehousing & Logistics",
      description:
        "Maximize storage capacity and streamline operations with intelligent layout planning and modern storage solutions.",
    },
    {
      title: "Food Processing",
      description:
        "Hygienic, compliant facilities designed for food safety standards with easy-to-clean surfaces and proper zoning.",
    },
    {
      title: "Automotive",
      description:
        "Specialized designs for automotive facilities including service bays, parts storage, and customer waiting areas.",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/industrial-warehouse-interior-design-modern.jpg"
            alt="Industrial interior design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/80 to-background/40" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full animate-fade-in-up border border-accent/30">
              <Factory className="text-accent" size={20} />
              <span className="text-sm font-semibold text-accent">Industrial Design Solutions</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Industrial Spaces That Work Smarter
            </h1>
            <p
              className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Innovative industrial design solutions that blend functionality, safety, and efficiency for manufacturing
              and warehouse environments. We create spaces that enhance productivity while maintaining the highest
              safety standards and operational excellence.
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

      {/* Specifications Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Proven Performance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven design solutions that deliver measurable improvements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <Card
                key={spec.title}
                className="bg-secondary border-border animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <spec.icon className="text-accent" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{spec.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {spec.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
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
              Industrial Design Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for modern industrial facilities
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
              Discover our industrial design transformations
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

      {/* Industry Sectors Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across diverse industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector, index) => (
              <Card
                key={sector.title}
                className="bg-secondary border-border hover:border-accent/50 transition-colors animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{sector.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{sector.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Optimize Your Industrial Facility</h2>
            <p className="text-lg text-primary-foreground/80">
              Let's design a space that enhances productivity and safety
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
