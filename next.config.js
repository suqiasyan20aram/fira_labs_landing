/** @type {import('next').NextConfig} */
const path = require('path')
const withVideos = require('next-videos')

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    images: {
        unoptimized: true
    }
}

module.exports = withVideos(nextConfig)
