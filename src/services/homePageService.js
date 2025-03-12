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
      }
    ],
    id: 1,
    documentId: "homepage-1",
    createdAt: "2025-03-12T15:24:01.220Z",
    updatedAt: "2025-03-12T15:29:31.739Z",
    publishedAt: "2025-03-12T15:29:31.747Z"
  };
};
