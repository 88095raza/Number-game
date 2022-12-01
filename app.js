const display1=document.querySelector("#display1");
const display2=document.querySelector("#display2");
const p1button=document.querySelector("#p1button");
const p2button=document.querySelector("#p2button");
const resetButton=document.querySelector("#reset");
const selection=document.querySelector("#playto");

let p1Score=0;
let p2Score=0;
let maxscore=3;
let isGameover=false;

p1button.addEventListener('click',function () {
    if(!isGameover){
        p1Score=p1Score+1;        
        if(p1Score===maxscore){
            isGameover=true;
        }
        display1.textContent=p1Score;
    }
})

p2button.addEventListener('click',function () {
    if(!isGameover)
    {
        p2Score=p2Score+1;
        if(p2Score===maxscore)
        {
          isGameover=true;
        }
       display2.textContent=p2Score; 
    }
})

selection=addEventListener('change',function(){
    maxscore=parentInt(this.value);
    reset();
})

resetButton.addEventListener('click',reset);

function reset(){
    isGameover=false;
    display1.textContent=0;
    display2.textContent=0;
}