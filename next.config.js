/** @type {import('next').NextConfig} */
const nextConfig = {}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx']
});
module.exports = nextConfig