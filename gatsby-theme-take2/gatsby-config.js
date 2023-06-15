const path = require("path");

module.exports = ({ contentPath = `${__dirname}/data/`, basePath = "/" }) => ({
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
        extensions: ["tsx"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
});
