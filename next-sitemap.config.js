/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.pequenohome.com',
  generateRobotsTxt: true, // (optional) generates robots.txt alongside sitemap.xml
  sitemapSize: 7000,        // optional, max URLs per sitemap file
  exclude: [
    '/recent', '/resources', '/our-system', '/free-3d-mockup',
    '/prefab-homes-south-africa', '/modular-homes-south-africa',
    '/prefab-home-prices-south-africa', '/modular-homes-prices-south-africa',
    '/off-grid-homes-south-africa', '/luxury-cabins-south-africa',
    '/articles/modular-architecture', '/enquire', '/portal', '/portal/*',
    '/apple-icon.png', '/icon.png', '/opengraph-image.jpg', '/twitter-image.jpg',
  ],
  // optional: exclude certain paths
  // exclude: ['/secret-page', '/admin/*'],
  // additionalPaths can be added if you want to manually add extra URLs
};
