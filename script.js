let bashDev = {
    name:"Isbella",
    nick: "The Dev",
    height: 1.30
}
bashDev.best = "deletando...."
delete bashDev.best;

console.log(bashDev);


let cadastro =[
    {nome:"josiane" ,idade:42  ,telefone: "(xx) xxxxx-xxxx" , amigos:["laranja", "maça", "morango"] },
    {nome: "marcos" ,idade:37 ,telefone:"(xx) xxxxx-xxxx" , amigos:["pera", "banana","maracujar"] },
    {nome: "lucas" ,idade:50  ,telefone: "(xx) xxxxx-xxxx" , amigos:["tangirina", "acerola","goiaba"] },
    {nome:"isabella" ,idade:60 ,telefone: "(xx) xxxxx-xxxx" , amigos:["chocolate", "abacate", "melão"] },
    {nome: "hosana",idade: undefined ,telefone: undefined, amigos:[undefined] }
]

function numRandom() {
   return Math.floor(Math.random()* 5)
}


console.log(cadastro[0].amigos[numRandom()]);
console.log(cadastro[1].amigos[numRandom()]);
console.log(cadastro[2].amigos[numRandom()]);
console.log(cadastro[3].amigos[numRandom()]);
console.log(cadastro[4].amigos[numRandom()]);