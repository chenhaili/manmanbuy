/**
 * Created by chenli on 2018/5/17.
 */
;(function (w) {
  function Api(origin, pathname) {
    /* 自己本地IP加上项目端口号 */
    this.base = 'http://192.168.45.50:9999';
    /*首页接口地址管理*/
    this.getindexmenu = this.base + '/api/getindexmenu';
    this.getmoneyctrl = this.base + '/api/getmoneyctrl';
    this.getmoneyctrlproduct = this.base + '/api/getmoneyctrlproduct';
    this.getcategorytitle = this.base + '/api/getcategorytitle';
    this.getproductlist = this.base + '/api/getproductlist';
    this.getcategorybyid = this.base + '/api/getcategorybyid';
    this.getproduct = this.base + '/api/getproduct';
    this.getcategory = this.base + '/api/getcategory';
    this.getproductcom = this.base + '/api/getproductcom';
    this.getbaicaijiatitle = this.base + '/api/getbaicaijiatitle';
    this.getbaicaijiaproduct = this.base + '/api/getbaicaijiaproduct';
    this.getinlanddiscount = this.base + '/api/getinlanddiscount';
    this.getdiscountproduct = this.base + '/api/getdiscountproduct';
    this.getcoupon = this.base + '/api/getcoupon';
    this.getcouponproduct = this.base + '/api/getcouponproduct';
    this.getgsshop = this.base + '/api/getgsshop';
    this.getgsshoparea = this.base + '/api/getgsshoparea';
    this.getgsproduct = this.base + '/api/getgsproduct';
    this.getsitenav = this.base + '/api/getsitenav';
    this.getbrandtitle = this.base + '/api/getbrandtitle';
    this.getbrand = this.base + '/api/getbrand';
    this.getbrandproductlist = this.base + '/api/getbrandproductlist';
    this.getproductcom = this.base + '/api/getproductcom';
  }
  
  w.api = new Api();
  
})(window);