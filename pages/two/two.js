// pages/two/two.js
Page({
  data: {
    seeImage: [],
    images1: [],
    picVal:""
  },
  // 选择图片
  datato() {
    var that = this;
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        const images = that.data.seeImage.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        that.setData({
          seeImage: images.length <= 3 ? images : images.slice(0, 3)
        })
      }
    })
  },
  // 点击预览
  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.seeImage
    wx.previewImage({
      current: images[idx],  //当前预览的图片
      urls: images,  //所有要预览的图片
    })
  },
  ipnChange(e){
    this.data.picVal = e.detail.value
  },
  // 点击提交、这个地方要把图片的地址发给后台，然后同时返回列表页面，可以通过url发送数据在那个页面，然后把图片数据渲染
  sub() {
    let imgStr = this.data.seeImage;
    
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    //直接调用上一个页面对象的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      data: imgStr,
      txtValue: this.data.picVal
    });

    wx.navigateBack({
      delta: 1,
    })
  },
  //事件处理函数
  onLoad: function () {

  },
})

