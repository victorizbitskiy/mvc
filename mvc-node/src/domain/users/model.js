let users = [
  { id: '1', username: 'Ulbi TV', age: 23 }
]

module.exports = {
  create: ({ username, age }) => {
    const newUser = {
      username,
      age,
      id: String(Date.now())
    }

    if (!users.find(user => user.username === user)) {
      users.push(newUser)
    } else {
      throw new Error('Пользователь уже существует')
    }

    return newUser
  },
  removeById: ({ id }) => {
    const userIndex = users.findIndex(user => user.id === id)

    if (userIndex === -1) {
      throw new Error('Пользователь не найден')
    }

    users.splice(userIndex, 1)

    return id
  },
  removeByUserName: ({ username }) => { },
  getAll: () => {
    return users
  },
  getById: ({ id }) => {
    return users.find(user => user.id === id)
  },
}