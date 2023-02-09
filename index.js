function checkAnswer() {
  const input = document.getElementById("input");
  const status = document.getElementById("status");

  if (input.value == "Charles") {
    status.innerText = "correct";
  } else {
    status.innerText = "Wrong";
  }
}
