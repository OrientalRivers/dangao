// pages/classify/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 0,
    sortPrice: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  switchTab: function (e) {
    
    if (e.target.dataset.index == 2) {
      let sortPriceN = this.data.sortPrice - (-1)
      console.log(sortPriceN)
      this.setData({
        curNav: e.target.dataset.index,
        sortPrice: sortPriceN
      })
    } else {
      this.setData({
        curNav: e.target.dataset.index,
        sortPrice: 1
      })
    }
    
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