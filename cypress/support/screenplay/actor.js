export const actor = {
  attemptsTo: (task) => task.performAs(),
  should: (question) => question.answeredBy(),
};
