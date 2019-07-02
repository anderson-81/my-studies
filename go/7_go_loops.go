package main

import "fmt"

func main(){

	fmt.Println("***********************")
	
	var i int = 0
	for true{
		if(i == 33){
			break
		}
		fmt.Println(i)
		i++
	}

	fmt.Println("***********************")

	var u int = 0
	for u < 20{
		if(u == 10){
			u = u + 9
			continue
		}
		fmt.Println(u)
		u++
	}

	fmt.Println("***********************")

	for i:=0; i < 100; i+=3{
		fmt.Println(i)
	}

	fmt.Println("***********************")

	for x := 0; x < 3; x++ {
		for y := 0; y < 4; y++ {
			fmt.Printf("\n%v * %v = %v", x, y, (x*y))
		}
	}
	fmt.Printf("\n")
	fmt.Println("***********************")

	/* local variable definition */
	var a int = 10

	/* do loop execution */
	LOOP: for a < 20 {
		if a == 15 {
			/* skip the iteration */
			a = a + 1
			goto LOOP
		}
		fmt.Printf("value of a: %d\n", a)
		a++     
	}  
}