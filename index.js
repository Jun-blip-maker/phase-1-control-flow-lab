function scuberGreetingForFeet(feet) {
  // Write your code here!
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 400 && feet < 2000) {
    return "That will be twenty bucks.";
  } else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    return "No can do.";
  }

  // Additional logic for other cases...
}

function ternaryCheckCity(city) {
  if (city == "NYC") {
    return "Ok, sounds good.";
  }
  if (city != "NYC") {
    return "No go.";
  }
  // Write your code here!
}

function switchOnCharmFromTip(Tip) {
  if (Tip === "generous") {
    return "Thank you so much.";
  } else if (Tip === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}
// Write your code here!
