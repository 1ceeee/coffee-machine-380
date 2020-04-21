'use strict';

//планирование

//таймаут
/*
setTimeout ( function(){
  alert("Таймаут отработал");
}, 5000);
*/

//вызывать надо paintBody, а не paintBody(). т.к. иначе она выполнится
//видео - 17:11 - про вызов ф-ций !

/*
let timeout = setTimeout(paintBody, 5000, "crimson");

function paintBody(color){
  document.body.style.background = color;
}

let changeButton = document.querySelector(".btn");
changeButton.onclick = function(){
  clearTimeout(timeout);
};
*/

/*
let coffeeMachine = document.querySelector('.coffee-machine');
coffeeMachine.style.position = "absolute";
*/

/*
let interval = setInterval(trashConsole, 2000);

let changeButton = document.querySelector(".btn");
changeButton.onclick = function(){
  clearInterval(interval);
};

function trashConsole(){
  //let top = parseInt(coffeeMachine.style.top);
  console.log(Math.random()); // - будет гадить в консоль ...
}
*/






