package main

import "fmt"

// Interface
type calc interface{
	sum() float64
	sub() float64
	mlt() float64
	div() float64
}

// Struct
type Numbers struct{
	x, y float64
}

// Methods
func(num Numbers) sum() float64{
	return num.x + num.y
}
func(num Numbers) sub() float64{
	return num.x - num.y
}
func(num Numbers) mlt() float64{
	return num.x * num.y
}
func(num Numbers) div() float64{
	return num.x / num.y
}

func main(){
	// instances
	n := Numbers{x:3,y:4}

	// Call methods
	fmt.Println(n.sum())
	fmt.Println(n.sub())
	fmt.Println(n.mlt())
	fmt.Println(n.div())
}