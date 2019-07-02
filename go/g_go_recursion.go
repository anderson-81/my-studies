package main

import "fmt"
import "os"

var i int = 0

func increment(){
	if(i == 10){
		os.Exit(3)
	}
	fmt.Println(i)
	i++
	increment()
}

func main(){
	increment()
}