/// Condition by Temperature \\\

function weatherTemp(temperature) {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66 && temperature <= 85) {
    return "warm";
  } else if (temperature <= 65) {
    return "cold";
  }
}

/// Placeholder for User Avatar \\\

function firstLetter(word) {
  const arr = word.split(" ");
  var result = "";
  arr.forEach((word) => {
    result += word.slice(0, 1);
  });
  return result;
}

export { weatherTemp, firstLetter };
