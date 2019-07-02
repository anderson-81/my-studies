package main

import "fmt"

func calc(x,y float64)(float64,float64,float64,float64){
	var a  float64 = (x+y)
	var b  float64 = (x-y)
	var c  float64 = (x*y)
	var d  float64 = (x/y)
	return a, b, c, d 
}

func pcalc(x, y *float64)(float64,float64){
	var a  float64 = (*x+*y)
	var b  float64 = (*x-*y)
	return a, b
}

func execution1(){
	var num1, num2 float64 = 3,11
	var a,b,c,d float64 = calc(num1,num2)
	fmt.Printf("\n%v + %v = %v" , num1, num2, a)
	fmt.Printf("\n%v - %v = %v" , num1, num2, b)
	fmt.Printf("\n%v * %v = %v" , num1, num2, c)
	fmt.Printf("\n%v / %v = %v" , num1, num2, d)
}

func execution2(){
	var num1, num2 float64 = 7,30
	var a,b float64 = pcalc(&num1,&num2)
	fmt.Printf("\n%v + %v = %v" , num1, num2, a)
	fmt.Printf("\n%v - %v = %v" , num1, num2, b)
}

func funcVariable(){
	calculate := func(val1, val2 float64) float64{
		return (val1 + val2)
	}
	fmt.Println(calculate(1,2))
}

//Closure
func getSeq() func() int{
	i := 0
	return func() int{
		i+=3
		return i
	}
}


// methods:

type CalcNumber struct{
	x, y float64
}

func (calcNumber CalcNumber) Sum() float64{
	return calcNumber.x + calcNumber.y
}

func main(){
	execution1()
	execution2()
	funcVariable()

	nextNumber := getSeq()
	for i := 0; i < 10; i++ {
		fmt.Println(nextNumber())
	}

	calc1 := CalcNumber{x:2, y:3} 
	fmt.Println(calc1.Sum())
}
