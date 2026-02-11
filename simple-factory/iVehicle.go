package main

type IVehicle interface {
	setName(name string)
	setHorsePower(power int)
	getName() string
	getHorsePower() int
}
