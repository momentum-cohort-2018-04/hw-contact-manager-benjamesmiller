const users = [
  {id: 1, username: 'Vader', password: 'father'},
  {id: 2, username: 'Emperor', password: 'doit'}
]

const findByUsername = (username) => {
  return users.find(user => user.username === username)
}

module.exports = {
  findByUsername
}
