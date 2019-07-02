package main

import "fmt"

func showMatrix(param []int){
	fmt.Printf("\n\n")
	for i := 0; i < len(param); i++ {
		fmt.Println(param[i] * 3)
	}
}

func main(){
	
	var vet1 = [10] int {0,1,2,3,4,5,6,7,8,9}
	var vet2 = [] int {1,2,3}
	var vet3 [10] int

	for i := 0; i < len(vet1); i++ {
		fmt.Println(vet1[i] * 3)
	}

	for i := 0; i < len(vet2); i++ {
		fmt.Println(vet2[i] * 3)
	}

	for i := 0; i < 10; i++ {
		vet3[i] = i * 3
	}

	fmt.Println(len(vet3))

	var mat = [3][4] int {{4,3,2,1}, {9,8,6,5}, {5,7,1,2}}

	for i := 0; i < 3; i++ {
		for j := 0; j < 4; j++ {
			fmt.Printf("\n[%v,%v] = %v", (i + 1), (j + 1), mat[i][j])
		}
	}

	showMatrix(vet2)
}