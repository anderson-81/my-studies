#include<iostream>

using namespace std;

extern int num;

void function()
{
    cout << "Hello, World!" << endl;
}

void setvar()
{
    bool attr01 = true;
    char attr02 = 'A';
    int attr03 = 1;
    float attr04 = 0.5;
    double attr05 = 3.15;
    wchar_t attr06 = 'M';
    
    int num = 20;
    cout << num << endl;
}

int main()
{
    setvar();
    function();
    return 0;
}