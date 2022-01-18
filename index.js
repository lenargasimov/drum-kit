var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
<<<<<<< HEAD
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
=======
    alert("I got clicked!");
>>>>>>> 5fb79737c28b9088b127a8c88a67486cdff78321
  });
}
