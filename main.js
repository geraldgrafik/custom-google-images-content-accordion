$(function() {
   $('.info__blk').click(function(e) {
      var  wrapperHeight = 220,
           window__width = getWindow(); 
           containerInfoHeight = $(this).next().height()+50;

      console.log(wrapperHeight); 
      console.log(containerInfoHeight);

      if(window__width >= 728){
         if($(this).parent().hasClass("active")){
            $(this).parent().removeClass("active").height("auto").fadeIn();
         }
         else{
            $(".google__accordion > div").removeClass("active");
            $(".google__accordion > div").height("auto");

            $(this).parent().addClass("active");
            $(this).parent().height(wrapperHeight+containerInfoHeight);
         }
      }
      else{
         $(".google__accordion > div").height("auto");
         if($(this).parent().hasClass("active")){
            $(this).parent().removeClass("active");
         }
         else{
            $(".google__accordion > div").removeClass("active");
            $(this).parent().addClass("active");
         }
      }
      scrollToID($(this));
   });
});

function getWindow(){
  // Returns width of browser viewport
  return $( window ).width();
}

function scrollToID(ID){
   $('html, body').animate({
        scrollTop: $(ID).offset().top
   }, 700, function() {
        //window.location.hash = ID;
   });
   //window.location.hash = ID;
}
