
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let st = "JEFREY JOSE.";
var state = 0;
var debounce = true;

function mousemovement(event)
{
        console.log(debounce);
       if(debounce==true)
       {
        debounce = false;
        let iter = 0;
        const interval = setInterval(()=>
        {
            event.target.innerText = event.target.innerText.split("").map((letter,index) => 
                {
                    if(index < iter)
                        {if(state==0)
                        return event.target.dataset.value[index];
                        else 
                        return st[index];
                        }
                    if(index>Math.ceil(iter))
                        {if(state==1)
                            return event.target.dataset.value[index];
                            else 
                            return st[index];
                        }
                    return letters[Math.floor(Math.random()*26)];
                }).join("");
            if(iter>=event.target.dataset.value.length)
                {
                    debounce = true;
                    state = (state+1)%2;
                    clearInterval(interval);}
            iter+=1/5;
        },30)
    }
}



console.log("Hello");
const vw = window.innerWidth;
const vh = window.innerHeight;

  console.log("Code run")
  document.getElementById("name").onmouseover = event => {
    mousemovement(event);
}
document.getElementById("name").onmouseout = event => {
    mousemovement(event);
}
document.getElementById("name").ontouchend = event => {
    mousemovement(event);
}

document.onscroll = event => {
    console.log("wow");
}

document.getElementById("left").onmouseup = event => {
    document.getElementById("leftpage").style.width = "100%";
    setTimeout(() => {
        document.getElementById("rightpage").style.width = "0%";
    document.getElementById("toppage").style.width = "0%";
    document.getElementById("homepage").style.width = "0%";
    console.log("should move left");
    },1000);
    
}
document.getElementById("right").onmouseup = event => {
    document.getElementById("rightpage").style.left = "0%";
    document.getElementById("rightpage").style.width = "100%";

    setTimeout(() => {
        document.getElementById("leftpage").style.width = "0%";
    document.getElementById("toppage").style.width = "0%";
    document.getElementById("homepage").style.width = "0%";
    console.log("should move left");
    },1000);
    
}
/* 
document.getElementById("right").onmouseup = event => {
    document.getElementById("rightpage").style.width = "100%";
        document.getElementById("leftpage").style.width = "0%";
    document.getElementById("toppage").style.width = "0%";
    document.getElementById("homepage").style.width = "0%";
    
    document.getElementById("homepage").style.width = "100%";
    
    document.getElementById("homepage").style.height = "0%";
    console.log("should move right");
    
}*/

