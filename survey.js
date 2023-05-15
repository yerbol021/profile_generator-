const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const askQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const askQuestions = async (questions) => {
  for(let i = 0; i < questions.length; i++) {
    const answer = await askQuestion(questions[i] + '\n');
    profile[questions[i]] = answer;
  }
  rl.close();
};

askQuestions(questions)
  .then(() => {
    console.log(`Profile:
    Name: ${profile[questions[0]]}
    Activity: ${profile[questions[1]]}
    Music: ${profile[questions[2]]}
    Favourite Meal: ${profile[questions[3]]}
    Favourite Food: ${profile[questions[4]]}
    Favourite Sport: ${profile[questions[5]]}
    Superpower: ${profile[questions[6]]}`);
  });
