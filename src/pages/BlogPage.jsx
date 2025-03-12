import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fetchPosts } from '../utils/api'

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true)
        const fetchedPosts = await fetchPosts()
        console.log("Fetched posts in component:", fetchedPosts)
        setPosts(fetchedPosts)
      } catch (err) {
        console.error('Error loading posts:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    
    loadPosts()
  }, [])
  
  if (loading) {
    return (
      <div className="container mx-auto py-16 text-center">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="mt-4">Loading posts...</p>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="container mx-auto py-16 text-center">
        <div className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Failed to load posts. Please try again later.</span>
        </div>
      </div>
    )
  }
  
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="max-w-2xl mx-auto text-base-content/70">
          Discover insights, stories, and knowledge from our team.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img 
                src={post.thumbnail?.url || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} 
                alt={post.title || 'Blog post'} 
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{post.title || 'Untitled Post'}</h3>
              <p className="text-sm text-base-content/70">
                {post.subtitle || 'No description available'}
              </p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-base-content/60">
                  {new Date(post.createdAt || new Date()).toLocaleDateString()}
                </span>
                <Link to={`/blog/${post.id}`} className="btn btn-primary btn-sm">
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl">No posts found.</p>
          <p className="mt-4">Check back later for new content!</p>
        </div>
      )}
    </div>
  )
}

export default BlogPage
