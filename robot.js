let x = 0;
let y = 0;

function move(dir) {

  if (dir === "right") x += 20;
  if (dir === "left") x -= 20;
  if (dir === "down") y += 20;
  if (dir === "up") y -= 20;

  // حدود المربع
  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > 255) x = 255;
  if (y > 255) y = 255;

  document.getElementById("robot").style.left = x + "px";
  document.getElementById("robot").style.top = y + "px";

  checkWin();
}

function checkWin() {
  let robot = document.getElementById("robot");
  let cookie = document.getElementById("cookie");

  let rx = robot.offsetLeft;
  let ry = robot.offsetTop;

  let cx = cookie.offsetLeft;
  let cy = cookie.offsetTop;

  // لو لمس الكوكيز
  if (Math.abs(rx - cx) < 30 && Math.abs(ry - cy) < 30) {
    document.getElementById("winMessage").style.display = "block";
    cookie.style.display = "none";
  }
}
function restartGame() {
  x = 0;
  y = 0;

  document.getElementById("robot").style.left = "0px";
  document.getElementById("robot").style.top = "0px";

  document.getElementById("cookie").style.display = "block";
  document.getElementById("winMessage").style.display = "none";
}