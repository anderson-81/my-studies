package main

import "fmt"

func showPointer(v *int){
	fmt.Println(*v)
}

func main(){
	var a int = 10
	fmt.Printf("Address: %x", &a)

	var p *int = &a
	fmt.Println("\naddress: ", p)
	fmt.Println("Value: ", *p)
	fmt.Println("Pointer's address: ", &p)

	var np *int 
	fmt.Printf("Null pointer: %x", np)
	if(np == nil){
		fmt.Println("Null")
	}

	if(np == nil){
		fmt.Println("nill")
	}

	/*
	fmt.Println("POINTER'S VECTOR:")
	var vetr = [10] int {0,1,2,3,4,5,6,7,8,9}
	var ptrv [] *int
	for i := 0; i < 10; i++ {
		ptrv[i] = &vetr[i]
	}
	*/

	fmt.Println("POINTER'S POINTER:")

	var value int = 37
	var pv *int = &value
	var ppv **int = &pv

	fmt.Printf("Value of a = %d\n", value)
    fmt.Printf("Value available at *pv = %d\n", *pv)
    fmt.Printf("Value available at **ppv = %d\n", **ppv)

    showPointer(pv)
}