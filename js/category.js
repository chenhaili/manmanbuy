/**
 * Created by chenli on 2018/5/18.
 */
$(function () {
  //一级分类
  $.ajax({
    type: 'get',
    url: api.getcategorytitle,
    success: function (info) {
      console.log(info);
      var htmlStr = template('categoryTpl', info);
      $('.category_box').html(htmlStr);
    }
    
  })
  
  //二级分类
  var flag = true;
  $('.category_box').on("click", "li", function () {
    var titleId = $(this).data('id');
    var $this = $(this).find('.info_box');
    //定义一级标题的点击次数
    var infoBox_cl = $this.children().length;
    // console.log(infoBox_cl);
    if (infoBox_cl == 0) {
      $.ajax({
        type: 'get',
        url: api.getcategory,
        data: {
          titleid: titleId
        },
        success: function (info) {
          console.log(info);
          var htmlStr = template('scdcatTpl', info);
          $this.html(htmlStr);
          //点击切换
          $this.stop().slideToggle().parent().siblings().find('.info_box').stop().slideUp(200);
          infoBox_cl++;
        }
      });
    } else {
      //点击切换
      $this.stop().slideToggle().parent().siblings().find('.info_box').stop().slideUp(200);
    }
  });
  
  
});
