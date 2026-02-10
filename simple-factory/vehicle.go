package main

type Vehicle struct {
	name string
	horsePower int
}

func (v* Vehicle) setName (name string) {
	v.name = name
}

func (v* Vehicle) getName () string {
	return v.name
}

func (v* Vehicle) setHorsePower (horsePower int) {
	v.horsePower = horsePower
}

func (v* Vehicle) getHorsePower () int {
	return v.horsePower
}
