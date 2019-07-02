package main

import "fmt"

func simpleIf(){
	fmt.Println("***********************************************\nIF:\n")

	var age int = 18

	if(age == 18){
		fmt.Println("You can drive.")
	}
}

func ifNested(){
	fmt.Println("***********************************************\nIF NESTED:\n")

	var age int = 18
	var name string = "Paul"

	if(age > 18){
		if(name == "Paul"){
			fmt.Println("You can drive. Your name is Paul.")
		}
	}
}

func ifElse(){
	fmt.Println("***********************************************\nIF ELSE:\n")

	var age int = 18

	if(age > 18){
		fmt.Println("Adult.")
	}else if((age < 18) && (age > 14)){
		fmt.Println("Teenage.")
	}else{
		fmt.Println("Child.")
	}
}

func ifElseNested(){
	fmt.Println("***********************************************\nIF ELSE NESTED:\n")

	var age int = 18
	var name string = "Paul"

	if(age > 18){
		if(name == "Paul"){
			fmt.Println("You can drive. Your name is Paul.")
		}else{
			fmt.Println("You can drive. Your isn't Paul.")
		}
	}else{
		fmt.Println("Can't drive. Your isn't Paul.")
	}
}

func fSelect(){
	fmt.Println("***********************************************\nTHE SELECT STATEMENT:\n")

	var c1, c2, c3 chan int
   	var i1, i2 int
   	select {
      case i1 = <-c1:
         fmt.Printf("received ", i1, " from c1\n")
      case c2 <- i2:
         fmt.Printf("sent ", i2, " to c2\n")
      case i3, ok := (<-c3):  // same as: i3, ok := <-c3
         if ok {
            fmt.Printf("received ", i3, " from c3\n")
         } else {
            fmt.Printf("c3 is closed\n")
         }
      default:
         fmt.Printf("no communication\n")
   	}    
}


func fSwitch(){
	fmt.Println("***********************************************\nTHE SWITCH STATEMENT:\n")

	var option int = 6
	var color string = ""

	switch option{
		case 1: color = "Green" 
		case 2: color = "Yellow" 
		case 3: color = "Blue" 
		case 4: color = "White" 
		default: color = "Red" 
	}
	switch{
		case color == "Green":
			fmt.Println("Verde")
		case color == "Yellow":
			fmt.Println("Amarelo")
		case color == "Blue":
			fmt.Println("Azul")
		case color == "White":
			fmt.Println("Branco")
		default:
			fmt.Println("Vermelho")
	}
}

func main(){
	simpleIf()
	ifNested()
	ifElse()
	ifElseNested()
	fSelect()
	fSwitch()
}