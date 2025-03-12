import { motion } from 'framer-motion'

const HeroSection = ({ header }) => {
  // Default values if header is not provided
  const title = header?.title || "Welcome to Our Platform";
  const subtitle = header?.subtitle || "Discover amazing content and stay updated with the latest news and articles. Our platform provides you with the best experience and valuable information.";

  return (
    <div className="hero min-h-[70vh] bg-base-200 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            className="w-full max-w-md rounded-lg shadow-2xl object-cover"
            alt="Hero image"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{title}</h1>
          <p className="py-6 text-base md:text-lg">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
