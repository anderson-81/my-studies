package main

import "fmt"

func main(){
	
	var countryCapitals map[string]string
	countryCapitals = make(map[string]string)

	countryCapitals["Brazil"] = "Brasilia"
	countryCapitals["France"] = "Paris"
	countryCapitals["Japan"] = "Tokyo"
	countryCapitals["USA"] = "Washington"
	countryCapitals["Germany"] = "Berlin"
	countryCapitals["Russia"] = "Moscow"

	delete(countryCapitals,"USA");

	fmt.Println(countryCapitals)		

	for country := range countryCapitals{
		fmt.Printf("\n%v - %v", country, countryCapitals[country])
	}
}