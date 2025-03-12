import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fetchPosts } from '../../utils/api'

// Fallback mock data in case API fails
const mockPosts = [
  {
    id: 1,
    documentId: "hs8nr03xf0x6ghx8f4dxj7fs",
    title: "Getting Started with Content Management",
    subtitle: "A beginner's guide to managing your content effectively",
    thumbnail: {
      id: 1,
      documentId: "kjfic1zqkczbfvgpgv3klty7",
      name: "thumbnail1.png",
      url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    content: "This is sample content for the first post.",
    createdAt: "2023-11-15"
  },
  {
    id: 2,
    documentId: "hs8nr03xf0x6ghx8f4dxj7ft",
    title: "Best Practices for Web Design in 2023",
    subtitle: "Learn the latest trends and techniques in web design",
    thumbnail: {
      id: 2,
      documentId: "kjfic1zqkczbfvgpgv3klty8",
      name: "thumbnail2.png",
      url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    content: "This is sample content for the second post.",
    createdAt: "2023-11-10"
  },
  {
    id: 3,
    documentId: "hs8nr03xf0x6ghx8f4dxj7fu",
    title: "Optimizing Your Website for Performance",
    subtitle: "Tips and tricks to make your website lightning fast",
    thumbnail: {
      id: 3,
      documentId: "kjfic1zqkczbfvgpgv3klty9",
      name: "thumbnail3.png",
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    content: "This is sample content for the third post.",
    createdAt: "2023-11-05"
  }
]

const LatestPostsSection = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true)
        const fetchedPosts = await fetchPosts()
        if (fetchedPosts && fetchedPosts.length > 0) {
          setPosts(fetchedPosts)
        } else {
          // Fallback to mock data if no posts returned
          setPosts(mockPosts)
        }
      } catch (err) {
        console.error('Error loading posts:', err)
        setError(true)
        setPosts(mockPosts)
      } finally {
        setLoading(false)
      }
    }
    
    loadPosts()
  }, [])
  
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="max-w-2xl mx-auto text-base-content/70">
            Stay updated with our latest articles and insights. We regularly publish content to keep you informed.
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
                <p className="text-sm text-base-content/70">{post.subtitle || 'No description available'}</p>
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
        
        <div className="text-center mt-10">
          <Link to="/blog" className="btn btn-outline btn-wide">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestPostsSection
