"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImageUpload } from "@/components/image-upload"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function UploadPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    tags: "",
  })
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate upload process
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Project uploaded successfully!")
      // Reset form
      setFormData({ title: "", category: "", description: "", tags: "" })
      setUploadedFiles([])
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen pt-20 bg-secondary">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/admin">
              <ArrowLeft className="mr-2" size={16} />
              Back to Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-4xl font-serif font-bold text-foreground">Upload New Project</h1>
            <p className="text-muted-foreground">Add images and details for your portfolio</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Upload */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <ImageUpload onUpload={setUploadedFiles} maxFiles={10} />
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title *</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Modern Office Renovation"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe the project, design approach, and key features..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                      placeholder="modern, minimalist, office (comma separated)"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select category</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="residential">Residential</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <select
                      id="status"
                      name="status"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upload Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Images:</span>
                    <span className="font-medium">{uploadedFiles.length} files</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Size:</span>
                    <span className="font-medium">
                      {(uploadedFiles.reduce((acc, file) => acc + file.size, 0) / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90"
                disabled={isSubmitting || uploadedFiles.length === 0}
              >
                {isSubmitting ? (
                  "Uploading..."
                ) : (
                  <>
                    <Save className="mr-2" size={20} />
                    Publish Project
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
