package main

type Truck struct {
	Vehicle
}

func newTruck () IVehicle {
	return &truck {
		Vehicle: Vehicle{
			name: "truck",
			horsePower: 5000
		}
	}
}