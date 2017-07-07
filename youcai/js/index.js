$(function(){
    //header-city
    $("#citys").on("click",function(){
      $(this).toggleClass("tv");
      $(this).find(".city-choose").children(".city-item").each(function(){
        // console.log($(this));
        $(this).on("click",function(){
          $(".cty").html($(this).children("a").html());

        })
      })
    })

    //banner
    var mySwiper = new Swiper('.swiper-container1',{
        pagination : '.swiper-pagination1',
        paginationClickable: true,
        onlyExternal : true,
        autoplay : 5000,
    });

    //学校
    //   //选项1
    //     $(".name-btn",".school-show").each(function(){
    //       console.log($(this));
    //       $(this).navmenu({
    //         "chil": "li",
    //       });
    //     });
    //
    //
    //   //选项2
    //    $(".min-pinter",".cat-item").each(function(){
    //       $(this).navmenu({
    //         "chil"   : "li",
    //       });
    //     });



    //school-mark
    var mySwiper = new Swiper('.swiper-container2',{
        slidesPerView: 7,
        paginationClickable: true,
        spaceBetween : 20,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        onlyExternal : true,
        autoplay : 10,
        //centeredSlides : true,
    });



    //youcai-center
    var mySwiper = new Swiper('.swiper-container4',{
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween : 20,
        onlyExternal : true,
        autoplay : 5000,
    });


    //优才图书馆
      $("#y_library").navmenu({
        "chil"   : "li",
      });

    //返回顶部
    $("#top").on("click",function(){
        var top = $(document).scrollTop();
        top=0;
    })
})

$(function(){
   //师资力量
    var mySwiper = new Swiper('#swiper-container3',{
        pagination : '.swiper-pagination3', //我早说了 名字是否一样，你说不是的
        paginationClickable: true,
        onlyExternal : true,

    });
     var $main2=$("#main2")
     var $pinter2=$("#pinter2");
     var $li2=$(">li",$pinter2);//注意$
     var size2=$li2.size();
     var $btn2=$("li","#button2");
     //设置pinter的样式
      $pinter2.css({
        width:(size2 * 100)+"%"
      });
      $li2.css({
        width:(100/size2)+"%"
     });
      var timeout , index=0;
      var animate2=function(index){
        $btn2.removeClass("active");
        $btn2.eq(index).addClass("active");
        $pinter2.animate({
               left: (index * 100 * -1)+"%"
        },function(){
              index++;
              if(index>=size2){
                index=0;

              }
              //判断是否有计时器  并清除
             if(timeout){

               clearTimeout(timeout);
             }

           //创建一个定时器
           timeout = setTimeout(function(){
              animate2(index); //执行动画
           },3000*4);
        });
      };
      animate2(index);
    $("#button2").on("click","li",function(){
     index=$(this).index();
     timeout && clearTimeout(timeout);
      animate2(index);
   });
})