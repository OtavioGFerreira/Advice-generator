const title = document.getElementById("title");
const description = document.getElementById("description");

async function generateAdvice() {
  const url = "https://api.adviceslip.com/advice";
  const response = await fetch(url);
  return await response.json();
}

async function showAdvice() {
  const advice = await generateAdvice();
  const adviceNumber = advice.slip.id;
  const adviceText = advice.slip.advice;
  document.getElementById("title").textContent = adviceNumber;
  document.getElementById("description").textContent = adviceText;
}

document.getElementById("button").addEventListener("click", () => {
  showAdvice();
});
