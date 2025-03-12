import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Hero image"
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold">Welcome to Our Platform</h1>
          <p className="py-6">
            Discover amazing content and stay updated with the latest news and articles.
            Our platform provides you with the best experience and valuable information.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
