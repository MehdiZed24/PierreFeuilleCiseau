const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "pierre" ||
    userInput === "ciseaux" ||
    userInput === "feuille"
  ) {
    return userInput;
  } else {
    console.log(
      "Vous n'avez pas saisi un choix possible, merci de saisir 'pierre', 'feuille' ou 'ciseaux"
    );
  }
};

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "pierre";
      break;
    case 1:
      return "feuille";
      break;
    case 2:
      return "ciseaux";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Egalité!";
  }
  if (userChoice === "pierre") {
    if (computerChoice === "ciseaux") {
      return "Vous avez gagné";
    } else {
      return "Vous avez perdu";
    }
  }

  if (userChoice === "feuille") {
    if (computerChoice === "pierre") {
      return "Vous avez gagné";
    } else {
      return "Vous avez perdu";
    }
  }

  if (userChoice === "ciseaux") {
    if (computerChoice === "feuille") {
      return "Vous avez gagné";
    } else {
      return "Vous avez perdu";
    }
  }
};

const playGame = () => {
  userChoice = getUserChoice('pierre'); 
  console.log(`Vous jouez: ${userChoice}.`);
  computerChoice = getComputerChoice();
  console.log(`L'ordinateur joue :  ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
};


playGame();