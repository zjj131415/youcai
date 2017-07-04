(function(window,$) {
  // jquery 插件
  $.fn.navmenu = function(option) {
    option || (option = {});
    var self = $(this);
    /**
     * 获取配置项中的值
     * @param  {[type]} name [description]
     * @param  {[type]} def  [description]
     * @return {[type]}      [description]
     */
    function getOption(that, name, def){
      var value;
      if(option[name]){
        value = option[name];
      }else{
        value = that.data(name) || def;
      }
      return value;
    }
    console.log();
    var $context = getOption(self, "context"), // 获取显示区域对象
        hover = getOption(self, "hover"),  // 获取鼠标悬浮的样式
        active = getOption(self, "active", "selected");// 获取标识当前选中时标识的 class 值
        conactive = getOption(self, "conactive"); // 获取标识显示内容标识 class 值

    var tagName = "li";
    if(self.children().length > 0){
      tagName = self.children().get(0).tagName;
    }

    var chil = getOption(self, "chil", tagName);  // 获取子元素对象
    self.on('click', chil, function(){
      var $ele = $(this);
      if($ele.hasClass(active)){
        return false;
      }
      $ele.addClass(active);                //当前<li>元素高亮
      $ele.siblings().removeClass(active);  //去掉其它同辈<li>

      var $item;
      //显示区域对象有值时
      if($context){
        //检查是否有指定显示对象
        if($ele.data('target')){
          $item = $($ele.data('target'), $context);
          //循环 chil 的兄弟元素，传参index和dom[dom=循环的单个元素对象]
          var $chils = $(chil, self).not($ele);
          $chils.each(function(index,dom){
            var domTarget = $(dom).data('target');//获取target的对象
            if(conactive){
              $(domTarget, $context).removeClass(conactive);
            }else{
              $(domTarget, $context).hide();//隐藏
            }
          });
          if(conactive){
            $item.addClass(conactive);
          }else{
            $item.show();
          }
        }else{
          var $tabs = $($context).children();
          var index = $ele.index();
          $item = $tabs.eq(index);
          if(conactive){
            $item.addClass(conactive).siblings().removeClass(conactive);
          }else{
            $item.show().siblings().hide();
          }
        }
      }
      var hook = getOption(self, "hook", $item.data("hook"));
      if(typeof hook == "string"){
        hook = window[hook];
      }
      typeof hook == "function" && hook.call(self, $item);
    });
    if(hover){
      self.on("mouseenter", chil, function(argument) {
        $(this).addClass(hover);
      });
      self.on("mouseleave", chil, function(){
        $(this).removeClass(hover);
      });
    }
  }
})(window, window.jQuery);