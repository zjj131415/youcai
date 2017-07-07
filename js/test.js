$(function() {
  var banner = $("#pinter1").parent();  //获取 banner 对象
  var ul = $("#pinter1", banner);
  var li = $(".school-show", ul);
  var btn1=$("li","#button1");
  var size = li.size(), index = 0, timeout;
  ul.css("width", (100 * size) + "%");
  li.css("width", (100 / size) + "%");


  function move(callback){
    ul.animate({
      "left": (index * 100 * -1) + "%"
    }, function(){

      index++;
      index >= size && (index = 0);
      callback();
    });
  }
  function app(){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      btn1.eq(index).addClass("active").siblings().removeClass("active");
      move(app);
    }, 3000 *6)
  }
  app(); //执行定时器
  banner.on("mouseenter", function(){
    clearTimeout(timeout); //清除定时器
  }).on("mouseleave", function(){
    app(); // 开启定时器
  });
  $("#button1").on("click","li",function(){
     index=$(this).index();
     btn1.eq(index).addClass("active").siblings().removeClass("active");
     timeout && clearTimeout(timeout);
     move(app);
   });

})