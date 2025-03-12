import { motion } from 'framer-motion';

const TestimonialsSection = ({ testimonials = [] }) => {
  // If no testimonials are provided, use default ones
  const displayTestimonials = testimonials.length > 0 ? testimonials : [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "This platform has transformed how we manage our content. The interface is intuitive and the features are exactly what we needed.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      content: "I've tried many content management systems, but this one stands out for its flexibility and ease of use. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Content Creator",
      content: "The workflow is seamless and publishing content has never been easier. This platform has saved me countless hours of work.",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people are saying about our platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <div className="flex items-center mb-4">
                  {testimonial.avatar && (
                    <div className="avatar mr-4">
                      <div className="w-12 h-12 rounded-full">
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      </div>
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm opacity-70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
