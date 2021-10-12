const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "pierre" ||
    userInput === "ciseaux" ||
    userInput === "feuille"
  ) {
  } else {
    console.log(
      "Vous n'avez pas saisi un choix possible, merci de saisir 'pierre', 'feuille' ou 'ciseaux"
    );
  }
};

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  console.log(choice);
};

getComputerChoice();