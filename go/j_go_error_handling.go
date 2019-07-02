package main

import "fmt"
import "errors"

func div(val1, val2 float64)(float64, error){

	if(val2 != 0){
		return val1/val2, nil
	}else{
		return 0, errors.New("Math: divise by zero.")
	}
}

func main(){
	result, err := div(5,0)
	fmt.Println(result)
	fmt.Println(err)
}