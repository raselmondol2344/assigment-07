/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',


  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        
        port: '',
        pathname: '/api/portraits/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
