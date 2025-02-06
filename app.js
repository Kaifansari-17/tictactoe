let resetbtn = document.getElementById("reset");

let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");

let chance = "X";

change_chance = function () {
  if (chance == "X") {
    chance = "O";
  } else {
    chance = "X";
  }
};

btn1.onclick = function () {
  btn1.innerText = chance;
  checkwin();
  change_chance();
};

btn2.onclick = function () {
  btn2.innerText = chance;
  checkwin();
  change_chance();
};

btn3.onclick = function () {
  btn3.innerText = chance;
  checkwin();
  change_chance();
};

btn4.onclick = function () {
  btn4.innerText = chance;
  checkwin();
  change_chance();
};

btn5.onclick = function () {
  btn5.innerText = chance;
  checkwin();
  change_chance();
};

btn6.onclick = function () {
  btn6.innerText = chance;
  checkwin();
  change_chance();
};

btn7.onclick = function () {
  btn7.innerText = chance;
  checkwin();
  change_chance();
};

btn8.onclick = function () {
  btn8.innerText = chance;
  checkwin();
  change_chance();
};

btn9.onclick = function () {
  btn9.innerText = chance;
  checkwin();
  change_chance();
};

function checkwin() {
  if (
    btn1.innerText == btn2.innerText &&
    btn1.innerText == btn3.innerText &&
    btn1.innerText != ""
  ) {
    alert("Winner is : " + chance);
    disableboxes();
  } else if (
    btn1.innerText == btn4.innerText &&
    btn1.innerText == btn7.innerText &&
    btn1.innerText != ""
  ) {
    alert("Winner is : " + chance);
    disableboxes();
  } else if (
    btn1.innerText == btn5.innerText &&
    btn1.innerText == btn9.innerText &&
    btn1.innerText != ""
  ) {
    alert("Winner is : " + chance);
    disableboxes();
  } else if (
    btn2.innerText == btn5.innerText &&
    btn5.innerText == btn8.innerText &&
    btn2.innerText != ""
  ) {
    alert("Winner is : " + chance);
    disableboxes();
  } else if (
    btn3.innerText == btn6.innerText &&
    btn3.innerText == btn9.innerText &&
    btn3.innerText != ""
  ) {
    alert("Winner is : " + chance);
    disableboxes();
  } else if (
    btn3.innerText == btn5.innerText &&
    btn3.innerText == btn7.innerText &&
    btn3.innerText != ""
  ) {
    alert("Winner is : " + chance);
    disableboxes();
  } else if (
    btn3.innerText == btn6.innerText &&
    btn3.innerText == btn9.innerText &&
    btn3.innerText != ""
  ) {
    alert("Winner is : " + chance);
    disableboxes();
  } else if (
    btn4.innerText == btn5.innerText &&
    btn4.innerText == btn6.innerText &&
    btn4.innerText != ""
  ) {
    alert("Winner is : " + chance);
    disableboxes();
  } else if (
    btn7.innerText == btn8.innerText &&
    btn7.innerText == btn9.innerText &&
    btn7.innerText != ""
  ) {
    alert("Winner is : " + chance);
    disableboxes();
  }
}

function disableboxes() {
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
  btn4.disabled = true;
  btn5.disabled = true;
  btn6.disabled = true;
  btn7.disabled = true;
  btn8.disabled = true;
  btn9.disabled = true;
}

resetbtn.onclick = function () {
  btn1.innerText = "";
  btn2.innerText = "";
  btn3.innerText = "";
  btn4.innerText = "";
  btn5.innerText = "";
  btn6.innerText = "";
  btn7.innerText = "";
  btn8.innerText = "";
  btn9.innerText = "";

  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
  btn4.disabled = false;
  btn5.disabled = false;
  btn6.disabled = false;
  btn7.disabled = false;
  btn8.disabled = false;
  btn9.disabled = false;

  chance = "X"; // Reset the game to player X's turn
};
