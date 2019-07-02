package main

import "fmt"

type Person struct{
	id int
	name string
}

func showPerson(p *Person){
	fmt.Printf("ID: %v", p.id)
	fmt.Printf("\nName: %v", p.name)
}

func main(){
	var p1 Person
	p1.id = 123
	p1.name = "Anderson"
	showPerson(&p1)
}