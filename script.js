const answers = [
  { text: "Yes", type: "good" },
  { text: "Most likely", type: "good" },
  { text: "Without a doubt", type: "good" },
  { text: "No", type: "bad" },
  { text: "Don't count on it", type: "bad" },
  { text: "Very doubtful", type: "bad" },
  { text: "Probably", type: "meh" },
  { text: "Ask again later", type: "meh" }
];

const question = document.getElementById("question");
const askBtn = document.getElementById("askBtn");
const answer = document.getElementById("answer");
const answerText = answer.querySelector("span");

answer.hidden=true

askBtn.addEventListener('click', () => {
  if (!question.value.trim()) {
    alert("You have to ask something!");
    return;
  }

  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

  answer.hidden = false;
  answerText.textContent = randomAnswer.text;

  switch(randomAnswer.type) {
    case "good":
      answerText.style.color = "lime";
      break;
    case "bad":
      answerText.style.color = "red";
      break;
    case "meh":
      answerText.style.color = "white";
      break;
  }
});

question.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    askBtn.click();
  }
});
