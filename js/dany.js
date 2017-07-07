$(function(){
  //优才动态
   //推荐
      var mySwiper = new Swiper('.swiper-container7', {
       pagination : '.swiper-pagination7',
       paginationClickable :true,
        autoplay: 5000,//自动滑动
      });

      $(".course-btn").navmenu({
        chil : "li"
      });

      //名校风采
      $(".school-btn").navmenu({
            chil : "li"
      });

      //优才动态详情页
      $(".choose-btn").navmenu({
            chil : "li"
      });
});