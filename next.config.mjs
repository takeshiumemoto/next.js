/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    images:{
        domains:['images.microcms-assets.io'],
    },
};

export default nextConfig;

module.exports ={
    images:{
        domains: ['example.com','example.org'],
    },
}