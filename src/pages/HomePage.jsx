import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import LatestPostsSection from '../components/home/LatestPostsSection'
import ContactSection from '../components/home/ContactSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FeaturesSection />
        <LatestPostsSection />
        <ContactSection />
      </motion.div>
    </div>
  )
}

export default HomePage
