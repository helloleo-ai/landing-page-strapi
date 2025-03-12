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
    const response = await api.get('/posts?populate=*')
    console.log('Posts fetched successfully:', response.data)
    return response.data.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export const fetchPostById = async (id) => {
  try {
    const response = await api.get(`/posts/${id}?populate=*`)
    return response.data.data
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error)
    return null
  }
}

export default api
