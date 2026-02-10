package main

import "fmt"

func getVehicle (vehicleType string) (IVehicle, error) {
	if vehicleType == "truck" {
		return newTruck(), nil
	}

	if vehicleType == "bike" {
		return newBike(), nil
	}

	return nil, fmt.Errorf("wrong vehicle type lol")
}