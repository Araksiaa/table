const btn= document.getElementById(`btn`);
const output=document.getElementById(`output`);
const at=document.getElementById(`at`)

const randomNumber = Math.floor((Math.random()*10)+1);

let numGuess =0;
function ckeckGuess (){
const guess = parseInt(document.getElementById(`number`).value)
numGuess++
if (guess === randomNumber){

output.innerHTML=`Congrates: Total attempts: ${numGuess}`;
at.innerHTML=`${numGuess}`
const localData=localStorage.getItem(`at`);
localStorage.setItem(`at`, `${numGuess}`)
}else if (guess< randomNumber) {
output.innerHTML ="The number is small";

}else{
output.innerHTML="the number is big"

}
document.getElementById("number").value = "";
};
btn.addEventListener(`click`, ckeckGuess)



