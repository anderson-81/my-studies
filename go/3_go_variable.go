package main

import "fmt"

func main(){
	fmt.Println("\n*************************\nDeclaração de Variável")
	var salary float64 // float da erro!!!
	salary = 5432.11
	fmt.Println("Salary: %T", salary)
	fmt.Printf("Type variable: %T", salary)
	fmt.Printf("\nSalary: %f.2", salary)

	fmt.Println("\n*************************\nDeclaração Dinâmica")

	d := 37 // Declaração dinâmica
	fmt.Println(d)

	fmt.Println("\n*************************\nDeclaração Mista")

	var x,y,z = 1,true,"Anderson"
	fmt.Printf("\n%v type %T", x, x)
	fmt.Printf("\n%v type %T", y, y)
	fmt.Printf("\n%v type %T", z, z)
}
