module.exports = {
  base: 'docs/.vitepress/dist',
  title: '22mm 筆記',
  description: '內化武功',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/document.svg' }]
  ],

  themeConfig: {
    repo: 'https://github.com/hazelwu2/22mm-vitepress',
    lastUpdated: true,

    algolia: {
      appId: process.env.ALOGOLIA_APP_ID,
      apiKey: process.env.ALOGOLIA_API_KEY,
      indexName: '22mm'
    },

    logo: '/document.svg',

    sidebar: [
      {
        text: 'Hack',
        link: '/Hack/autofill'
      },
      {
        text: 'Javascript 多得是你不知道的事',
        link: '/Javascript/destructuring-assignment'
      },
      {
        text: 'Nodejs',
        link: '/Nodejs/init'
      },
    ]
  },
}