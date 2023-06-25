const request = require ("supertest")("https://kasir-api.belajarqa.com")
//import chai
const expect = require("chai").expect
const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBiYTg3YjFmLWUxZDctNDdiOS1hZGM4LWI5MWYxOWJmY2M2ZSIsImNvbXBhbnlJZCI6ImJjZTE4YTE3LTU5MTUtNGI4OS1iNDU1LTMxMWFjNGVlMjEzNiIsImlhdCI6MTY4NzcwNTA5NH0.8vWkLUUhEYBTBs2p26NT-qjCsCEoZN8Lx6rJBGrdcy8"
describe("Get /users", function() {
    it("(+) Get all user with valid path",async function(){
        const response = await request.get("/users").set({
            Authorization : AUTH,
            Accept : "application/json"
        });
        // console.log(await response.body)

       //assert
       expect(await response.status).to.equal(200)
    })

    it("(-) Get user list with invalid path",async function(){
        const response = await request.get("/usersxxx").set({
            Authorization : AUTH,
            Accept : "application/json"
        });
        // console.log(await response.body)

       //assert
       expect(await response.status).to.equal(404)
    })
})