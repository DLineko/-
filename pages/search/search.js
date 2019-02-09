//index.js
import { Search } from '../search/search-model.js'
//获取应用实例

const app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    result: '',
    state: ''
  },
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value.id; //获取表单所有name=id的值  
    wx.request({
      url: 'http://y.cn/api/v1/search/'+formData,
      data: formData,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res)
        that.setData({
          re: res.data,
        })
        wx.showToast({
          title: '已提交',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  
})
