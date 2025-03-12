import api from '../utils/api';

// Fetch HomePage data from Strapi
export const fetchHomePage = async () => {
  try {
    const response = await api.get('/home-page?populate=deep');
    console.log('HomePage fetched successfully:', response.data);
    return response.data.data || null;
  } catch (error) {
    console.error('Error fetching HomePage:', error);
    return null;
  }
};

// Mock data for HomePage if API call fails
export const getMockHomePage = () => {
  return {
    PageContent: [
      {
        __component: "components.header",
        id: 1,
        title: "Welcome to Our Platform",
        subtitle: "Discover amazing content and stay updated with the latest news and articles. Our platform provides you with the best experience and valuable information."
      },
      {
        __component: "components.info-card",
        id: 2,
        title: "Responsive Design",
        description: "Our platform works seamlessly on all devices, from mobile to desktop."
      },
      {
        __component: "components.info-card",
        id: 3,
        title: "Content Management",
        description: "Easily manage your content with our powerful CMS integration."
      },
      {
        __component: "components.info-card",
        id: 4,
        title: "Fast Performance",
        description: "Optimized for speed to provide the best user experience possible."
      },
      {
        __component: "components.stat",
        id: 5,
        value: "10K+",
        label: "Active Users",
        icon: "👥"
      },
      {
        __component: "components.stat",
        id: 6,
        value: "50M+",
        label: "Content Views",
        icon: "👁️"
      },
      {
        __component: "components.stat",
        id: 7,
        value: "99%",
        label: "Customer Satisfaction",
        icon: "⭐"
      },
      {
        __component: "components.stat",
        id: 8,
        value: "24/7",
        label: "Support Available",
        icon: "🛠️"
      },
      {
        __component: "components.testimonial",
        id: 9,
        name: "Sarah Johnson",
        role: "Marketing Director",
        content: "This platform has transformed how we manage our content. The interface is intuitive and the features are exactly what we needed.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      {
        __component: "components.testimonial",
        id: 10,
        name: "Michael Chen",
        role: "Product Manager",
        content: "I've tried many content management systems, but this one stands out for its flexibility and ease of use. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      {
        __component: "components.testimonial",
        id: 11,
        name: "Emily Rodriguez",
        role: "Content Creator",
        content: "The workflow is seamless and publishing content has never been easier. This platform has saved me countless hours of work.",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      }
    ],
    id: 1,
    documentId: "homepage-1",
    createdAt: "2025-03-12T15:24:01.220Z",
    updatedAt: "2025-03-12T15:29:31.739Z",
    publishedAt: "2025-03-12T15:29:31.747Z"
  };
};
