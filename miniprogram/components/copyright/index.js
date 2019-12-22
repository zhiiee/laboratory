Component({
  data: {
    windowBottom: wx.getSystemInfoSync().model.indexOf('iPhone X') !== -1 ? 108 : 40
  },

  methods: {
    onGitHubTap () {
      const pages = getCurrentPages()
      const page = pages[pages.length - 1]
      let gitHubUrl = 'https://github.com/zhiiee/laboratory'
      if (page.route !== 'pages/index/index') {
        const routes = page.route.split('/')
        gitHubUrl = `https://github.com/zhiiee/laboratory/tree/master/miniprogram/${routes[0]}/${routes[1]}`
      }
      wx.setClipboardData({
        data: gitHubUrl,
        success: () => {
          wx.showToast({
            title: '源码地址已复制'
          })
        }
      })
    }
  }
})
