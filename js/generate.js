import { UserRequirment } from "./UserRecuirment.js";
import { btnFun } from "./button.js";
UserRequirment()
btnFun()


export function GeneratePassword() {
  // alphabates
  const Alphabates = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //   number Generator function
  function NumGenerate() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const randomNumIndex = `${Math.floor(Math.random() * numbers.length)}`;
    const numbersGenerator = numbers[randomNumIndex];
    return numbersGenerator;
  }
  //   symbol Generator function
  function SymbolGenerate() {
    const specialWords = [
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "-",
      "+",
      "=",
      "{",
      "[",
      "}",
      "]",
      "|",
      ":",
      ";",
      "<",
      ",",
      ">",
      ".",
      "?",
      "/",
    ];
    const randomNumIndex = `${Math.floor(Math.random() * specialWords.length)}`;
    const SymbolGenerate = specialWords[randomNumIndex];
    return SymbolGenerate;
  }
  //   small Generator function
  function smallAlphabatesGenerate() {
    const randomNumIndex = `${Math.floor(Math.random() * Alphabates.length)}`;
    const smallAlphabates = Alphabates[randomNumIndex];
    return smallAlphabates;
  }
  //   capital Generator function
  function cappitalAlphabatesGenerate() {
    const cappitalAlphabates = Alphabates.map((ele) => ele.toUpperCase());
    const randomNumIndex = `${Math.floor(
      Math.random() * cappitalAlphabates.length
    )}`;
    const cappitalWords = cappitalAlphabates[randomNumIndex];
    return cappitalWords;
  }
 
  // btn to generate password
  const btnId = document.getElementById("btnToGenerate")
  // user data 
  const inputData = document.getElementById("inputVal")
  // password container
  const container = document.getElementById("passwordContainer")

  btnId.addEventListener("click",()=>{
    const PasswordCompleted = [];
    for (let i = 0; i <= inputData.value ; i++) {
      const funcArr = [
        NumGenerate(),
        smallAlphabatesGenerate(),
        cappitalAlphabatesGenerate(),
        SymbolGenerate(),
      ];
      const randomNumIndex = Math.floor(Math.random() * funcArr.length);
      const generatedCharacter = funcArr[randomNumIndex];
      PasswordCompleted.push(generatedCharacter);
    }
  
   const password =  PasswordCompleted.join(""); // Join the array to form a password string
   container.textContent = password
  })
 
  }

GeneratePassword();