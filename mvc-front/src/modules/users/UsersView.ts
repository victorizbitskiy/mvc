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

    this.createUserForm()
    this.createSortSelectors()
    this.createUsersList()
    this.bindListeners()
  }

  private onCreateClick = () => {
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

  private renderUsersList = () => {
    const usersElement = this.controller.users.map(user => {
      return this.getUserElement(user)
    })

    this.users.innerHTML = usersElement.join('')
  }

  private bindListeners() {
    this.createButton.addEventListener('click', this.onCreateClick)
    this.sortButton.addEventListener('click', this.onSortClick)
  }

  private showError(message: string) {
    alert(message)
  }

  private getUserElement(user: User) {
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

  private createUsersList() {
    this.users = document.createElement('div')
  }

  private createSortSelectors() {
    this.sortSelectors = document.createElement('div')

    this.fieldSelect = document.createElement('select')
    const usernameOption = document.createElement('option')
    usernameOption.value = 'username'
    usernameOption.innerText = '?????? ????????????????????????'
    const ageOption = document.createElement('option')
    ageOption.value = 'age'
    ageOption.innerHTML = '??????????????'

    this.fieldSelect.add(usernameOption)
    this.fieldSelect.add(ageOption)

    this.orderSelect = document.createElement('select')
    const ascOption = document.createElement('option')
    ascOption.value = 'desc'
    ascOption.innerText = '???? ??????????????????????'
    const descOption = document.createElement('option')
    descOption.value = 'desc'
    descOption.innerText = '???? ????????????????'

    this.orderSelect.add(ascOption)
    this.orderSelect.add(descOption)

    this.sortButton = document.createElement('button')
    this.sortButton.innerText = '??????????????????????'

    this.sortSelectors.appendChild(this.fieldSelect)
    this.sortSelectors.appendChild(this.orderSelect)
    this.sortSelectors.appendChild(this.sortButton)
  }

  private createUserForm() {
    this.form = document.createElement('div')
    this.usernameInput = document.createElement('input')
    this.usernameInput.placeholder = '?????????????? ?????? ????????????????????????'
    this.ageInput = document.createElement('input')
    this.ageInput.placeholder = '?????????????? ??????????????'
    this.createButton = document.createElement('button')
    this.createButton.innerText = '??????????????'
    this.form.appendChild(this.usernameInput)
    this.form.appendChild(this.ageInput)
    this.form.appendChild(this.createButton)
  }

  public mount() {
    this.root.innerHTML = `<h1>????????????????????????</h1>`
    this.root.appendChild(this.sortSelectors)
    this.root.appendChild(this.form)
    this.renderUsersList()
    this.root.appendChild(this.users)
  }

}