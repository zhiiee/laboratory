Component({
  properties: {
    articleUrl: String,
    position: {
      type: String,
      value: 'right'
    },
    distance: {
      type: Number,
      value: 80
    }
  },

  data: {
    style: ''
  },

  attached () {
    this.changeStyle()
  },

  methods: {
    openArticle () {
      wx.navigateTo({
        url: `/pages/article/index?articleUrl=${this.data.articleUrl}`
      })
    },

    changeStyle () {
      let style = ''
      if (this.data.position === 'right') {
        style += 'right: 30rpx;'
      } else {
        style += 'left: 30rpx;'
      }
      style += ` top: ${this.data.distance}rpx;`
      this.setData({
        style: style
      })
    }
  }
})
