package main

type CheezeTopping struct {
	pizza IPizza
}

func (p *CheezeTopping) getPrice() int {
	pizzaPrice := p.pizza.getPrice()
	return pizzaPrice + 20
}
