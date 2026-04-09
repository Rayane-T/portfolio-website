/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/Projects", destination: "/projects", permanent: true },
      { source: "/Work", destination: "/work", permanent: true },
      { source: "/Resume", destination: "/resume", permanent: true },
      { source: "/Leadership", destination: "/leadership", permanent: true },
      { source: "/BucketList", destination: "/bucketlist", permanent: true },
      { source: "/Blog", destination: "/blog", permanent: true },
      { source: "/Travel", destination: "/travel", permanent: true },
    ];
  },
};

module.exports = nextConfig;
