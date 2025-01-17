1) j'ai initialisé mes 3 compteur  qui sont : let comptlongeur = 0  pour la longeur des caracteres de la chaine
2)   let comptMot = 0  nombre de mots 
3)    let comptVoyelle = 0  nombre de voyelle 



const lettre = ["a" , "e" , "i" , "u" , "o" , "y"] intialisation de mes voyelles pour la vérification plus tard
let tab = prompt("entrez une phrases se terminant pas un point")  demande une phrase a l'utilisateur

while (tab[tab.length-1] !== ".") {
    tab = prompt(" Erreu : entrez une phrases se terminant pas un point (.) !!!") tant que celui ci mettra pas de point a la fin de la phrase il aura toujour ce message
}


 for (let i = 0; i < tab.length; i++) {     on parcoure le tableau et la variable char va Stoker les caractères 
const char = tab[i]

   if (char !== ' ') {    si le caractère est différent de la valeur vide  la  longueur s'incremente 
    comptlongeur++
   }
   if (char === ' ' || char === '.') {   si le caractère est différent de la valeur vide  ou si  le caractère est egale a un (.) compteur mot s'incremente 
    comptMot++
   }
   if (lettre.includes(char)) {  si dans le tableau des voyelles  il y'a un élément qui est inclus dans le tableau des caractères comptvoyelle s'incremente
    comptVoyelle++
   }
}
affichages des compteurs
console.log(`nombre de caracter : ${ comptlongeur}`)
console.log(`nombre de mot :  ${comptMot}`)
console.log(`nombre de voyelle : ${comptVoyelle}`)
