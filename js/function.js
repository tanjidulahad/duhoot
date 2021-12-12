$(document).ready(function(){
  $(".offeri").on("click","li",function(){
    var id=$(this).attr("id");
    $(this).addClass("active").siblings().removeClass("active");
    $("#"+id).show();
  });
});
