const pages = [
  {
    output: './index.html',
    content: {
      title: 'Home',
      description: 'Home Page'
    },
    template: './src/pages/home.hbs',
    chunks: ['home']
  },
  {
    output: './about.html',
    content: {
      title: 'About',
      description: 'About Page'
    },
    template: './src/pages/about.hbs',
    chunks: ['about']
  }
]

module.exports = pages
