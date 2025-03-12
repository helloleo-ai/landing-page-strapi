import axios from 'axios'

// Get the Strapi API URL from environment variables
const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337/api'

const api = axios.create({
  baseURL: STRAPI_API_URL,
})

export const fetchPosts = async () => {
  try {
    const response = await api.get('/posts?populate=*')
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
