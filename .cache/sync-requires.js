const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/Devin/Documents/GitHub/devsquared_blog/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-blog-tsx": hot(preferDefault(require("/Users/Devin/Documents/GitHub/devsquared_blog/src/templates/Blog.tsx"))),
  "component---src-templates-all-category-tsx": hot(preferDefault(require("/Users/Devin/Documents/GitHub/devsquared_blog/src/templates/AllCategory.tsx"))),
  "component---src-templates-category-tsx": hot(preferDefault(require("/Users/Devin/Documents/GitHub/devsquared_blog/src/templates/Category.tsx"))),
  "component---src-templates-all-tag-tsx": hot(preferDefault(require("/Users/Devin/Documents/GitHub/devsquared_blog/src/templates/AllTag.tsx"))),
  "component---src-templates-tag-tsx": hot(preferDefault(require("/Users/Devin/Documents/GitHub/devsquared_blog/src/templates/Tag.tsx"))),
  "component---src-templates-post-tsx": hot(preferDefault(require("/Users/Devin/Documents/GitHub/devsquared_blog/src/templates/Post.tsx"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/Devin/Documents/GitHub/devsquared_blog/src/pages/404.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/Devin/Documents/GitHub/devsquared_blog/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/Devin/Documents/GitHub/devsquared_blog/src/pages/index.tsx")))
}

