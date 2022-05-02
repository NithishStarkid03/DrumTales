var noofbtns = document.querySelectorAll("button").length;


function handleSound(sound){

    switch (sound){
      case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
        break;
      case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
      case "S":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
      case "D":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
      case "J":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
      case "K":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
      case "L":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
      default:
      console.log("somethin wrong");

    }

}

function handleAnimation(key){
    document.querySelector("."+key).classList.add("selected");

    setTimeout(function() {
      document.querySelector("."+key).classList.remove("selected");
    },100);
}


for(var i=0;i<noofbtns;i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){

    handleSound(this.innerHTML);
    handleAnimation(this.innerHTML);

  });
}

document.addEventListener("keydown",function(event){

  if(event.key === "w" ||event.key === "a" ||event.key === "s" ||event.key === "d" ||event.key === "j" ||event.key === "k" ||event.key === "l"){
    handleSound(event.key.toUpperCase());
    handleAnimation(event.key.toUpperCase());
    }

})
