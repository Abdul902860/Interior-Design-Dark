"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ContactPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })

      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@luxedesign.com",
      link: "mailto:info@luxedesign.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Design Street, New York, NY 10001",
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM - 6PM",
      link: null,
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
              Let's Create Something <span className="text-accent">Amazing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your space? Get in touch with our design experts and let's bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-on-scroll">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In *</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select a service</option>
                          <option value="commercial">Commercial Design</option>
                          <option value="industrial">Industrial Design</option>
                          <option value="residential">Residential Design</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2" size={20} />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-on-scroll">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions? We're here to help. Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <info.icon className="text-accent" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a href={info.link} className="text-muted-foreground hover:text-accent transition-colors">
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.details}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <img
                    src="/placeholder.svg?height=256&width=400"
                    alt="Office location map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Visit Our Studio</h3>
                      <p className="text-sm text-foreground/80">Schedule an appointment to see our work</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Quick answers to common questions about our services</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What is your typical project timeline?",
                  answer:
                    "Project timelines vary based on scope, but most residential projects take 8-12 weeks from concept to completion, while commercial projects may take 12-16 weeks.",
                },
                {
                  question: "Do you offer virtual consultations?",
                  answer:
                    "Yes! We offer both in-person and virtual consultations to accommodate your schedule and location preferences.",
                },
                {
                  question: "What is included in your design services?",
                  answer:
                    "Our comprehensive services include space planning, 3D renderings, material selection, furniture sourcing, project management, and installation coordination.",
                },
                {
                  question: "Do you work with existing furniture?",
                  answer:
                    "We can incorporate your existing pieces into the new design or help you select new items that complement your style and budget.",
                },
              ].map((faq, index) => (
                <Card key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
