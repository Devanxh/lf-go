package main

type Truck struct {
	Vehicle
}

func newTruck() IVehicle {
	return &Truck{
		Vehicle: Vehicle{
			name:       "truck",
			horsePower: 5000,
		},
	}
}
