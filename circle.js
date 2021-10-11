$(window).scroll(function(){
  console.log($(window).scrollTop());
  var scrollValue = $(window).scrollTop();
  var winWdith = $(window).width();
  
if(scrollValue  > winWdith){
    var dotSize = scrollValue - winWdith;
    var dotSize = dotSize + 20;
    if(dotSize > 100){
      
      var opa = ( (dotSize-100) * 100 ) / 600;
      $('#hello').css('opacity',opa / 50);
      
        if(dotSize > 500){
        dotSize = dotSize - 500;
        $(".yellow").css('height',dotSize+'px');
        $(".yellow").css('width',dotSize+'px');
        $(".yellow").css('margin-top',-dotSize / 2+'px');
        $(".yellow").css('margin-left',-dotSize / 2+'px');
        $(".yellow").css('transform','rotate('+dotSize +'deg)');
        $(".yellow").css('border-radius',(dotSize * 80) / 500+"%");
          if(dotSize > 200){
            opa = ( (dotSize-100) * 100 ) / 600;
            $('#yeTit').css('opacity',opa / 50);
            $(".yellow").css('line-height',dotSize+'px');
         
            
          }
        dotSize= 500;
          
        }else{
          $(".yellow").css('height','0');
          $(".yellow").css('width','0');
        }
      
    }else{
      $('#hello').css('opacity','0');
    }
    
    
    $(".dot").css('width',dotSize + 'px');
    $(".dot").css('height',dotSize  + 'px');
    $(".dot").css('top', - ( (dotSize - 20)  / 2 ) + 'px');
    $(".dot").css('right',(winWdith / 2) - (dotSize  / 2 )+'px'); 
    $("#hello").css('line-height',dotSize +'px');
  }
  
else{
    
    $(".dot").css('right',(scrollValue / 2)+'px');
    $(".dot").css('top','0');
    $(".dot").css('width','20px');
    $(".dot").css('height','20px');
    
    
  }
  
  
});