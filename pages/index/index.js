//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    item:{
      images:[]
    },
    data:[],
    txtValue:[]
  },
  report(){
    wx.navigateTo({
      url: '../two/two',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }, onShow: function () {
    this.setData(this.data.data)
  },
})