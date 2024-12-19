/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, 
  assetPrefix: './', 
  distDir: 'Source_DMX', 
};

export default nextConfig;

 