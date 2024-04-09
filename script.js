var timer = 6;
var score = 0;
var hitrn;
// event bubbling --->
// jis pd click kre ge us element pd event raise
// hoga, aur event listener na milne pd event element
// ke parent par listener dhundhega, waha bhi naa milne pad
// event parent ke parent
// ke parent pd listener dhundega

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
//logic for bubble
function makeBubble() {
  var clutter = " ";
  for (var i = 1; i <= 70; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

//timer logic
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInt);
      //niche vackent kr diya
      document.querySelector("#pbtm").innerHTML=`<h1>Game Over: your Totle Score is ${score}</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click",
    function(details){
    //    console.log(Number(details.target.textContent))
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    }
)
getNewHit();
runTimer();
makeBubble();
// increaseScore();
