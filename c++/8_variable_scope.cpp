#include<iostream>

using namespace std;

int num; // global

void setnum(int num) // parametros
{
    cout << "NUM: " << num << endl;
}

int main()
{
    int num = 13; // local
    setnum(num);
    return 0;
}

