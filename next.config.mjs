/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ochi.design"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            }

        ]
    }
};

export default nextConfig;
