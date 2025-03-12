import axios from 'axios';

// Create API instance with base URL and headers
const api = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`
  }
});

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
    attributes: {
      Header: {
        title: "Welcome to Our Platform",
        subtitle: "Discover amazing content and stay updated with the latest news and articles. Our platform provides you with the best experience and valuable information."
      },
      InfoCard: [
        {
          title: "Responsive Design",
          image: {
            data: {
              attributes: {
                url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            }
          },
          description: "Our platform works seamlessly on all devices, from mobile to desktop.",
          button: {
            title: "Learn More",
            link: "#features"
          }
        },
        {
          title: "Content Management",
          image: {
            data: {
              attributes: {
                url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            }
          },
          description: "Easily manage your content with our powerful CMS integration.",
          button: {
            title: "Explore",
            link: "#content"
          }
        },
        {
          title: "Fast Performance",
          image: {
            data: {
              attributes: {
                url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            }
          },
          description: "Optimized for speed to provide the best user experience possible.",
          button: {
            title: "Get Started",
            link: "#performance"
          }
        }
      ]
    }
  };
};
