Component({
  data: {
    auth: true
  },

  lifetimes: {
    attached () {
      let auth = true
      if (__wxConfig.envVersion !== 'develop' && __wxConfig.accountInfo.appId !== 'wxed574bcd65d9c3cf') {
        auth = false
      }
      this.setData({
        auth: auth
      })
    }
  }
})
