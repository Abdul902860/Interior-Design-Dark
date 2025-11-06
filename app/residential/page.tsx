"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Home, Heart, Sparkles, Palette, Sofa, Lightbulb, PaintBucket, Ruler } from "lucide-react"
import { useEffect, useRef } from "react"

export default function ResidentialPage() {
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
      title: "Modern Living Room",
      description: "Contemporary design with comfort and style",
      image: "/luxury-residential-interior-design-modern-living-r.jpg",
    },
    {
      title: "Master Bedroom Suite",
      description: "Serene retreat with elegant finishes",
      image: "/luxury-master-bedroom-interior-design.jpg",
    },
    {
      title: "Gourmet Kitchen",
      description: "Functional and beautiful culinary space",
      image: "/modern-luxury-kitchen-interior-design.jpg",
    },
  ]

  const features = [
    {
      icon: Home,
      title: "Personalized Design",
      description: "Spaces that reflect your unique style and personality",
    },
    {
      icon: Heart,
      title: "Comfort Focus",
      description: "Creating homes that feel warm and inviting",
    },
    {
      icon: Sparkles,
      title: "Luxury Details",
      description: "Premium finishes and thoughtful touches throughout",
    },
    {
      icon: Palette,
      title: "Style Versatility",
      description: "From modern to traditional, we do it all",
    },
  ]

  const roomServices = [
    {
      icon: Sofa,
      title: "Living Spaces",
      description: "Create inviting living rooms and family rooms that balance style with everyday functionality.",
    },
    {
      icon: PaintBucket,
      title: "Kitchens & Dining",
      description: "Design gourmet kitchens and elegant dining areas perfect for cooking and entertaining.",
    },
    {
      icon: Lightbulb,
      title: "Bedrooms & Bathrooms",
      description: "Transform private spaces into luxurious retreats with spa-like bathrooms and serene bedrooms.",
    },
    {
      icon: Ruler,
      title: "Home Offices",
      description: "Productive and stylish home office designs for the modern remote worker.",
    },
  ]

  const designStyles = [
    {
      title: "Modern Contemporary",
      description:
        "Clean lines, minimalist aesthetics, and cutting-edge design elements for a sleek, sophisticated look.",
    },
    {
      title: "Classic Traditional",
      description: "Timeless elegance with rich woods, ornate details, and comfortable, refined furnishings.",
    },
    {
      title: "Transitional",
      description: "The perfect blend of traditional warmth and modern simplicity for versatile, enduring appeal.",
    },
    {
      title: "Coastal & Rustic",
      description: "Relaxed, natural aesthetics inspired by beachside living or countryside charm.",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-residential-interior-design-modern-living-r.jpg"
            alt="Residential interior design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/80 to-background/40" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full animate-fade-in-up border border-accent/30">
              <Home className="text-accent" size={20} />
              <span className="text-sm font-semibold text-accent">Residential Design</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Create Your Dream Home
            </h1>
            <p
              className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Personalized residential interior design that transforms your house into a beautiful, functional home that
              reflects your lifestyle and personality. From single rooms to whole-home renovations, we bring your vision
              to life with exceptional attention to detail.
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

      {/* Room Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Room-by-Room Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized design services for every space in your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomServices.map((service, index) => (
              <Card
                key={service.title}
                className="bg-secondary border-border text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/20 rounded-full mb-4">
                    <service.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
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
              Residential Design Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive home design solutions tailored to your lifestyle
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
              Beautiful homes we've designed for our clients
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

      {/* Design Styles Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Design Styles We Master</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From contemporary to classic, we bring expertise across all design aesthetics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designStyles.map((style, index) => (
              <Card
                key={style.title}
                className="bg-secondary border-border hover:border-accent/50 transition-colors animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{style.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{style.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Design Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A seamless journey from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Discuss your vision and requirements" },
              { step: "02", title: "Design Concept", description: "Create mood boards and 3D renderings" },
              { step: "03", title: "Implementation", description: "Manage the entire renovation process" },
              { step: "04", title: "Final Reveal", description: "Enjoy your beautifully transformed home" },
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-serif font-bold text-accent/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Ready to Design Your Dream Home?</h2>
            <p className="text-lg text-primary-foreground/80">
              Let's bring your vision to life with personalized design solutions
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
