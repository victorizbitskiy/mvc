import {CounterView} from "./CounterView"

export class CounterModel {
  view: CounterView
  value: number

  constructor(view: CounterView) {
    this.value = 0
    this.view = view
  }

  increment() {
    this.value += 1
    this.view.updateTitle()
  }

  decrement() {
    this.value -= 1
    this.view.updateTitle()
  }

}