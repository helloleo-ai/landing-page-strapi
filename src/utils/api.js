import axios from 'axios'

// This will be replaced with the actual STRAPI_URL from project settings
const STRAPI_URL = process.env.STRAPI_URL || 'https://your-strapi-url.com'

const api = axios.create({
  baseURL: `${STRAPI_URL}/api`,
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
