import { CounterTwoModel } from "./CounterTwoModel";
import { Controller } from "../../types/controller";

export class CounterTwoController implements Controller {
  model: CounterTwoModel

  constructor() {
    this.model = new CounterTwoModel();
  }

  handleIncrement() {
    console.log('increment', this.model);
    return this.model.increment()
  }

  handleDecrement() {
    console.log('decrement', this.model);
    return this.model.decrement()
  }
}