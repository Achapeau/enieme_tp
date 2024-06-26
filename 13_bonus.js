/**

Exercice : Trouver la fréquence des mots dans une phrase

Objectif :
Écrire une fonction qui prend en entrée une chaîne de caractères et qui retourne un objet où les clés sont les mots de la phrase et les valeurs sont le nombre de fois où ces mots apparaissent.

Consignes :

Convertir la phrase en tableau de mots.
Utiliser la méthode .reduce() pour compter la fréquence des mots.
Retourner l'objet avec les fréquences.

ex: la pomme est rouge et la banane est jaune
{
  "la": 2,
  "pomme": 1,
  "est": 2,
  "rouge": 1,
  "et": 1,
  "banane": 1,
  "jaune": 1
}

 */

const countWords = (sentence) => {
  const words = sentence ? sentence.split(" ") : {};
  const wordCount = words.length
    ? words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      }, {})
    : {};
  return wordCount;
};
console.log(countWords("la pomme est rouge et la banane est jaune"));

/**
Exercice : Trier un objet par valeur

Objectif :
Écrire une fonction qui prend en entrée un objet et qui retourne un nouvel objet dont les propriétés sont triées en fonction de leurs valeurs, en ordre croissant.

exemple:
{
  "pommes": 3,
  "bananes": 1,
  "cerises": 8
};

-> 

{
  "bananes": 1,
  "pommes": 3,
  "cerises": 8
}

*/

/* const sortObjectByValue = (obj) => {
*   return typeof Object.entries(obj)[1][1] === "number"
*     ? Object.fromEntries(Object.entries(obj).sort((a, b) => a[1] - b[1]))
*     : Object.fromEntries(Object.entries(obj).sort());
* }; 
*/
const sortObjectByValue = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).sort(
      (a, b) =>
        typeof a[1] === "number" && typeof b[1] === "number"
          ? a[1] - b[1] // Tri par ordre numérique
          : a[1].localeCompare(b[1]) // Tri par ordre alphabétique
    )
  );
};

console.log(
  sortObjectByValue({
    pommes: 10,
    bananes: 2,
    cerises: 3,
    oranges: 1,
    poires: 5,
    fraises: 40,
  })
);

console.log(
  sortObjectByValue({
    pommes: "p",
    bananes: "b",
    cerises: "c",
    oranges: "o",
    poires: "p",
    fraises: "f",
  })
);
module.exports = { countWords, sortObjectByValue };
