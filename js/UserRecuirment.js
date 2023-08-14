export function UserRequirment() {
  const body = document.querySelector("body");

  // main container 
  const MainContainer = document.createElement("div");
  MainContainer.setAttribute("id", "MainContainer");
 body.appendChild(MainContainer);
 //  container password
 const passwordContainer = document.createElement("h3");
 passwordContainer.setAttribute("id", "passwordContainer");
 body.appendChild(passwordContainer);
 
//   input
  const userRequirment = document.createElement("input");
  userRequirment.setAttribute("type", "number");
  userRequirment.setAttribute("min", "1");
  userRequirment.setAttribute("max", "30");
  userRequirment.setAttribute("id", "inputVal");
  userRequirment.setAttribute(
    "placeholder","NUM");
    MainContainer.appendChild(userRequirment);
}
