module.exports = {
  siteMetadata: {
    title: `Arsenije Savic`,
    subtitle: `web is my canvas`,
    shortBio: `creative code. interaction. web.`,
    social: [
      { url: 'https://github.com/arsenijesavic', icon: 'github' },
      { url: 'https://twitter.com/_arsenije', icon: 'twitter' },
      { url: 'https://www.instagram.com/arsenijesavic/', icon: 'instagram' },
      { url: 'https://www.behance.net/arsenijesavic', icon: 'behance' },
    ]
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ]

}