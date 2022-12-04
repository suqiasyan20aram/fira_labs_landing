/** @type {import('next').NextConfig} */
const path = require('path')
const withVideos = require('next-videos')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
}

module.exports = withVideos(nextConfig)
