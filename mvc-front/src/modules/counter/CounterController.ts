import { CounterModel } from "./CounterModel";

export class CounterController {
  model: CounterModel

  constructor(model: CounterModel) {
    this.model = model
  }

  handleIncrement(){
    console.log('increment', this.model);
    this.model.increment()    
  }

  handleDecrement() {
    console.log('decrement', this.model);
    this.model.decrement()
  }
}

