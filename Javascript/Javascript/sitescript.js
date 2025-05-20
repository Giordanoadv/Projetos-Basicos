/*
document -> html

getElementById -> traz um elemento pelo ID
getElementByClassName -> traz todos os elementos com essa classe
getElementsByTagName -> traz TODOS os elementos com essa Tag
getElementsByName -> traz todos os elemntos com essa name

querySelector -> traz um elemento, o primeiro que encontrar
querySelectorAll - > traz todos os elementos que encontrar
*/

const input = document.getElementById("main-input")

console.log(input)

const elements = document.getElementByClassName("paragraph-js")

console.log("paragraph-js")

const elements = document.getElementsByTagName("p")

console.log(elements)

const elements = document.getElementsByName("nome-completo")

console.log(elements)

const elements = document.querySelector(".paragraph-js")

console.log(elements)

const elements = document.querySelector("#main-input")

console.log(elements)

const elements = document.querySelector("button.abacate") 

console.log(elements)
// como tem duas classes <p class="abcate"></p> e <button class="abacate"></button> a forma acima você só seleciona o button abacate

const elements = document.querySelectorAll(".abacate")

console.log(elements)