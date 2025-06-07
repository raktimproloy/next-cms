/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const path = require('path');
// const nodeExternals = require('webpack-node-externals');
const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL.split("/")
const allDomain = process.env.NEXT_PUBLIC_IMAGE_DOMAIN.split(",").map(domain => domain.trim());
const nextConfig = {
  images: {
    domains: [storageUrl[2], ...allDomain, "cloud.appwrite.io", "cloud.appwrite.ioundefined"],
  },
  // reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // if (!isServer) {
      //     config.externals = [nodeExternals()];
      //   }
      config.plugins.push(
        new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
    }));
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  // experimental: {
  //   serverActions: true,
  // },
}

module.exports = nextConfig
