/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.pequenohome.com',
  generateRobotsTxt: true, // (optional) generates robots.txt alongside sitemap.xml
  sitemapSize: 7000,        // optional, max URLs per sitemap file
  // optional: exclude certain paths
  // exclude: ['/secret-page', '/admin/*'],
  // additionalPaths can be added if you want to manually add extra URLs
};
