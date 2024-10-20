const colors =["red","blue","aqua","green"];
let btn = document.getElementById("btn");
btn.addEventListener("click", function (){
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor = randomColor;
})