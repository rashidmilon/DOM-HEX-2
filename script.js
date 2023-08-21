const main = document.getElementById("root");
const changeBtn = document.getElementById("btn");
const output = document.getElementById("input");
const copyBtn = document.getElementById("btn-copy");

// change the hex color
changeBtn.addEventListener("click", function () {
  const bgColor = generateHEX();
  main.style.backgroundColor = bgColor;
  output.value = bgColor;
});

// copy to hex color code
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(output.value);
  // toast message
  generateToast(`${output.value} copied`);
});

// toast div create
function generateToast(mess) {
  const div = document.createElement("div");
  div.innerText = mess;
  div.className = "toast-message toast-message-slide-in";
  document.body.appendChild(div);
  setTimeout(() => {
    div.style.display = "none";
  }, 2000);
}

// generate the hex color
function generateHEX() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
