"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X } from "lucide-react"

interface ImageUploadProps {
  onUpload?: (files: File[]) => void
  maxFiles?: number
  accept?: string
}

export function ImageUpload({ onUpload, maxFiles = 10, accept = "image/*" }: ImageUploadProps) {
  const [previews, setPreviews] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])

    if (selectedFiles.length + files.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} images`)
      return
    }

    const newFiles = [...files, ...selectedFiles]
    setFiles(newFiles)

    // Create preview URLs
    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file))
    setPreviews([...previews, ...newPreviews])

    if (onUpload) {
      onUpload(newFiles)
    }
  }

  const handleRemove = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index)
    const newPreviews = previews.filter((_, i) => i !== index)

    // Revoke the URL to free memory
    URL.revokeObjectURL(previews[index])

    setFiles(newFiles)
    setPreviews(newPreviews)

    if (onUpload) {
      onUpload(newFiles)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const droppedFiles = Array.from(e.dataTransfer.files)

    if (droppedFiles.length + files.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} images`)
      return
    }

    const imageFiles = droppedFiles.filter((file) => file.type.startsWith("image/"))

    const newFiles = [...files, ...imageFiles]
    setFiles(newFiles)

    const newPreviews = imageFiles.map((file) => URL.createObjectURL(file))
    setPreviews([...previews, ...newPreviews])

    if (onUpload) {
      onUpload(newFiles)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <Card
        className="border-2 border-dashed cursor-pointer hover:border-accent transition-colors"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        <CardContent className="p-8">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <Upload className="text-accent" size={32} />
            </div>
            <div>
              <p className="text-lg font-semibold mb-1">Drop images here or click to upload</p>
              <p className="text-sm text-muted-foreground">Support for JPG, PNG, WebP (Max {maxFiles} files)</p>
            </div>
            <Button type="button" variant="outline">
              Select Files
            </Button>
          </div>
        </CardContent>
      </Card>

      <input ref={fileInputRef} type="file" accept={accept} multiple onChange={handleFileSelect} className="hidden" />

      {/* Preview Grid */}
      {previews.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {previews.map((preview, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
                <img
                  src={preview || "/placeholder.svg"}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
              >
                <X size={16} />
              </button>
              <div className="absolute bottom-2 left-2 right-2 bg-black/50 text-white text-xs p-1 rounded truncate">
                {files[index]?.name}
              </div>
            </div>
          ))}
        </div>
      )}

      {previews.length > 0 && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {previews.length} of {maxFiles} files selected
          </span>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {
              previews.forEach((preview) => URL.revokeObjectURL(preview))
              setPreviews([])
              setFiles([])
              if (onUpload) onUpload([])
            }}
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  )
}
