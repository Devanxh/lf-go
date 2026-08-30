package main

import "sync"

type Singleton struct {
	value string
}

var instance *Singleton
var once sync.Once

func getInstance() *Singleton {
	once.Do(func() {
		instance = &Singleton{
			value: "Singleton instance",
		}
	})

	return instance
}
