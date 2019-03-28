//index.js
import { Search } from '../search/search-model.js'
//获取应用实例
var search=new Search()
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
      url: 'http://y.cn/api/v1/search_product/'+formData,
      data: formData,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res)
        that.setData({
          re: res.data,
        })
        // wx.showToast({
        //   title: '已提交',
        //   icon: 'success',
        //   duration: 2000
        // })
      }
    })
  },
  onProductsItemTap:function(event){
    var id=search.getDataSet(event,'id');
    wx.navigateTo({
      url: '../product/product?id='+id,
    })

  }
})
