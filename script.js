const answers = [
  { text: "It is certain", type: "good" },
  { text: "It is decidedly so", type: "good" },
  { text: "Without a doubt", type: "good" },
  { text: "Yes definitely", type: "good" },
  { text: "You may rely on it", type: "good" },
  { text: "As I see it, yes", type: "good" },
  { text: "Most likely", type: "good" },
  { text: "Outlook good", type: "good" },
  { text: "Yes", type: "good" },
  { text: "Signs point to yes", type: "good" },
  { text: "Reply hazy, try again", type: "meh" },
  { text: "Ask again later", type: "meh" },
  { text: "Better not tell you now", type: "meh" },
  { text: "Cannot predict now", type: "meh" },
  { text: "Concentrate and ask again", type: "meh" },
  { text: "Don't count on it", type: "bad" },
  { text: "My reply is no", type: "bad" },
  { text: "My sources say no", type: "bad" },
  { text: "Outlook not so good", type: "bad" },
  { text: "Very doubtful", type: "bad" }
];


const question = document.getElementById("question");
const askBtn = document.getElementById("askBtn");
const answer = document.getElementById("answer");
const answerText = answer.querySelector("span");

answer.hidden=true

askBtn.addEventListener("click", () => {
  if (!question.value.trim()) {
    alert("You have to ask something!");
    return;
  }

  askBtn.classList.add("shake");
  setTimeout(() => askBtn.classList.remove("shake"), 400);

  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  
  answerText.textContent = randomAnswer.text;

  // Start fade in after shake animation completes
  setTimeout(() => {
    answer.hidden = false;
    answer.classList.remove("fadeOut");
    answer.classList.add("fadeIn");

    // Fade out after 3 seconds
    setTimeout(() => {
      answer.classList.remove("fadeIn");
      answer.classList.add("fadeOut");
      setTimeout(() => {
        answer.hidden = true;
      }, 1000);
    }, 3000);
  }, 400);

  switch (randomAnswer.type) {
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
