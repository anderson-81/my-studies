#include <iostream>
using namespace std;

void showsize()
{
    cout << "sizeof(char): " << sizeof(char) << "bits" << endl;
    cout << "sizeof(int): " << sizeof(int) << "bits" << endl;
    cout << "sizeof(float): " << sizeof(float) << "bits" << endl;
    cout << "sizeof(double): " << sizeof(double) << "bits" << endl;
    cout << "sizeof(short int): " << sizeof(short int) << "bits" << endl;
    cout << "sizeof(long int): " << sizeof(long int) << "bits" << endl;
    cout << "sizeof(wchar_t): " << sizeof(wchar_t) << "bits" << endl;
}

void createtype()
{
    typedef int INT_TYPE;
    INT_TYPE num1 = 30;
    INT_TYPE num2 = 8;
    INT_TYPE soma = num1 + num2;
    cout << num1 << " + " << num2 << " = " << soma << endl;
}

enum colors
{
    yellow,
    green,
    blue,
    white,
    red
}color;

void getindex()
{
    color = blue;
    cout << "Index: " << color << endl;
}

int main()
{
    //showsize();
    //createtype();
    getindex();
    return 0;
}