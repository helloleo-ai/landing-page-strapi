import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { fetchPostById } from '../utils/api'

const BlogPostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true)
        const fetchedPost = await fetchPostById(id)
        setPost(fetchedPost)
      } catch (err) {
        console.error('Error loading post:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    
    loadPost()
  }, [id])
  
  if (loading) {
    return (
      <div className="container mx-auto py-16 text-center">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="mt-4">Loading post...</p>
      </div>
    )
  }
  
  if (error || !post) {
    return (
      <div className="container mx-auto py-16">
        <div className="alert alert-error max-w-3xl mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Failed to load post. Please try again later.</span>
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-24 px-4 mt-8"
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="btn btn-ghost mb-8">
          ← Back to Blog
        </Link>
        
        {post.thumbnail && (
          <img 
            src={post.thumbnail.url || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'} 
            alt={post.title} 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-lg mb-8"
          />
        )}
        
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-base-content/70 mb-2">{post.subtitle}</p>
        <div className="divider my-8"></div>
        
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content || 'No content available'}</ReactMarkdown>
        </div>
        
        <div className="mt-12 flex justify-between items-center">
          <span className="text-base-content/60">
            Published on {new Date(post.createdAt).toLocaleDateString()}
          </span>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogPostPage
