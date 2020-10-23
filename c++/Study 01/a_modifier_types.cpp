#include<iostream>

using namespace std;


void function01()
{
    short int i;           
    short unsigned int j;  
    j = 50000;
    i = j;
    cout << i << " " << j;
}

void function02()
{
    volatile int some_int = 100;
    while(some_int == 100) //true
    {
        break;
    }
}

int main()
{
    //function01();
    function02();
    return 0;
}