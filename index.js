const App = require("./App")

App.createUser("viviane@email.com", "Viviane Aguiar")
App.createUser("rachel@email.com", "Rachel Silva")
App.createUser("monica@email.com", "Monica Freitas")

App.deposit("viviane@email.com", 100)

App.transfer("viviane@email.com", "rachel@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("monica@email.com", 2000, 24)

console.log(App.findUser("viviane@email.com"))
console.log(App.findUser("viviane@email.com").account)

console.log(App.findUser("rachel@email.com"))
console.log(App.findUser("rachel@email.com").account)

console.log(App.findUser("monica@email.com"))
console.log(App.findUser("monica@email.com").account)
console.log(App.findUser("monica@email.com").account.loans[0].installments)