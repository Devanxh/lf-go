package main

type Bike struct {
	Vehicle
}

func newBike () IVehicle {
	return &bike {
		Vehicle: Vehicle{
			name: "bike",
			horsePower: 300
		}
	}
}