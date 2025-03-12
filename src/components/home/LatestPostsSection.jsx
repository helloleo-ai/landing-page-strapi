import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// This will be replaced with actual Strapi data later
const mockPosts = [
  {
    id: 1,
    title: "Getting Started with Content Management",
    subtitle: "A beginner's guide to managing your content effectively",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    createdAt: "2023-11-15"
  },
  {
    id: 2,
    title: "Best Practices for Web Design in 2023",
    subtitle: "Learn the latest trends and techniques in web design",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    createdAt: "2023-11-10"
  },
  {
    id: 3,
    title: "Optimizing Your Website for Performance",
    subtitle: "Tips and tricks to make your website lightning fast",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    createdAt: "2023-11-05"
  }
]

const LatestPostsSection = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    // This will be replaced with a fetch from Strapi API
    setPosts(mockPosts)
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
                  src={post.thumbnail} 
                  alt={post.title} 
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p className="text-sm text-base-content/70">{post.subtitle}</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-sm text-base-content/60">
                    {new Date(post.createdAt).toLocaleDateString()}
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
