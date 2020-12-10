const faker = require("faker");
const { random } = require("lodash");
const _ = require("lodash")

function generateDataBase() {
    return {
        "users": _.times(5, (n) => {
            return {
                "id": n + 1,
                "name": faker.name.firstName(),
                "email": faker.internet.email()
            }
        }),
        "comments": _.times(10, (n) => {
            return {
                "id": n + 1,
                "text": faker.lorem.sentence()
            }
        })
    }
}
module.exports = generateDataBase;