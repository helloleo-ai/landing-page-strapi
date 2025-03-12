import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import InfoCardSection from '../components/home/InfoCardSection'
import LatestPostsSection from '../components/home/LatestPostsSection'
import ContactSection from '../components/home/ContactSection'
import { fetchHomePage, getMockHomePage } from '../services/homePageService'

const HomePage = () => {
  const [homePageData, setHomePageData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getHomePageData = async () => {
      try {
        setLoading(true)
        const data = await fetchHomePage()
        
        if (data) {
          setHomePageData(data)
        } else {
          // Use mock data if API call fails
          console.log('Using mock data for HomePage')
          setHomePageData(getMockHomePage())
        }
      } catch (error) {
        console.error('Error in HomePage component:', error)
        // Use mock data if there's an error
        setHomePageData(getMockHomePage())
      } finally {
        setLoading(false)
      }
    }

    getHomePageData()
  }, [])

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  // Extract data from the response
  const pageContent = homePageData?.PageContent || [];
  
  // Find header component
  const header = pageContent.find(item => item.__component === "components.header");
  
  // Find all info card components
  const infoCards = pageContent.filter(item => item.__component === "components.info-card");

  return (
    <div className="overflow-x-hidden">
      <HeroSection header={header} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <InfoCardSection infoCards={infoCards} />
        <LatestPostsSection />
        <ContactSection />
      </motion.div>
    </div>
  )
}

export default HomePage
