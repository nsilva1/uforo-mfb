
import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

interface JobPosting {
  id: string
  title: string
  department: string
  location: string
  salary: string
}

interface JobApplicationFormProps {
  job: JobPosting
  onClose: () => void
}

interface FormData {
  fullName: string
  email: string
  phone: string
  resume: File | null
  coverLetter: string
  linkedinUrl: string
  portfolioUrl: string
}

export const JobApplicationForm = ({ job, onClose }: JobApplicationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    linkedinUrl: '',
    portfolioUrl: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log('Application submitted:', {
        jobId: job.id,
        jobTitle: job.title,
        applicant: formData
      })
      setIsSubmitting(false)
      setSubmitted(true)

      // Close modal after 3 seconds
      setTimeout(() => {
        onClose()
        setSubmitted(false)
      }, 3000)
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-2">Application Submitted!</h3>
        <p className="text-foreground/70 mb-2">Thank you for your interest in the {job.title} position.</p>
        <p className="text-sm text-foreground/60">
          We'll review your application and get back to you within 5-7 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-background text-foreground"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-background text-foreground"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-background text-foreground"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Resume (PDF/DOC) *</label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-background text-foreground text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-secondary-foreground hover:file:bg-secondary/90"
            />
          </div>
          {formData.resume && (
            <p className="text-sm text-secondary mt-2">✓ {formData.resume.name}</p>
          )}
        </div>

        {/* LinkedIn URL */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">LinkedIn Profile</label>
          <input
            type="url"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-background text-foreground"
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>

        {/* Portfolio URL */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Portfolio URL</label>
          <input
            type="url"
            name="portfolioUrl"
            value={formData.portfolioUrl}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-background text-foreground"
            placeholder="https://example.com"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Cover Letter *</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-background text-foreground resize-none"
            placeholder="Tell us why you're interested in this position and what makes you a great fit..."
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex gap-3 mt-8">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="flex-1 bg-transparent"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      </div>

      <p className="text-xs text-foreground/50 mt-4">
        By submitting this form, you agree to our Privacy Policy and consent to be contacted regarding your application.
      </p>
    </form>
  )
}
