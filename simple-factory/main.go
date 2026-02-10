package main

import "fmt"

func main() {
	truck, _ := getVehicle("truck")
	bike, _ := getVehicle("bike")

	printDetails(truck)
	printDetails(bike)
}

func printDetails(v IVehicle) {
	fmt.Printf("Name: %s", v.getName())
	fmt.Println()
	fmt.Printf("Horse Power: %d", v.geHorsePower())
	fmt.Println()
}
