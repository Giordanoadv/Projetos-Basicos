// Array serve para guardar vários dados em um lugar só, para criar array voc~e coloca colchetes e separa por vírgula

// const myArray = [20, 30, "Olá JavaScrypt", {name: "Giordano", age: 30}]

// a  contagem da posição começa a parti do 0 e não do 1 ex: 0, 1, 2, 3, 4, .....

const users = [20,30,500]
            //  0, 1, 2
console.log = (users[2]) 

//  vai ser 500

const users = [

    {name: 'Giordano', age: 30},
    {name: 'Tomoe', age: 27},
]
// pode fazer alterações
users[1].name = "yuna"

console.log(users)

// você pode navegar pelos elementos
console.log(users[0].age)