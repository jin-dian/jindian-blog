module.exports = {
  title: "叮当有耳朵的",
  description: '随便写写',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/jin-dian/image/blog/20220415105433.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      // { text: 'Docs', 
      //   icon: 'reco-message',
      //   items: [
      //     { text: 'JavaScript数据结构', link: '/docs/JavaScript/' }
      //   ]
      // },
      // { text: 'Contact', 
      //   icon: 'reco-message',
      //   items: [
      //     { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' }
      //   ]
      // }
    ],
    // sidebar: {
    //   '/docs/JavaScript/': [
    //     '',
    //     'theme',
    //     'plugin',
    //     'api'
    //   ]
    // },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    // friendLink: [
    //   {
    //     title: '午后南杂',
    //     desc: 'Enjoy when you can, and endure when you must.',
    //     email: '1156743527@qq.com',
    //     link: 'https://www.recoluan.com'
    //   },
    //   {
    //     title: '微信',
    //     desc: 'XJDX1998',
    //     avatar: "reco-wechat",
    //     // link: 'https://vuepress-theme-reco.recoluan.com'
    //   },
    // ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '金典',
    // 作者头像
    authorAvatar: 'https://cdn.jsdelivr.net/gh/jin-dian/image/blog/20220415105433.png',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    // startYear: '2017'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
