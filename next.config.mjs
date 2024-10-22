/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "randomuser.me",
            port: "",
            pathname: "/**/*.jpg",
        }],
    },
};

export default nextConfig;
