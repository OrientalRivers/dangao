//获取应用实例
var app = getApp()
Page({
    data: {
        // indicatorDots: true,
        // vertical: false,
        // autoplay: true,
        // interval: 3000,
        // duration: 1000,
        // loadingHidden: false  // loading
    },
    switchLogsTab: function () {
      wx.switchTab({
        url: '/pages/logs/logs',
      })
    },
    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
    },

    onLoad: function() {
      
    }
})
