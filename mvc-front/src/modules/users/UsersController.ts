import { SortField, SortOrder, UsersModel } from "./UserModel"

export class UsersController {
  model: UsersModel

  constructor(model: UsersModel) {
    this.model = model
  }

  public handleCreate(username: string, age: number) {
    console.log('handleCreate');
    if (!username || !age) {
      throw Error('Укажите username и age')
    }
    return this.model.createUser(username, age)
  }

  public hadnleSort(field: SortField, order: SortOrder) {
    console.log('handleSort');
    if (!field) {
      throw Error('Укажите поле сортировки')
    }
    return this.model.sortUsers(field, order)
  }

  public get users() {
    return this.model.users
  }
}