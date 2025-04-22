// textos
// pode ser com aspas duplas "" , pode ser com aspas simples '' , ou pode ser com acento com crase` ` ( com a crase você pode pular linhas e outras coisas )
//  não pode ter nomes variaveis com mesmo nomes 



// com a crase se chama template litarals ou template strings

// com a crase podemos colocar variáveis neles 
//  tudo que você colocar no ${} vai ser considerado variável

const texto1 = "textos com aspas duplas"
const texto2 = 'texto com aspas simples'
const texto3 = `texto com crase`   
const myAge = 30
const myCar = `Audi`
const myString = `minha idade é ${myAge}
estou ficando velho, mas ppelo menos tô andando de${myCar} `

console.log(texto1)
console.log(texto2)
console.log(texto3)
console.log(myString)


// voc~e pode usar números por exemplo const. number1 = 33.5 lembre-se de não usar vírgulas, mas números para numero fracionados
// voce pode utilizar operadores aritiméticos + - * /

const number1 = 33.5
const number2 = 30 / 7
const fakenumber = "30 / 7"

console.log(number2)
console.log(fakenumber)

// Boolean tudo é 010101010 ou seja voc~e usa o true e false para comparar informações por exemplo como 1fazer o formulário de usuário e senha do facebook

// object você utiliza o  {}  e : invés de () para qualificar um objeto e utilizar o . para navegar e trazer um objeto específico ex:
//  obs: não esqueça de usar a vírgula
const Giordano = {
      name: "Giordano",
      age: 30,
      adress:{
      street: "Rua 7",
      number: 0,
      city: "São Luis",
      state: "Maranhão",} 
}

console.log(Giordano.age)
console.log(Giordano.adress.city)

// para alterar no const você pode alterar um detalhe interno colocando o objeto.objeto.objeto = alteração

Giordano.age = 29

console.log(Giordano)

//  null e undefined
// o null é quando voc~e decide que algo vai ser nulo o undefined é quando ocorre uma cagada

const user {
       name: Giordano,
       age: 30,
       NomedoConjuge: null,
}

