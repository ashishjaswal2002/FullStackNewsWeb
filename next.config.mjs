/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],

  },

  experimental: {
    images: {
      allowFutureImage: true
    }
  },


};

export default nextConfig;
