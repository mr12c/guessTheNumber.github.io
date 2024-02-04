let canPlay=true;
const number=document.getElementById("number");
const submit=document.getElementById("sub");
let responses=[];//// this will create a empty  array;
let attemptRemaining=10;
// console.log(responses);
let messageContainer=document.querySelector('.message');
let form=document.querySelector(".form");
let preResponse=document.querySelector(".pre-res");
let  remaningAttempt=document.querySelector(".attempt-re");
let hint=document.querySelector(".hint");
let realAnswer=Math.floor(Math.random()*((1+100-1)+1));
let count=0;
remaningAttempt.innerHTML=`${attemptRemaining}`;
console.log(realAnswer)
////// end game function////
 function endgame(){
    number.setAttribute('disabled','');
    submit.setAttribute('disabled','');
    let restart=document.createElement('button')
    restart.innerHTML=`Replay`;
    restart.setAttribute('class','btn');
    messageContainer.appendChild(restart);
    newgame(restart);
 }
///////////////////////////

 let validguess=(guess)=>{
    if(isNaN(guess)){
        alert("PLEASE ENTER  A VALID INPUT");
        number.value='';
    }
    else if(guess<1){
        alert("please enter  a valid input");
        number.value='';

    }
    else if(guess>100){
        alert("please enter a valid input");
        number.value='';
    }
    else if(guess===realAnswer){
        hint.innerHTML=`Congratulation you gussed right 😊 .press restart to play again `;
         endgame();
    }
     
    else{
        attemptRemaining--;
        responses.push(guess);
        remaningAttempt.innerHTML=`${attemptRemaining}`;
        hint.innerHTML=`not correct please try again`;
        count++;
        number.value='';
        preResponse.innerHTML+=`${guess} `;
        if( attemptRemaining===0){
            canPlay=false;
            hint.innerHTML=`Game Over!! the correct nummber was ${realAnswer} press restart to play again`;
            endgame();
        }
        // attemptRemaining--;
    }
 }
 if(canPlay){
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
      const guess=parseInt(number.value);
      validguess(guess);
    });
 }
 function newgame(restart){
     
        restart.addEventListener("click",(e)=>{
               submit.removeAttribute('disabled');
               number.removeAttribute('disabled');
               attemptRemaining=10;
               remaningAttempt.innerHTML=`${attemptRemaining}`
               realAnswer=Math.floor(Math.random()*((1+100-1)+1));
               console.log(realAnswer);
               hint.innerHTML='';
               number.value='';
               canPlay=true;
               preResponse.innerHTML='';
               messageContainer.removeChild(restart);
        })
     
 }
 