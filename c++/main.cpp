#include <iostream>
#include <iomanip>
#include <string>
#include <ctime>
#include <fstream>
#include <thread>
#include <Windows.h>
		
using namespace std;

typedef int INTEGER;

enum semana{
	Segunda, Terca, Quarta, Quinta, Sexta , Sabado, Domingo
};

void TestVolatile()
{
	volatile int x = 100;
	while(x == 100)
	{
		cout << x << endl;
		x++;
	}
}


void TestRestrict()
{
	int x = 100;
	while(x == 100)
	{
		cout << x << endl;
		x++;
	}
}

void Greeting01(string *name){
	cout << "Hello, " << *name << "!" << endl;
}

void Greeting02(string &name){
	cout << "Hello, " << name << "!" << endl;
}


void Random01(){
	int i = 0;
	loop:{
		if(i == 9){
			exit(EXIT_SUCCESS);
		}else{
			cout << "Random: " << (rand() % 100) << endl;
			i++;
			goto loop;
		}
	}
}

void Random02(){
	int i = 0;
	loop:{
		if(i == 9){
			exit(EXIT_SUCCESS);
		}else{
			// cout << "Random: " <<  srand(time(NULL)) << endl;
			i++;
			goto loop;
		}
	}
}


void displayVector(int vector[], int size){
	cout << endl;
	cout << "Display Vector:" << endl;
	for(register int i = 0; i < size; i++){
		cout << setw(4) << "[" << i << "]" << " = " << setw(1) << vector[i] << endl;
	}
}

/*
int * getVector(){
	int vector[] = {5,6,4,7,3,8,2,9,1,0};
	return vector;
}
*/

void soma(int& num1, int& num2){
	cout << num1 + num2 << endl;
}

INTEGER vector[] = {5,6,4,7,3,8,2,9,1,0};

INTEGER& getbyindex(INTEGER i){
	return vector[i];
}

static INTEGER cont = 0;

void increment(){
	cont++;
}

typedef struct Person{
	int id;
	string name;
} Person;


void displayStruct(struct Person *person){
	cout << "\n\nID: " << person->id << " | Name: " << person->name << endl; 
}

void displayStructAddress(struct Person &person){
	cout << "\n\nID: " << person.id << " | Name: " << person.name << endl; 
}

namespace classes{
	
	class Person{
		private:
			int id;
			string name;
		public:
			Person(int id, string name);
			void setId(int id);	
			int getId();
			void setName(string name);
			string getName();
			~Person();
			virtual void display() = 0;
	};
	
	Person::Person(int id, string name)
	{
		this->id = id;
		this->name = name;
	}
	
	void Person::setId(int id)
	{
		this->id = id;
	}	
	
	int Person::getId()
	{
		return this->id;
	}	
	
	void Person::setName(string name)
	{
		this->name = name;
	}	
	
	string Person::getName()
	{
		return this->name;
	}	
	
	Person::~Person()
	{
		cout << "Object destroyed.";
	}
	
	void Person::display(){
		cout << "ID: " << this->id << "| Name: " << this->name << endl;
	}
	
	class PhysicalPerson : public Person {
		private:
			string cpf;
		public:
			PhysicalPerson(int id, string cpf, string name);
			void setCpf(string name);
			string getCpf();
			~PhysicalPerson();
			void display();
	};
	
	PhysicalPerson::PhysicalPerson(int id, string cpf, string name) : Person(id, name)
	{
		this->cpf = cpf;
	}
	
	void PhysicalPerson::setCpf(string cpf)
	{
		this->cpf = cpf;
	}	
	
	string PhysicalPerson::getCpf()
	{
		return this->cpf;
	}	
	
	PhysicalPerson::~PhysicalPerson()
	{
		cout << "Object destroyed.";
	}	
	
	void PhysicalPerson::display(){
		cout << "ID: " << this->getId() << " | CPF: " << this->cpf << " | Name: " << this->getName() << endl;
	}
};

struct DivisionByZero : public exception {
	const char * getMessage() const throw() {
		return "Division By Zero.";
	}
};

namespace templates {
	
	template <typename T>
	class Retangle{
		public:
			T width;
			T height;
			void Display(Retangle r){
				cout << "Width: " << r.width << "| Height: " << r.height << endl;
			}
			void Display(){
				cout << "Width: " << this.width << "| Height: " << this.height << endl;
			}
	};
	
	template <typename T>
	T division(T num1, T num2){
		return num1 / num2;
	}
}
	
namespace counters {
	
	void CountDown(string label){
		int i = 9;
		while(i >= 0){
			cout << label << ": " << i << endl;
			sleep(1);
			i--;
		}
		exit(EXIT_SUCCESS);
	}

	void CountUp(string label){
		int i = 0;
		cout << label << ": " << i << endl;
		while(i <= 9){
			cout << label << ": " << i << endl;
			sleep(1);
			i++;
		}
		exit(EXIT_SUCCESS);
	}
}


namespace friends{
	
	class Retangle{
		private:
			int width;
			int height;
		public:
			Retangle(int width, int height){
				this->width = width;
				this->height = height;
			}
			friend void display(Retangle r);
	};
	
	void display(Retangle r){
		cout << "Width: " << r.width << " | Height: " << r.height << endl;
	}
}

int main(int argc, char** argv) {
	
	wchar_t test;                       
	cout << test << endl;
	
	TestVolatile();
	{
		string name = "Anderson";
		Greeting01(&name);
		
		string *ptr = &name;
		Greeting02(*ptr);
	}
	
	//Random01();
	//Random02();
	
	{
	
		cout << "Array:" << endl;
		cout << endl;
		int vector[] = {5,6,4,7,3,8,2,9,1,0};
		for(register int i = 0; i < 10; i++){
			cout << setw(4) << "[" << i << "]" << " = " << setw(1) << vector[i] << endl;
		}
		
		cout << endl << endl;
		
		cout << "Pointer to Array:" << endl;
		cout << endl;
		int *ptr = vector;
		for(register int i = 0; i < 10; i++){
			cout << setw(4) << "[" << i << "]" << " = " << setw(1) << ptr[i] << endl;
		}	
		
		cout << endl << endl;
		
		int *p;
		p = vector; 
		for(register int i = 0; i < 10; i++){
			cout << setw(4) << "[" << i << "]" << " = " << setw(1) << p[i] << endl;
		}	
		
		displayVector(vector, 10);
	}
	
	/*
	{
		int *ptr = getVector();
		for(register int i = 0; i < 10; i++){
			cout << setw(4) << "[" << i << "]" << " = " << setw(1) << ptr[i] << endl;
		}
	}
	*/
	
	{
		char part1[] = "Hello, ";
		char part2[] = "!";
 		
		char name01[] = {'A','n','d','e','r','s','o','n','\0'};
		cout << name01 << endl;
		
		
		char name02[] = "Anderson";
		cout << name02 << endl;
		
		cout << strlen(name01) << endl;
		cout << strlen(name02) << endl;	
		
		cout << strcat(part1, name02) << endl;	
		
		int vector[] = {5,6,4,7,3,8,2,9,1,0};
		
 		//cout << name01.size() << endl;
		//cout << name02.size() << endl;
		
		string message = strcat(part1, name02);
		cout << message << endl;
		cout << message.size() << endl;
	}
	
	{
		int *ptr = NULL;
		if(!ptr)
			cout << "Null";
		else
			cout << "Not null";
	}
	
	{
		INTEGER num1 = 19;
		INTEGER num2 = 21;
		INTEGER *ptr1 = &num1;
		INTEGER *ptr2 = &num2;
		INTEGER **pptr1 = &ptr1;
		INTEGER **pptr2 = &ptr2;
		cout << **pptr1 + **pptr2 << endl;
		INTEGER ***ppptr1 = &pptr1;
		INTEGER ***ppptr2 = &pptr2;
		***ppptr1 = 11;
		***ppptr2 = 22;
		cout << ***ppptr1 + ***ppptr2 << endl;
	}
	
	{
		INTEGER num1 = 3;
		INTEGER num2 = 10;
		INTEGER& rnum1 = num1;
		INTEGER& rnum2 = num2;
		cout << rnum1 + rnum2 << endl; 
		rnum1 = 19;
		rnum2 = 14;
		cout << rnum1 + rnum2 << endl; 
		
		soma(num1, num2); // passando referencia (propria variavel)
		
		cout << getbyindex(3) << endl;
	}
	
	{
		for(register int i = 0;;i++){
			if(i == 9999){
				break;
			}
			increment();
		}
		cout << cont << endl;
	}
	
	{
		// #include <ctime>
		time_t now = time(0);
		tm *ltm = localtime(&now);
		cout << ltm->tm_mday << "/" << ltm->tm_mon + 1 << "/" << (ltm->tm_year + 1900) ;
	}
	
	/*
	{
		string name = "";
		cout << "\n\nEnter your name: ";
		cin >> name;
		cout << "Hello, " << name << "!" << endl; 
		cerr << "Error message." << endl;
		clog << "Message log ..." << endl;
	}
	*/
	
	{
		struct Person person1;
		person1.id = 123;
		person1.name = "Anderson";
		cout << "\n\nID: " << person1.id << " | Name: " << person1.name << endl;
		
		struct Person person2;
		person2.id = 212;
		person2.name = "Sarah";
		displayStruct(&person2);
		
		struct Person *ptr = &person1;
		displayStructAddress(*ptr);
	}
	
	{
		using namespace classes;
		PhysicalPerson pp = PhysicalPerson(123, "12345678998", "Anderson");
		pp.display();
	}
	
	{
		{
			// #include <fstream>
			ofstream file;
			file.open("data.dat");
			file << "Hello, World!" << endl;
			file.close();
		}
		
		{
			// #include <fstream>
			char text[100];
			ifstream file;
			file.open("data.dat");
			file.seekg(0, ios::beg); // No inicio do arquivo.
			file >> text;
		    cout << text;
			file.close();
		}
	}
	
	cout << "\n\n\n\n\n\n\n\n\n\n";
	
	{
		int num1 = 20;
		int num2 = 0;
		if(num2 == 0){
			// cerr << "\n\nDivision by zero." << endl;
			// throw "\n\nDivision by zero.";
		}else{
			float div = num1 / num2;
		}
	}
	/*
	{
		try{
			throw DivisionByZero();
		}catch(DivisionByZero& e){
			cerr << e.getMessage() << endl;
		}
	}
	*/
	
	cout << "\n\n\n\n\n\n\n\n\n\n";
	
	{
		double *ptr = NULL;
		ptr = new double();
		*ptr = 3.14159;
		cout << ptr << " = " << *ptr << endl;
		delete ptr;
	}
	
	{
		int *ptr = NULL;
		ptr = new int;
		*ptr = 100;
		cout << *ptr << endl;
		delete ptr;
	}
	
	{
		int* ptr = NULL;
		ptr = new int[10];
		delete [] ptr;
	}
	
	/*
	{
		double** pvalue  = NULL;      // Pointer initialized with null 
		pvalue  = new double [3][4];
		delete [] pvalue;  
	}
	*/
	
	{
		using namespace classes;
		PhysicalPerson *pp = new PhysicalPerson(123, "Anderson", "65418976511");
		// pp.display();
		// *pp->display();
		pp->display();
		delete pp;	
		// delete *pp;
	}
	
	/*
	{
		using namespace classes;
		PhysicalPerson* array = new PhysicalPerson[10];
		delete [] array;
	}
	*/
	
	{
		using namespace templates;
		cout << division(20.1, 12.9) << endl;
	}
	
	{
	   	cout << "Value of __LINE__ : " << __LINE__ << endl;
   		cout << "Value of __FILE__ : " << __FILE__ << endl;
   		cout << "Value of __DATE__ : " << __DATE__ << endl;
   		cout << "Value of __TIME__ : " << __TIME__ << endl;
	}
	
	/*
	{
		// #include <thread>
		// #include <Windows.h>
		using namespace counters;
		//CountDown();
		//CountUp();
		
	 	thread t1(CountDown, "THREAD #01");
	 	thread t2(CountUp, "THREAD #02");
	 	t1.join();
	 	t2.join();
	}
	*/
	
	{
		using namespace friends;
		Retangle r = Retangle(640, 480);
		display(r); // call friendly method.
		// r::display(r);
	}
	
	{
		// C++ Signal Handling
	}
	
	return 0;
}
