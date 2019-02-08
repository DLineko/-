// pages/home/home.js
import {Home} from 'home-model.js';
var home=new Home();
Page({

  data: {
    loadingHidden: false
  },
  onLoad:function(){
    this._loadData();
  },
  _loadData:function(){
    var id=1;
    home.getBannerData(id,(res)=>{
      this.setData({
        'bannerArr': res,
      });
    });
    /*获取主题信息*/
    home.getThemeData((data) => {
      this.setData({
        'themeArr': data,
      
      });
    });
    /*获取单品信息*/
    home.getProductorData((data) => {
      this.setData({
        'productsArr': data
      });
    
    });
  }, 
  /*跳转到商品详情*/
  onProductsItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },
  /*跳转到主题列表*/
  onThemesItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../theme/theme?id=' + id + '&name=' + name
    })
  },
  /*search */
  search:function(e){
    wx.navigateTo({
      url: '../search/search'
    })
  }
 
})