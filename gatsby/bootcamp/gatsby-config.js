module.exports = {
  siteMetadata: {
    title: "jordanmmck",
    author: "Jordan McKinney",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "src", path: `${__dirname}/src/` },
    },
    "gatsby-transformer-remark",
  ],
}
