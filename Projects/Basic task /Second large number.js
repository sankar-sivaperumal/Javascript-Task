// number 
let Number=[10,20,25,30];
let largest =Number[0];
for(let i=1;i < Number.length;i++){
    if (Number[i]>largest){
        largest =Number[i]
    }
}
console.log("the largest number is "+largest);