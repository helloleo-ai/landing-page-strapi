import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your message! We will get back to you soon.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null)
      }, 5000)
    }, 1500)
  }
  
  return (
    <section id="contact" className="py-12 md:py-16 bg-base-100 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-base-content/70 text-sm md:text-base">
            Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="w-full max-w-2xl mx-auto">
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="card bg-base-200 shadow-xl p-6"
          >
            {submitMessage && (
              <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-error'} mb-6`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{submitMessage.text}</span>
              </div>
            )}
            
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name" 
                className="input input-bordered" 
                required 
              />
            </div>
            
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email" 
                className="input input-bordered" 
                required 
              />
            </div>
            
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered h-32" 
                placeholder="Your message"
                required
              ></textarea>
            </div>
            
            <div className="form-control">
              <button 
                type="submit" 
                className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
