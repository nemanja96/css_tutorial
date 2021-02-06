let img = document.getElementById("image");

let none = document.getElementById("none");
let left = document.getElementById("left");
let right = document.getElementById("right");

none.addEventListener("click", function () {
  img.style.float = "none";
});

left.addEventListener("click", function () {
  img.style.float = "left";
});

right.addEventListener("click", function () {
  img.style.float = "right";
});
