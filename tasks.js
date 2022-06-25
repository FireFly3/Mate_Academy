function makeAbbr(words) {
  let abbreviation = words[0];

  for (let i = 0; i < words.length; i++) {
    if ((i = " ")) {
      abbreviation += i;
    }
  }
  return abbreviation.toUpperCase();
}

console.log(makeAbbr("national aeronautics space administration"));