function f1()
{
    console.log("break;");
    var cont = 0;
    while(cont < 10)
    {
        console.log(" - " + cont);
        if(cont == 5)
        {
            break;
        }
        cont++;
    }
}

function f2()
{
    var cont = 0;
    console.log("continue;")
    while(cont < 10)
    {
        if(cont == 5)
        {
            console.log(" - X");
            cont++;
            continue;
        }
        console.log(" - " + cont);
        cont++;
    }
}

f1();
console.log("\n\n");
f2();