import {CounterController} from "./CounterController";
import { CounterModel } from "./CounterModel";

export class CounterView {
  controller: CounterController
  model: CounterModel
  root: HTMLElement

  private title: HTMLElement
  private incrementButton: HTMLElement
  private decrementButton: HTMLElement

  constructor(root: HTMLElement){
    this.root = root
    this.model = new CounterModel(this)
    this.controller = new CounterController(this.model)

    this.title = document.createElement('button')
    this.title.innerText = `Value = 0`

    this.incrementButton = document.createElement('button')
    this.incrementButton.innerText = `increment`
    this.decrementButton = document.createElement('button')
    this.decrementButton.innerText = `decrement`

    this.bindListeners()
  }

  private bindListeners(){
    this.incrementButton.addEventListener('click', this.controller.handleIncrement.bind(this))
    this.decrementButton.addEventListener('click', this.controller.handleDecrement.bind(this))
  }

  public updateTitle() {
    this.title.innerText = `Value = ${this.model.value}`
  }

  public render() {
    this.root.appendChild(this.title)
    this.root.appendChild(this.incrementButton)
    this.root.appendChild(this.decrementButton)
  }
}