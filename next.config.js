/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePath: [path.join(__dirname), 'styles'],
    prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss";`,
  }
}

module.exports = nextConfig
