#include <iostream>

#define PI 3.15

using namespace std;

void CharacterLiterals()
{
    cout << "\\Testando" << endl;
    cout << "\'" << endl;
    cout << "\"" << endl;
    cout << "\?" << endl;
    cout << "\a" << endl;
    cout << "\b" << endl;
    cout << "\f" << endl;
    cout << "\n" << endl;
    cout << "\r" << endl;
    cout << "\t" << endl;
    cout << "\v" << endl;
    //cout << "\ooo" << endl;
    //cout << "\xhh" << endl;
}

int main()
{
    CharacterLiterals();
    cout << "PI: " << PI << endl;
    const int num = 123;
    cout << "num: " << num << endl;
    return 0;
}

