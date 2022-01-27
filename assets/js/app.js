function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

function Random(max = 1) {
  const a = Math.floor(Math.random() * max);
  const b = Math.floor(Math.random() * max);
  return [a, b];
}
let score = 0;

window.addEventListener("keydown", (event) => {
  let mario = document.getElementById("avatar");
  let coin = document.getElementById("coin");
  const left = parseInt(mario.style.left || "0px");
  const top = parseInt(mario.style.top || "0px");

  switch (event.key) {
    case "ArrowUp":
      mario.style.top = top - 50 + "px";
      break;
    case "ArrowRight":
      mario.style.left = left + 50 + "px";
      break;
    case "ArrowDown":
      mario.style.top = top + 50 + "px";
      break;
    case "ArrowLeft":
      mario.style.left = left - 50 + "px";
      break;
    default:
    // code block
  }

  if (isTouching(mario, coin) === true) {
    coin.style.top = Random(500)[0] + "px";
    coin.style.left = Random(500)[1] + "px";
    score = score + 1;
    console.log(score);
  }
});
