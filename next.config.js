/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
                port: "",
                pathname: "/**",
            }
        ]
    }
}

const withMDX = require("@next/mdx")({});

module.exports = withMDX(nextConfig);