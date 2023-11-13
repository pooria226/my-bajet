/** @type {import('next').NextConfig} */

var webpack = require("webpack");

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "localhost:3000",
      "logo.samandehi.ir",
      "trustseal.enamad.ir",
      "set-pay.ir",
    ],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/ctms/api/shop/landing/shop-list",
        destination:
          "https://devapi.mybajet.ir/ctms/api/shop/landing/shop-list",
      },
      {
        source: "/ctms/api/shop/landing/category-list",
        destination:
          "https://devapi.mybajet.ir/ctms/api/shop/landing/category-list",
      },
    ];
  },
};

module.exports = nextConfig;
