package main

import "fmt"

func main(){
	var vint int = 37
	var vf64 float64 = float64(vint)

	fmt.Println(vint)
	fmt.Println(vf64)
	
	fmt.Printf("\n%f",vf64)
}