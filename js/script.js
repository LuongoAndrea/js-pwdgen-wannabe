/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
poi chiedi la sua età
Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)
*/
const nomeUtente = prompt('inserire il nome:');
const cognomeUtente = prompt('inserire il cognome:');
const coloreUtente = prompt('inserire il colore preferito:');
const etaUtente = prompt('inserire la propria eta:');
const passUtente = nomeUtente+cognomeUtente+coloreUtente+etaUtente;
console.log('pass generata: '+passUtente);

const passGenerata = `
La tua password &egrave;: ${passUtente}
`
const elementoPass = document.getElementById('pass-generata');
elementoPass.innerHTML = passGenerata;

// const nome = `
// ${nomeUtente}
// `
// const nomeElemento = document.getElementsByClassName('nome');
// nomeElemento.innerHTML = nome;
// console.log(nomeElemento);

// const cognome = `
// ${cognomeUtente}
// `
// const cognomeElemento = document.getElementsByClassName('cognome');
// cognomeElemento.innerHTML = cognome;
// console.log(cognomeElemento);

// const colore = `
// ${coloreUtente}
// `
// const coloreElemento = document.getElementsByClassName('colore');
// coloreElemento.innerHTML = colore;
// console.log(coloreElemento);

// const eta = `
// ${etaUtente}
// `
// const etaElemento = document.getElementsByClassName('eta');
// etaElemento.innerHTML = eta;
// console.log(etaElemento);