var plugins = [{
      plugin: require('/Users/Devin/Documents/GitHub/devsquared_blog/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Devin/Documents/GitHub/devsquared_blog/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Devin/Documents/GitHub/devsquared_blog/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Devin/Documents/GitHub/devsquared_blog/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Devin/Documents/GitHub/devsquared_blog/node_modules/gatsby-plugin-google-tagmanager/gatsby-ssr'),
      options: {"plugins":[],"id":"GTM-NK7BMN2","includeInDevelopment":false},
    },{
      plugin: require('/Users/Devin/Documents/GitHub/devsquared_blog/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Devin/Documents/GitHub/devsquared_blog/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography.ts"},
    },{
      plugin: require('/Users/Devin/Documents/GitHub/devsquared_blog/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Devin Ward | Software Developer","short_name":"Thoughts and Blogs from Devin Ward","description":"Landing Page and Blog Site for Devin Ward","start_url":"/","background_color":"#2b2e3c","theme_color":"#3498DB","display":"standalone","icon":"src/favicon.png"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
