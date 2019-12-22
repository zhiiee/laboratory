const pageExtend = Page => {
  return object => {
    let title = '一些看起来很厉害，暂时又没有使用场景的代码片段'

    const { onLoaded } = object

    object.onLoad = function (options) {
      if (options.title) {
        title = decodeURIComponent(options.title)
        wx.setNavigationBarTitle({
          title: title
        })
      } else if (options.articleUrl) {
        title = '分享给你一篇技术干货'
      }
      if (typeof onLoaded === 'function') {
        onLoaded.call(this, options)
      }
    }

    object.onShareAppMessage = function () {
      const data = {
        title: title,
        imageUrl: '/images/share.png'
      }
      if (this.data.articleUrl) {
        data.articleUrl = `/pages/article/index?articleUrl=${this.data.articleUrl}`
      }
      return data
    }
    return Page(object)
  }
}

const originalPage = Page
Page = pageExtend(originalPage)
