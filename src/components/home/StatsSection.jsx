import { motion } from 'framer-motion';

const StatsSection = ({ stats = [] }) => {
  // If no stats are provided, use default ones
  const displayStats = stats.length > 0 ? stats : [
    {
      id: 1,
      value: "10K+",
      label: "Active Users",
      icon: "👥"
    },
    {
      id: 2,
      value: "50M+",
      label: "Content Views",
      icon: "👁️"
    },
    {
      id: 3,
      value: "99%",
      label: "Customer Satisfaction",
      icon: "⭐"
    },
    {
      id: 4,
      value: "24/7",
      label: "Support Available",
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-lg max-w-2xl mx-auto">
            We're proud of what we've accomplished together with our users.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displayStats.map((stat, index) => (
            <motion.div
              key={stat.id || index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-base-100 shadow-xl"
            >
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <p className="text-sm opacity-70">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
