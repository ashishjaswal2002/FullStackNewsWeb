/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    
    domains: ['images.unsplash.com', 'plus.unsplash.com','cdn.dribbble.com'],
    path: '/_next/image',

  },

  experimental: {
    images: {
      allowFutureImage: true
    }
  },


};

export default nextConfig;
