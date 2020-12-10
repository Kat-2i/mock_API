const faker = require("faker");

function generateComments(){

    let comments = []

    for(let id = 1; id<10; id++){
        let text = faker.lorem.text()
        let date = faker.date.past()

        comments.push({
            "id": id,
            "text": text,
            "date": date,
            "user": null
        })
    }
    return {"comments": comments}
}
module.exports = generateComments;