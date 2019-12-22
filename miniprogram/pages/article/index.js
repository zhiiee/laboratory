Page({
  data: {
    articleUrl: ''
  },

  onLoaded (options) {
    setTimeout(() => {
      if (options.articleUrl) {
        this.setData({
          articleUrl: decodeURIComponent(options.articleUrl)
        })
      }
    }, 600)
  }
})
