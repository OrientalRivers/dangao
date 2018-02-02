// pages/classify/list/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAtt: 1,

    size: '12寸 适合6-9个人食用',

    num: 1,

    starNum: 5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // 关注处理
  isAttFn: function () {
    console.log(this.data.isAtt)
    let count = this.data.isAtt + 1;
    if (count%2== 0) {
      this.setData({
        isAtt: 0
      })
    } else {
      this.setData({
        isAtt: 1
      })
    }
    this.data.isAtt
  },
  // 数量选择
  plus: function () {
    let num = this.data.num + 1;
    this.setData({
      num
    })
  },
  minus: function () {
    let num = this.data.num - 1;
    if (num < 1) return num = 1;
    this.setData({
      num
    })
  },
  // 立即够埋
  nowBuyFn: function () {
    wx.navigateTo({
      url: '../../../logs/order/order',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})