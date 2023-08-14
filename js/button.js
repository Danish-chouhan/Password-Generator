export function btnFun(){
    const MainContainer = document.getElementById("MainContainer")
    const body = document.querySelector("body")
    const btn = document.createElement("button")
    btn.setAttribute("id","btnToGenerate")
    btn.textContent = "Generate Password"
    MainContainer.appendChild(btn)
}