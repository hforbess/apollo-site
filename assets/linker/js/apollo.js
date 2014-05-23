$(function(){
  $.ajax({
  url: "/sections/index",
  success:function( data ){
       $("#content").html( data );
     }
   });

  });


$(function(){
 $('.change-content').click(function(){
  $("#content").html("<div class='spinner'><img src='images/spiffy.gif' /> </div>" );
  var section = this.id;
  $.ajax({
  url: "/sections/" + section,
  success:function( data ){
       $("#content").html( data );
            }
          });
        });
      });
