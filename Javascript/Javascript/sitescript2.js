/*
Alterando e acessando textos 

textContent -> pega todo o conteúdo
innerText -> Pega apenas o texto
innerHtml ->  permite adicionar html texto 
*/

const elements = document.querySelector("#main-input") 


element.value = 1234
console.log(element.placeholder)

const elements = document.querySelector(".paragraph-js") 

console.log(element.textContent) // só html
console.log(element.innerText) // leva em conta o CSS
console.log(element.innerHtml) // Tras tudo inclusie permite trazer o  html como por exemplo a tag negrito