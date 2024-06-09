let timer = 60;
let score = -10;
let hitrn = 0;
// let highScore = -10;
function increaseval(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function decreaseval(){
    score -= 5;
    document.querySelector("#scoreval").textContent = score;
}
function makeBubble(){
    var clutter = "";

for(var i=1; i<=184; i++){
   var rn =  Math.floor(Math.random()*10);
    clutter += `<div class = "bubble">${rn}</div>` ;
} 
document.querySelector(`#pbtm`).innerHTML = clutter;
}
function runtimer(){
    let settimer = setInterval(function(){
        if(timer>0){

            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(settimer);
            document.querySelector('#pbtm').innerHTML = `<h1>GAME OVER</h1> `;
            highScore();
            
        }
    },1000);
}
function hitbtn(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;


}
function highScore(){
    let highscore = localStorage.getItem("highscore") || 0;
    if(score>highscore){
        localStorage.setItem("highscore",score);
        document.querySelector("#highscore").textContent = score;
    }
    else{
        document.querySelector("#highscore").textContent = highscore;
    }
}
highScore();


function restart(){
    timer = 60;
    score = 0;
    document.querySelector("#timerval").textContent = timer;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#hitval").textContent = hitrn;
    document.querySelector("#highscore").textContent = highscore;
    document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1> `;
    highScore();
    makeBubble();
    hitbtn();
    runtimer();
}
document.querySelector("#restart").addEventListener("click",function(){
    restart();
});


 document.querySelector("#pbtm").addEventListener("click",function(dets){
       var clickednum = Number(dets.target.textContent);
    //    console.log(clickednum)
    if(clickednum === hitrn){
        increaseval();
        makeBubble();
        hitbtn();
    }
    else{
        decreaseval();
        makeBubble();
        hitbtn();
    }
    // highScore();
});
hitbtn();
runtimer();
makeBubble();
increaseval();