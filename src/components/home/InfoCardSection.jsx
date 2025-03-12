import { motion } from 'framer-motion'

const InfoCardSection = ({ infoCards = [] }) => {
  // If no info cards are provided, return null
  if (!infoCards || infoCards.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 bg-base-100 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-base-200 shadow-xl overflow-hidden"
            >
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p>{card.description}</p>
                <div className="card-actions justify-end mt-4">
                  <a 
                    href="#learn-more" 
                    className="btn btn-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InfoCardSection
