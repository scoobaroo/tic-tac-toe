var player;

$(document).ready(function() {
// RESET
  if($("button").on("click", function(event){
    $(".box").text(" ");
  }));

  (function () {
    var count = 0;

    $('.box').click(function () {
      count += 1;

      if (count%2===0) {
        player= "O";
      }
      else {
        player= "X";
      }
    });
  })();

//MARK BOX
  $("#top-left").on("click", function(event){
    if($(this).hasClass("full"))
    {
      alert("spot taken");
    }
    else
    {
      $("#top-left").text(player);
    }
});
$("#top-mid").on("click", function(event){
    if($(this).hasClass("full"))
    {
      alert("spot taken");
    }
    else
    {
      $("#top-mid").text(player);
    }
});
$("#top-right").on("click", function(event){
    if($(this).hasClass("full"))
    {
      alert("spot taken");
    }
    else
    {
      $("#top-right").text(player);
    }
});
$("#mid-left").on("click", function(event){
    if($(this).hasClass("full"))
    {
      alert("spot taken");
    }
    else
    {
      $("#mid-left").text(player);
    }
  });
$("#mid-mid").on("click", function(event){
    if($(this).hasClass("full"))
    {
      alert("spot taken");
    }
    else
    {
      $("#mid-mid").text(player);
    }
  });
$("#mid-right").on("click", function(event){
    if($(this).hasClass("full"))
    {
      alert("spot taken");
    }
    else
    {
      $("#mid-right").text(player);
    }
  });
$("#bot-left").on("click", function(event){
    if($(this).hasClass("full"))
    {
      alert("spot taken");
    }
    else
    {
      $("#bot-left").text(player);
    }
  });
$("#bot-mid").on("click", function(event){
    if($(this).hasClass("full"))
    {
      alert("spot taken");
    }
    else
    {
      $("#bot-mid").text(player);
    }
  });
$("#bot-right").on("click", function(event){
    if($(this).hasClass("full"))
    {
      alert("spot taken");
    }
    else
    {
      $("#bot-right").text(player);
    }
  });
//BOX FULL DETECT

$(".box").on("click", function(event){
  $(this).addClass("full");
  });
// $(".box").on('click', function() {
//   // check if this box is already claimed
//   if ($(this).text() === "O" || $(this).text() === "X") {
//     $(this).addClass("full");
//   }});

// if($(".box").hasClass("full")){
//     alert("Spot Taken!");
// }
// // $(".box").addEventListener("click", function() {
// $(".box").on("click", function(event){
// if($(this).hasClass("full")){
//     alert("Spot Taken!");
//   }});
// });


//getWINNER
function getWinner(){
  if ($("#top-right").text()==player&&$("#top-mid").text()==player&&$("#top-left").text()==player){
    alert("Tic Tac Toe! "+player+" Wins!");
  }
  if ($("#mid-right").text()==player&&$("#mid-mid").text()==player&&$("#mid-left").text()==player){
    alert("Tic Tac Toe! "+player+" Wins!");
  }
  if ($("#bot-right").text()==player&&$("#bot-mid").text()==player&&$("#bot-left").text()==player){
    alert("Tic Tac Toe! "+player+" Wins!");
  }
  if ($("#top-left").text()==player&&$("#mid-left").text()==player&&$("#bot-left").text()==player){
    alert("Tic Tac Toe! "+player+" Wins!");
  }
  if ($("#top-mid").text()==player&&$("#mid-mid").text()==player&&$("#bot-mid").text()==player){
    alert("Tic Tac Toe! "+player+" Wins!");
  }
  if ($("#top-right").text()==player&&$("#mid-right").text()==player&&$("#bot-right").text()==player){
    alert("Tic Tac Toe! "+player+" Wins!");
  }
  if ($("#top-left").text()==player&&$("#mid-mid").text()==player&&$("#bot-right").text()==player){
    alert("Tic Tac Toe! "+player+" Wins!");
  }
  if ($("#top-right").text()==player&&$("#mid-mid").text()==player&&$("#bot-left").text()==player){
    alert("Tic Tac Toe! "+player+" Wins!");
  }
}

if($(".box").on("click", function(event){
  getWinner();
}));
  // all code to manipulate the DOM
  // goes inside this function
});
