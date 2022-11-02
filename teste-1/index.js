const isStartBracket = (bracket) => ["(", "[", "{"].includes(bracket);

const getStartBracketByEndBracket = (endBracket) => {
  if (")" === endBracket) return "(";
  if ("]" === endBracket) return "[";
  if ("}" === endBracket) return "{";
};

const isValidBracketsSequence = (bracketsSequence) => {
  const stackBrackets = [];

  for (let i = 0; i < bracketsSequence.length; i++) {
    const bracket = bracketsSequence[i];

    if (isStartBracket(bracket)) {
      stackBrackets.push(bracket);
      continue;
    }

    const lastBracket = stackBrackets.pop();
    if (lastBracket !== getStartBracketByEndBracket(bracket)) return false;
  }

  return stackBrackets.length === 0;
};

const bracketsForTest = ["(){}[]", "[{()}](){}", "[]{()", "[{)]"];

bracketsForTest.forEach((test) =>
  console.log(
    `${test}: ${
      isValidBracketsSequence(test)
        ? "Sequencia valida."
        : "Sequencia invalida."
    }`
  )
);
