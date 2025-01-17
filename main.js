let comptlongeur =0
let comptMot = 0
let comptVoyelle = 0



const lettre = ["a" , "e" , "i" , "u" , "o" , "y"]
let tab = prompt("entrez une phrases se terminant pas un point")

while (tab[tab.length-1] !== ".") {
    tab = prompt(" Erreu : entrez une phrases se terminant pas un point (.) !!!")
}


 for (let i = 0; i < tab.length; i++) {
const char = tab[i]

   if (char !== ' ') {
    comptlongeur++
   }
   if (char === ' ' || char === '.') {
    comptMot++
   }
   if (lettre.includes(char)) {
    comptVoyelle++
   }
}
console.log(`nombre de caracter : ${ comptlongeur}`)
console.log(`nombre de mot :  ${comptMot}`)
console.log(`nombre de voyelle : ${comptVoyelle}`)

