$(function(){
  $("#content").html("<div class='spinner'><img src='images/spiffy.gif' /> <h2 class='pull-right'>Loading...</h2> </div>" );
  $.ajax({
  url: "/sections/index",
  success:function( data ){
       $("#content").html( data );
     }
   });

  });


$(function(){
 $('.change-content').click(function(){
  $("#content").html("<div class='spinner'><img src='images/spiffy.gif' />  <h2 class='pull-right' style='padding: 1em'>Loading...</h2></div>" );
  var section = this.id;
  $.ajax({
  url: "/sections/" + section,
  success:function( data ){
       $("#content").html( data );
            }
          });
        });
      });
