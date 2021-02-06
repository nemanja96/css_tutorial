let playground = document.getElementById("playground");

let visible = document.getElementById("visible");
let hidden = document.getElementById("hidden");
let scroll = document.getElementById("scroll");
let auto = document.getElementById("auto");

visible.addEventListener("click", function () {
  playground.style.overflow = "visible";
});

hidden.addEventListener("click", function () {
  playground.style.overflow = "hidden";
});

scroll.addEventListener("click", function () {
  playground.style.overflow = "scroll";
});

auto.addEventListener("click", function () {
  playground.style.overflow = "auto";
});

console.log(visible.checked);
