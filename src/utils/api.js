import axios from 'axios'

// Get the Strapi API URL and token from environment variables
const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337/api'
const STRAPI_API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN

// Create axios instance with the base URL and auth headers
const api = axios.create({
  baseURL: STRAPI_API_URL,
  headers: STRAPI_API_TOKEN ? {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`
  } : {}
})

// Log the API URL being used (for debugging)
console.log('Using Strapi API URL:', STRAPI_API_URL)

export const fetchPosts = async () => {
  try {
    const response = await api.get('/posts')
    console.log('Posts fetched successfully:', response.data)
    // Extract the data from the nested structure
    return response.data.data || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    // Return mock data if in development and API fails
    if (import.meta.env.DEV) {
      console.log('Using mock data in development mode')
      return getMockPosts()
    }
    return []
  }
}

export const fetchPostById = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`)
    // Extract the data from the nested structure
    return response.data.data || null
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error)
    // Return mock data if in development and API fails
    if (import.meta.env.DEV && id) {
      console.log('Using mock data in development mode')
      const mockPosts = getMockPosts()
      return mockPosts.find(post => post.documentId === id || post.id.toString() === id)
    }
    return null
  }
}

// Mock data for development
const getMockPosts = () => [
  {
    id: 1,
    documentId: "post-1",
    title: "Getting Started with Content Management",
    subtitle: "A beginner's guide to managing your content effectively",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    content: "# Getting Started with Content Management\n\nContent management is essential for any modern website. This guide will help you understand the basics.\n\n## Key Concepts\n\n- Content Types\n- Fields and Validation\n- Media Management\n- Publishing Workflow\n\n> Always organize your content with the end user in mind.",
    createdAt: "2023-11-15"
  },
  {
    id: 2,
    documentId: "post-2",
    title: "Best Practices for Web Design in 2023",
    subtitle: "Learn the latest trends and techniques in web design",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    content: "# Web Design Best Practices\n\nStay ahead of the curve with these modern web design techniques.\n\n## Trending in 2023\n\n- Minimalist interfaces\n- Dark mode options\n- Micro-interactions\n- Accessibility-first design\n\n> Good design is obvious. Great design is transparent.",
    createdAt: "2023-11-10"
  },
  {
    id: 3,
    documentId: "post-3",
    title: "Optimizing Your Website for Performance",
    subtitle: "Tips and tricks to make your website lightning fast",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    content: "# Website Performance Optimization\n\nSpeed matters. Learn how to make your website faster.\n\n## Optimization Techniques\n\n- Image compression\n- Code minification\n- Lazy loading\n- CDN implementation\n\n> A one-second delay in page load time can result in a 7% reduction in conversions.",
    createdAt: "2023-11-05"
  }
]

export default api
