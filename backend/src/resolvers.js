const User = require('./User');
// const users = [
//     { id: 1, name: 'Diego', email: 'diego@email.com' },
//     { id: 2, name: 'Fernando', email: 'fernando@email.com' }
// ]

module.exports = {
    Query: {
        users : () => User.find(),
        //desestruturacao do id
        user: (_, { id } ) => User.findById(id)
    },

    Mutation: {
        createUser : ( _, { name, email } ) => User.create({name,email})
    }
}