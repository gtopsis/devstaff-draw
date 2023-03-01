/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false
  },
  compiler: {
    // see https://nextjs.org/docs/advanced-features/compiler#styled-components for more info.
    styledComponents: true
  },
};

module.exports = nextConfig;
