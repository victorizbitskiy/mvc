import {Model} from "../../types/model"

export class CounterTwoModel implements Model {
  value: number

  constructor() {
    this.value = 0
  }

  increment(){
    this.value += 1
    return this.value
  }

  decrement(){
    this.value -= 1
    return this.value  
  }
}