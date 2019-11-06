// set all the correct answer to q1 to 10 order
const correctAnswer = ['C', 'B', 'B', 'A', 'B', 'C', 'C', 'A', 'A', 'B'];

// get form reference
const form = document.querySelector('.form-quiz');

// hidden result 
const result = document.querySelector('.result');

// score
const quizScore = result.querySelector('span');

// onsubmit
form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;

  // get all the answer from user
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value
  ];

  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 1;
    }
  });

  // show the result div by removing the d-none close
  result.classList.remove('d-none')

  // score to top
  scrollTo(0, 0);

  // animate the score
  let output = 0;

  const timer = setInterval(() => {
    // add the score and bind it to the span
    quizScore.textContent = output;

    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 100);
});