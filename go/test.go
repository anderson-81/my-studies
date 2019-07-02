package main

import "fmt"

func Sum(val1 int, val2 int) int
{
	return val1+val2
}

func Message(name string) string
{
	return "Hello, " + name + "!"
}

func Lopping(){
	var cont int = 0
	while(cont < 10)
	{
		fmt.Println(cont)
		cont++
	}
}

func main(){
	fmt.Println(Sum(30, 7))
	fmt.Println(Message("Anderson"))
	Lopping()
}

 