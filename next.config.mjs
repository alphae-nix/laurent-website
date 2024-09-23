/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'seekvectorlogo.com',
                port: '',
                pathname: '/wp-content/uploads/2019/08/intact-insurance-vector-logo.png',
            },
        ],
    },
};

export default nextConfig;
