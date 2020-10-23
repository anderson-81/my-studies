// Funções geradoras

function* colors(){
    yield "Green";
    yield "Yellow";
    yield "Blue";
    yield "White";
    yield "Red";  
}

for(let i of colors()){
    console.log(i);
}

/* --------------------------------- */

function* questions(){
    const name = yield "Qual o seu nome?";
    const age = yield "Qual a sua idade?";
    return `Name: ${name} - Age: ${age}`;
}

const it = questions();
console.log(it.next()); // preciso passar um next()
console.log(it.next('Anderson'));
console.log(it.next('30'));
//console.log(it.next()); // ERRO!

