require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

const config = require('./config/SiteConfig').default;
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
const targetAddress = new URL(process.env.TARGET_ADDRESS || `http://devsquared.space.local`);

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-manifest',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-lodash',
   // `gatsby-plugin-s3`,
   // `gatsby-plugin-canonical-urls`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'post',
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: config.Google_Tag_Manager_ID,
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    // {
    //   resolve: `gatsby-plugin-s3`,
    //   options: {
    //       bucketName: process.env.TARGET_BUCKET_NAME || "fake-bucket",
    //       region: process.env.AWS_REGION,
    //       protocol: targetAddress.protocol.slice(0, -1),
    //       hostname: targetAddress.hostname,
    //       acl: null,
    //       params: {
    //           // In case you want to add any custom content types: https://github.com/jariz/gatsby-plugin-s3/blob/master/recipes/custom-content-type.md
    //       },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //       siteUrl: targetAddress.href.slice(0, -1),
    //   },
    // }
  ]
};
