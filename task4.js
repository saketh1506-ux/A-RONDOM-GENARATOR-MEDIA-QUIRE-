function generateNumber() {
  const num = Math.floor(Math.random() * 100);
  document.getElementById("result").textContent = num;
}
