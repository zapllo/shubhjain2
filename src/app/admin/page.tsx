'use client'

import { useState, useEffect } from 'react'
import { IContent, ITestimonial } from '@/lib/models/Content'
import { 
  Save, 
  LogOut, 
  Loader2, 
  Plus, 
  Trash2, 
  Eye, 
  Calendar,
  Clock,
  MapPin,
  Globe,
  Video,
  DollarSign,
  Users,
  AlertCircle,
  CheckCircle,
  IndianRupee
} from 'lucide-react'

interface LoginForm {
  email: string
  password: string
}

interface AdminUser {
  id: string
  email: string
  name: string
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: '', password: '' })
  const [content, setContent] = useState<IContent | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [saving, setSaving] = useState<boolean>(false)
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const [activeTab, setActiveTab] = useState<'pricing' | 'event' | 'videos' | 'testimonials'>('pricing')

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (token) {
      setIsLoggedIn(true)
      fetchContent()
    } else {
      setLoading(false)
    }
  }, [])

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message })
    setTimeout(() => setNotification(null), 3000)
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      })

      if (response.ok) {
        const data: { token: string; admin: AdminUser } = await response.json()
        localStorage.setItem('adminToken', data.token)
        setIsLoggedIn(true)
        fetchContent()
        showNotification('success', 'Login successful!')
      } else {
        const errorData = await response.json()
        showNotification('error', errorData.error || 'Invalid credentials')
      }
    } catch (error) {
      console.error('Login error:', error)
      showNotification('error', 'Login failed')
    }
  }

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content')
      if (response.ok) {
        const data: IContent = await response.json()
        setContent(data)
      }
    } catch (error) {
      console.error('Fetch content error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!content) return
    
    setSaving(true)
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(content)
      })

      if (response.ok) {
        showNotification('success', 'Content updated successfully!')
      } else {
        const errorData = await response.json()
        showNotification('error', errorData.error || 'Failed to update content')
      }
    } catch (error) {
      console.error('Save error:', error)
      showNotification('error', 'Failed to save changes')
    } finally {
      setSaving(false)
    }
  }

  const updateContent = <K extends keyof IContent>(field: K, value: IContent[K]) => {
    if (!content) return
    setContent({ ...content, [field]: value })
  }

  const updateTestimonial = <K extends keyof ITestimonial>(index: number, field: K, value: ITestimonial[K]) => {
    if (!content) return
    const newTestimonials = [...content.testimonials]
    newTestimonials[index] = { ...newTestimonials[index], [field]: value }
    setContent({ ...content, testimonials: newTestimonials })
  }

  const addTestimonial = () => {
    if (!content) return
    const newTestimonial: ITestimonial = {
      id: Date.now().toString(),
      name: '',
      quote: '',
      thumbnail: '',
      videoUrl: ''
    }
    setContent({ ...content, testimonials: [...content.testimonials, newTestimonial] })
  }

  const removeTestimonial = (index: number) => {
    if (!content) return
    const newTestimonials = content.testimonials.filter((_, i) => i !== index)
    setContent({ ...content, testimonials: newTestimonials })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
          <p className="text-gray-600 font-medium">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Launch at Scale</h1>
              <p className="text-gray-600">Admin Dashboard Login</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="admin@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Sign In to Dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
          <p className="text-gray-600 font-medium">Loading content...</p>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'pricing', label: 'Pricing & Links', icon: IndianRupee },
    { id: 'event', label: 'Event Details', icon: Calendar },
    { id: 'videos', label: 'Hero Video', icon: Video },
    { id: 'testimonials', label: 'Testimonials', icon: Users }
  ] as const

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 flex items-center space-x-2 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ${
          notification.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {notification.type === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="font-medium">{notification.message}</span>
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Launch at Scale
              </h1>
              <p className="text-gray-600 mt-1">Content Management Dashboard</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleSave}
                disabled={saving}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
              >
                {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                <span>{saving ? 'Saving...' : 'Save Changes'}</span>
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem('adminToken')
                  setIsLoggedIn(false)
                }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-red-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 transform hover:scale-[1.02]"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {activeTab === 'pricing' && (
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <IndianRupee className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Pricing & Enrollment</h2>
                  <p className="text-gray-600">Manage pricing and enrollment settings</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Current Price
                    </label>
                    <input
                      type="text"
                      value={content.price}
                      onChange={(e) => updateContent('price', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="₹99"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Original Price (Strikethrough)
                    </label>
                    <input
                      type="text"
                      value={content.originalPrice}
                      onChange={(e) => updateContent('originalPrice', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="₹999"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Enrollment Link
                    </label>
                    <input
                      type="url"
                      value={content.enrollLink}
                      onChange={(e) => updateContent('enrollLink', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://..."
                    />
                  </div>
                  {/* <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Event Deadline
                    </label>
                    <input
                      type="datetime-local"
                      value={content.eventDeadline ? new Date(content.eventDeadline).toISOString().slice(0, 16) : ''}
                      onChange={(e) => updateContent('eventDeadline', new Date(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'event' && (
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Event Details</h2>
                  <p className="text-gray-600">Configure event information</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>Event Date</span>
                    </label>
                    <input
                      type="text"
                      value={content.eventDate}
                      onChange={(e) => updateContent('eventDate', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="29th – 31st Aug"
                    />
                  </div>
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>Event Time</span>
                    </label>
                    <input
                      type="text"
                      value={content.eventTime}
                      onChange={(e) => updateContent('eventTime', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="7 PM – 9 PM"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>Location</span>
                    </label>
                    <input
                      type="text"
                      value={content.eventLocation}
                      onChange={(e) => updateContent('eventLocation', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Zoom"
                    />
                  </div>
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3">
                      <Globe className="w-4 h-4" />
                      <span>Language</span>
                    </label>
                    <input
                      type="text"
                      value={content.eventLanguage}
                      onChange={(e) => updateContent('eventLanguage', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="English"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Video className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Hero Video</h2>
                  <p className="text-gray-600">Manage main promotional video</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Video URL
                    </label>
                    <input
                      type="url"
                      value={content.heroVideoUrl}
                      onChange={(e) => updateContent('heroVideoUrl', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://example.com/video.mp4"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Video Poster URL
                    </label>
                    <input
                      type="url"
                      value={content.heroVideoPoster}
                      onChange={(e) => updateContent('heroVideoPoster', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://example.com/poster.jpg"
                    />
                  </div>
                </div>
                
                {/* Video Preview */}
                {content.heroVideoUrl && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Preview</h3>
                    <div className="aspect-video bg-black rounded-lg overflow-hidden">
                      <video
                        src={content.heroVideoUrl}
                        poster={content.heroVideoPoster}
                        controls
                        className="w-full h-full object-cover"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Testimonials</h2>
                    <p className="text-gray-600">Manage customer testimonial videos</p>
                  </div>
                </div>
                <button
                  onClick={addTestimonial}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Testimonial</span>
                </button>
              </div>
              
              <div className="space-y-6">
                {content.testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Testimonial {index + 1}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {testimonial.videoUrl && (
                          <button
                            onClick={() => window.open(testimonial.videoUrl, '_blank')}
                            className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
                          >
                            <Eye className="w-4 h-4" />
                            <span>Preview</span>
                          </button>
                        )}
                        {content.testimonials.length > 1 && (
                          <button
                            onClick={() => removeTestimonial(index)}
                            className="inline-flex items-center space-x-1 text-sm text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Remove</span>
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Customer Name
                        </label>
                        <input
                          type="text"
                          value={testimonial.name}
                          onChange={(e) => updateTestimonial(index, 'name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Quote
                        </label>
                        <input
                          type="text"
                          value={testimonial.quote}
                          onChange={(e) => updateTestimonial(index, 'quote', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder='"This changed my life!"'
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Thumbnail URL
                        </label>
                        <input
                          type="url"
                          value={testimonial.thumbnail}
                          onChange={(e) => updateTestimonial(index, 'thumbnail', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="https://example.com/thumbnail.jpg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Video URL
                        </label>
                        <input
                          type="url"
                          value={testimonial.videoUrl}
                          onChange={(e) => updateTestimonial(index, 'videoUrl', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="https://example.com/video.mp4"
                        />
                      </div>
                    </div>
                    
                    {/* Thumbnail Preview */}
                    {testimonial.thumbnail && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Preview</p>
                        <img
                          src={testimonial.thumbnail}
                          alt={testimonial.name}
                          className="w-32 h-20 object-cover rounded-lg border border-gray-200"
                          onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMTI4IDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iODAiIGZpbGw9IiNGM0Y0RjYiLz48L3N2Zz4='
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}