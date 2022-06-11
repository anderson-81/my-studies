#include<iostream>
#include "help.h"

using namespace std;

//-------------------------------------------//

void function01()
{
    auto num = 30;
    cout << "Num: " << num << endl;
}

//-------------------------------------------//

void function02()
{
    register int cont = 0;
    while(cont < 10)
    {
        cout << " - " << cont << endl;
        cont++;
    }
}

//-------------------------------------------//

static int count = 5;

void function03()
{
    while(count--)
    {
        cout << count << "Hello, World!" << endl;
    }
}

//-------------------------------------------//

extern void show(); // definida em "help.h"
string name;

int main()
{
    //function01();
    //function02();
    //function03();
    name = "Anderson";
    show();
    return 0;
}