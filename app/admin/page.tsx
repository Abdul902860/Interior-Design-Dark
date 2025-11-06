"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutDashboard, ImageIcon, FileText, Building2, Factory, Home, Plus, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Modern Office Space",
      category: "commercial",
      image: "/placeholder.svg?key=6ntoi",
      status: "published",
    },
    {
      id: 2,
      title: "Manufacturing Facility",
      category: "industrial",
      image: "/placeholder.svg?key=50zun",
      status: "published",
    },
    {
      id: 3,
      title: "Modern Living Room",
      category: "residential",
      image: "/placeholder.svg?key=2vc2m",
      status: "draft",
    },
  ])

  const stats = [
    { label: "Total Projects", value: "24", icon: LayoutDashboard, color: "text-blue-600" },
    { label: "Commercial", value: "8", icon: Building2, color: "text-green-600" },
    { label: "Industrial", value: "6", icon: Factory, color: "text-orange-600" },
    { label: "Residential", value: "10", icon: Home, color: "text-purple-600" },
  ]

  return (
    <div className="min-h-screen pt-20 bg-secondary">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your interior design portfolio and content</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-3 bg-secondary rounded-full ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: "Published", item: "Modern Office Space", time: "2 hours ago" },
                      { action: "Updated", item: "Residential Page Content", time: "5 hours ago" },
                      { action: "Added", item: "New Industrial Project", time: "1 day ago" },
                      { action: "Edited", item: "Contact Page", time: "2 days ago" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                        <div>
                          <p className="font-medium">
                            {activity.action} {activity.item}
                          </p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                      <Link href="/admin/upload">
                        <Plus className="mr-2" size={20} />
                        Add New Project
                      </Link>
                    </Button>
                    <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                      <Link href="/admin/upload">
                        <ImageIcon className="mr-2" size={20} />
                        Upload Images
                      </Link>
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <FileText className="mr-2" size={20} />
                      Edit Page Content
                    </Button>
                    <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                      <Link href="/">
                        <Eye className="mr-2" size={20} />
                        Preview Website
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Manage Projects</CardTitle>
                <Button className="bg-accent hover:bg-accent/90">
                  <Plus className="mr-2" size={20} />
                  Add Project
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center gap-4 p-4 border rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{project.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-muted-foreground capitalize">{project.category}</span>
                          <span className="text-sm">•</span>
                          <span
                            className={`text-sm ${project.status === "published" ? "text-green-600" : "text-orange-600"}`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit size={16} />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye size={16} />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Page Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["Homepage", "Commercial Page", "Industrial Page", "Residential Page", "Contact Page"].map(
                      (page) => (
                        <div
                          key={page}
                          className="flex items-center justify-between p-3 border rounded hover:bg-secondary/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <FileText size={20} className="text-muted-foreground" />
                            <span className="font-medium">{page}</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <Edit size={16} />
                          </Button>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Media Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="aspect-square bg-secondary rounded overflow-hidden relative group cursor-pointer"
                        >
                          <img
                            src={`/generic-placeholder-graphic.png?key=${i}`}
                            alt={`Media ${i}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Eye className="text-white" size={24} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-transparent" variant="outline">
                      <Plus className="mr-2" size={20} />
                      Upload New Images
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
