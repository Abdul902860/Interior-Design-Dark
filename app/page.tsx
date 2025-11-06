"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, Factory, Home, CheckCircle, Award, Users, TrendingUp, Star } from "lucide-react"
import { useEffect, useRef } from "react"

export default function HomePage() {
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

  const services = [
    {
      icon: Building2,
      title: "Commercial",
      description:
        "Transform your business space into a productive and inspiring environment that reflects your brand identity and drives success.",
      href: "/commercial",
      image: "/modern-commercial-office-interior-design-luxury.jpg",
    },
    {
      icon: Factory,
      title: "Industrial",
      description:
        "Innovative industrial design solutions that blend functionality with aesthetic appeal for manufacturing and warehouse spaces.",
      href: "/industrial",
      image: "/industrial-warehouse-interior-design-modern.jpg",
    },
    {
      icon: Home,
      title: "Residential",
      description:
        "Create your dream home with personalized designs that combine comfort, style, and functionality for modern living.",
      href: "/residential",
      image: "/luxury-residential-interior-design-modern-living-r.jpg",
    },
  ]

  const features = [
    "Expert Design Consultation",
    "3D Visualization & Rendering",
    "Custom Furniture Selection",
    "Project Management",
    "Sustainable Design Solutions",
    "Post-Installation Support",
  ]

  const stats = [
    { icon: Award, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "350+", label: "Happy Clients" },
    { icon: TrendingUp, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content:
        "LuxeDesign transformed our office space into a modern, collaborative environment that our team absolutely loves. The attention to detail and professionalism was outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Homeowner",
      content:
        "Our home renovation exceeded all expectations. The design team listened to our needs and created a space that perfectly reflects our style while being incredibly functional.",
      rating: 5,
    },
    {
      name: "David Martinez",
      role: "Operations Manager",
      content:
        "The industrial facility redesign improved our workflow efficiency by 40%. The team understood our operational needs and delivered a practical yet beautiful solution.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-interior-design-modern-minimalist-living-sp.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/50" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight animate-fade-in-up">
              Elevate Your Space with <span className="text-accent">Timeless Design</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We create exceptional interiors that inspire, innovate, and transform the way you experience your
              environment. From concept to completion, we bring your vision to life with unparalleled expertise and
              attention to detail.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground/20 hover:bg-foreground/5 bg-transparent"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="text-accent mx-auto mb-3" size={32} />
                <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized design solutions tailored to your unique needs across commercial, industrial, and residential
              spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="text-accent" size={40} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="link" className="text-accent p-0">
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="/interior-designer-working-on-project-plans-modern-.jpg"
                alt="Our process"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Why Choose <span className="text-accent">LuxeDesign</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                With over 15 years of experience, we bring creativity, expertise, and dedication to every project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={feature} className="flex items-start gap-3" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 mt-6">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from clients who've experienced the LuxeDesign difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="bg-secondary border-border animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-accent fill-accent" size={16} />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Design Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Consultation",
                description:
                  "We begin by understanding your vision, needs, and budget through in-depth consultation sessions.",
              },
              {
                step: "02",
                title: "Concept Development",
                description:
                  "Our team creates detailed design concepts, mood boards, and 3D visualizations for your approval.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "We manage every aspect of the project, coordinating with contractors and ensuring quality execution.",
              },
              {
                step: "04",
                title: "Final Reveal",
                description:
                  "Experience your transformed space with a final walkthrough and comprehensive post-project support.",
              },
            ].map((item, index) => (
              <Card
                key={item.step}
                className="bg-card border-border animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-6xl font-serif font-bold text-accent/30 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Ready to Transform Your Space?</h2>
            <p className="text-lg text-primary-foreground/80">
              Let's collaborate to bring your vision to life. Contact us today for a free consultation.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/contact">
                Schedule Consultation <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
