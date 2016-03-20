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
  if($("#top-left").on("click", function(event){
    ($("#top-left").text(player));
  }));
  if($("#top-mid").on("click", function(event){
    ($("#top-mid").text(player));
  }));
  if($("#top-right").on("click", function(event){
    ($("#top-right").text(player));
  }));
  if($("#mid-left").on("click", function(event){
    ($("#mid-left").text(player));
  }));
  if($("#mid-mid").on("click", function(event){
    ($("#mid-mid").text(player));
  }));
  if($("#mid-right").on("click", function(event){
    ($("#mid-right").text(player));
  }));
  if($("#bot-left").on("click", function(event){
    ($("#bot-left").text(player));
  }));
  if($("#bot-mid").on("click", function(event){
    ($("#bot-mid").text(player));
  }));
  if($("#bot-right").on("click", function(event){
    ($("#bot-right").text(player));
  }));
//BOX FULL DETECT

$(".box").on("click", function(event){
  $(this).addClass("full");
});
$(".full").on("click", function(event) {
  alert("Spot Taken");
});

// if($(".box").hasClass("full")){
//     alert("Spot Taken!");
// }
// $(".box").addEventListener("click", function() {
// $(".box").on("click", function(event){
// if($(".box").hasClass("full")){
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
