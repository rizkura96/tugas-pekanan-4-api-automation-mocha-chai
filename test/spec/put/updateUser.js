const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBiYTg3YjFmLWUxZDctNDdiOS1hZGM4LWI5MWYxOWJmY2M2ZSIsImNvbXBhbnlJZCI6ImJjZTE4YTE3LTU5MTUtNGI4OS1iNDU1LTMxMWFjNGVlMjEzNiIsImlhdCI6MTY4NzcwNTA5NH0.8vWkLUUhEYBTBs2p26NT-qjCsCEoZN8Lx6rJBGrdcy8"
describe("login", function(){
    it("(+) Update user with valid path id", async function(){
        const response = await request
                        .put("/users/6790fe1a-4555-424b-955a-e0c78fd96b98")
                        .send({
                            "name": "update-user",
                            "email": "user@example.com"
                        })
                        .set({
                            Authorization : AUTH,
                            Accept : "application/json"
                        });
        expect(response.statusCode).to.eql(200);
        expect(response.body.status).to.eql("success");
        expect(response.body.message).to.eql("User berhasil diupdate");
    })

    it("(-) Update user with invalid path id", async function(){
        const response = await request
                        .put("/users/xxxxxxx")
                        .send({
                            "name": "update-user",
                            "email": "user@example.com"
                        })
                        .set({
                            Authorization : AUTH,
                            Accept : "application/json"
                        });
        expect(response.statusCode).to.eql(404);
        expect(response.body.status).to.eql("fail");
        expect(response.body.message).to.eql("id tidak valid");
    })
})