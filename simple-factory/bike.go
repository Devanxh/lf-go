package main

type Bike struct {
	Vehicle
}

func newBike() IVehicle {
	return &Bike{
		Vehicle: Vehicle{
			name:       "bike",
			horsePower: 300,
		},
	}
}
