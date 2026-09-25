/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export: the whole site prerenders to `out/` for Cloudflare Pages.
  output: "export",
  trailingSlash: true,
  images: {
    // Static export has no optimizer; serve local files as-is.
    unoptimized: true,
  },
};

export default nextConfig;
