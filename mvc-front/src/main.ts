
// const counterView1 = new CounterTwoView(document.getElementById('counter1')!)
// const counterView2 = new CounterTwoView(document.getElementById('counter2')!)

import { UsersModel } from "./modules/users/UserModel"
import { UsersController } from "./modules/users/UsersController"
import { UserView } from "./modules/users/UsersView"

// counterView1.mount()
// counterView2.mount()

const usersModel = new UsersModel()
await usersModel.fetchUsers()
const usersController = new UsersController(usersModel)
const usersView = new UserView(document.getElementById('users')!, usersController)

usersView.mount()