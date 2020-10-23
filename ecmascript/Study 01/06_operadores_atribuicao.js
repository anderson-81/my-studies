let atribuir = (x,y,opc) => {

    switch(opc)
    {
        case 1:
            console.log(x+=y);
            break;
        case 2:
            console.log(x-=y);
            break;
        case 3:
            console.log(x*=y);
            break;
        default:
            console.log(x/=y);
            break;
    }
}

var x = 10;
var y = 3;
atribuir(x,y,1);
atribuir(x,y,2);
atribuir(x,y,3);
atribuir(x,y,4);

var text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
`

console.log(text);