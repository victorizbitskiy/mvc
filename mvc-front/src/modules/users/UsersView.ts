import { UsersController } from "./UsersController";
import { SortField, SortOrder, User } from "./UserModel";
import "./user.css"

export class UserView {
  controller: UsersController
  root: HTMLElement

  private form: HTMLDivElement
  private users: HTMLElement
  private usernameInput: HTMLInputElement
  private ageInput: HTMLInputElement
  private createButton: HTMLButtonElement

  private sortSelectors: HTMLDivElement
  private fieldSelect: HTMLSelectElement
  private orderSelect: HTMLSelectElement
  private sortButton: HTMLButtonElement

  constructor(root: HTMLElement, controller: UsersController) {
    this.root = root
    this.controller = controller

    // this.createUserForm()
    // this.createSortSelectors()
    // this.createUserList()

    // this.bindListeners()
  }

  private onCreate = () => {
    try {
      const newUser = this.controller.handleCreate(this.usernameInput.value, Number(this.ageInput.value))
      this.renderNewUser(newUser)      
    } catch (e) {
      this.showError((e as Error).message)
    }
  }

  private onSortClick = () => {
    const newUsers = this.controller.hadnleSort(this.fieldSelect.value as SortField, this.orderSelect.value as SortOrder)
    this.renderUsers(newUsers)
  }

  private bindListeners(){ 
    this.createButton.addEventListener('click', this.onCreateClick)
    this.sortButton.addEventListener('click', this.onSortClick)
  }

  private showError(message: string) {
    alert(message)
  }

  private getUserElement(user: User){
    return `
      <div class="user">
        <h3>Username = ${user.username}</h3>
        <h5>Age = ${user.age}</h5>
      </div>
      `
  }

  private renderNewUser(user: User) {
    const userNode = document.createElement(`div`)
    userNode.innerHTML = this.getUserElement(user)

    this.users.appendChild(userNode)
  }

  private renderUsers(users: User[]) {
    const usersElement = users.map(user => {
      return this.getUserElement(user)
    })

    this.users.innerHTML = usersElement.join('')
  }

  
}