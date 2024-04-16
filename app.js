let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#00bfff";

let item = "";

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")

btn1.addEventListener("click", function(){
  document.getElementById('main').style.display = "none";
  document.getElementById('form').style.display = "block";
});

btn2.addEventListener("click", function(){
  document.getElementById('main').style.display = "none";
  document.getElementById('form').style.display = "block";
});

btn3.addEventListener("click", function(){
  document.getElementById('main').style.display = "none";
  document.getElementById('form').style.display = "block";
});

btn4.addEventListener("click", function(){
  document.getElementById('main').style.display = "none";
  document.getElementById('form').style.display = "block";
});

btn5.addEventListener("click", function(){
  document.getElementById('main').style.display = "none";
  document.getElementById('form').style.display = "block";
});

btn6.addEventListener("click", function(){
  document.getElementById('main').style.display = "none";
  document.getElementById('form').style.display = "block";
  document.getElementById('user_name').value = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
});

let order = document.getElementById('order')

order.addEventListener("click", function(){
  tg.close();
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.last_name}`;

usercard.appendChild(p);
