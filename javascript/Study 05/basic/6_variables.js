var num = 30;

function f1(pnum)
{
    var num = 15;
    console.log("NUM Local: " + num);
    console.log("Parametro: " + pnum);
}

console.log("NUM Global: " + num);
f1(10);

