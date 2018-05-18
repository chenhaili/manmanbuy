/**
 * Created by chenli on 2018/5/17.
 */
$(function () {
  // 一进入页面发送 ajax 请求, 获取导航列表数据, 进行渲染
  $.ajax({
    type: "get",
    url: api.getindexmenu,
    dataType: "json",
    success: function (info) {
      console.log(info);
      // 根据数据进行渲染页面
      var htmlStr = template("navTpl", info);
      $('.nav ul').html(htmlStr);
    }
  });
  // 首页导航toggle效果
  $('.nav').on("click", "li:nth-child(8)", function () {
    $('.nav li:nth-child(n+9)').toggleClass("hide");
  });

  // 超级折扣推荐产品渲染
  $.ajax({
    type: 'get',
    url: api.getmoneyctrl,
    success: function (info) {
      console.log(info);
      var htmlStr = template('proTpl', info);
      $('.idxProList').html(htmlStr);
    }
  });
  
  
  
})



