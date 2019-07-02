package main

import "fmt"

func main(){

	people := map[int] string {1:"Lucy", 2:"Paul", 3:"Anne", 4:"Jessy", 5:"Lilie"}

	for person := range people{
		fmt.Println(people[person])
	}
}