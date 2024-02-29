var bulb=document.querySelector('#bulb')
var btn=document.querySelector('button')
var btn2=document.getElementById('btn2');

var temp=0;
btn.addEventListener("click",function(){
    
    if(temp==0){
        bulb.style.backgroundColor = "yellow";
        temp=1;
    }
})
btn2.addEventListener("click",function(){
    
    if(temp==1){
        bulb.style.backgroundColor = "transparent";
        temp=0;
    }
    })
