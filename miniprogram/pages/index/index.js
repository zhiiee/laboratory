Page({
  data: {
    icon: __wxConfig.accountInfo.icon,
    subPackages: __wxConfig.subPackages,
    titleHeight: 0,
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    windowHeight: wx.getSystemInfoSync().windowHeight,
    windowBottom: wx.getSystemInfoSync().model.indexOf('iPhone X') !== -1 ? 68 : 0
  },

  onLoaded () {
    wx.createSelectorQuery().select('.title').boundingClientRect(rect => {
      this.setData({
        titleHeight: rect.height
      })
    }).exec()
  },

  onPackageTap (event) {
    wx.navigateTo({
      url: `/${event.target.dataset.root}pages/index/index?title=${event.target.dataset.title}`
    })
  }
})
