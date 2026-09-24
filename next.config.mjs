/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export: the whole site prerenders to `out/` for Cloudflare Pages.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
