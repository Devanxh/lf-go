package main

import "fmt"

func main() {
	instance1 := getInstance()
	instance2 := getInstance()

	fmt.Println("Value:", instance1.value)
	fmt.Println("Same instance:", instance1 == instance2)
}
