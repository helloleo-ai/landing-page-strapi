import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import StatsSection from '../components/home/StatsSection'
import LatestPostsSection from '../components/home/LatestPostsSection'
import ContactSection from '../components/home/ContactSection'
import { fetchHomePage, getMockHomePage } from '../services/homePageService'

const HomePage = () => {
  const [homePageData, setHomePageData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadHomePageData = async () => {
      setLoading(true)
      try {
        // Try to fetch data from API
        const data = await fetchHomePage()
        if (data) {
          setHomePageData(data)
        } else {
          // Fall back to mock data if API fails
          setHomePageData(getMockHomePage())
        }
      } catch (error) {
        console.error('Error loading home page data:', error)
        // Fall back to mock data on error
        setHomePageData(getMockHomePage())
      } finally {
        setLoading(false)
      }
    }

    loadHomePageData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  // Extract data from the response
  const pageContent = homePageData?.PageContent || []
  
  // Find header component
  const header = pageContent.find(item => item.__component === "components.header")
  
  // Find all info card components
  const infoCards = pageContent.filter(item => item.__component === "components.info-card")
  
  // Extract testimonials and stats from page content if they exist
  const testimonials = pageContent.filter(item => item.__component === "components.testimonial")
  const stats = pageContent.filter(item => item.__component === "components.stat")

  return (
    <div className="overflow-x-hidden">
      <HeroSection header={header} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FeaturesSection />
        <StatsSection stats={stats} />
        <TestimonialsSection testimonials={testimonials} />
        <LatestPostsSection />
        <ContactSection />
      </motion.div>
    </div>
  )
}

export default HomePage
