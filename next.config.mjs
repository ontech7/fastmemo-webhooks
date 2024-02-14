/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/",
      destination: "/shared",
      permanent: true,
    },
  ],
};

export default nextConfig;
