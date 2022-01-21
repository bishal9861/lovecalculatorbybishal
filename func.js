//starting this app

let buttonCalc=document.querySelector("button");
buttonCalc.addEventListener("click",myFunc);

function myFunc(){
    let name1=document.getElementById("yourname").value.toLowerCase().trim();
let name2=document.getElementById("Partnersname").value.toLowerCase().trim();
//remove whitespace between name with array of character
let nameY=name1.split(" ").join("");
let nameP=name2.split(" ").join("");

//find the sum of nameY ascii code
let sumY=0;
for(let i=0;i<nameY.length;i++){
    sumY+=nameY.charCodeAt(i);
}
console.log(sumY);
let sumP=0;
for(let j=0;j<nameP.length;j++){
    sumP+=nameP.charCodeAt(j);
}
console.log(sumP);
let vaLove=438;
let vaSumName=sumY+sumP;
console.log(vaSumName);
let sumOfLove=15;

let sumOfNames=sumRepeatedly(vaSumName);
console.log(sumOfLove);
console.log(sumOfNames);
let h1val=document.getElementById("ans");
if(sumOfNames>sumOfLove){
    sumOfNames=sumOfNames-sumOfLove;

}
let percentage=(sumOfNames/sumOfLove)*100;
let valueOfLove=Math.round(percentage);
h1val.textContent=`${valueOfLove}`;







}
const sumDigit=(num,sum=0)=>{
    if(num){
        return sumDigit(Math.floor(num/10),sum+(num%10));
    }
    return sum;
};
const sumRepeatedly=num=>{
    while(num>9){
        num=sumDigit(num);
    };
    return num;
};






