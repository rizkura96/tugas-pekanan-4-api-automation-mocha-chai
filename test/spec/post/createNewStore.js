const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Register new store", function(){
    it("(+) Register new store  with valid json request body", async function(){
        const response = await request
                        .post("/registration")
                        .send({
                            "name" : "Kopi Kenangan",
                            "email" : "kopikenangan@gmail.com",
                            "password" : "Kopi123#"
                        });
        expect(response.statusCode).to.eql(201);
        expect(response.body.data.name).to.eql("Kopi Kenangan");
        expect(response.body.data.email).to.eql("kopikenangan@gmail.com");
    })

    it("(-) Register new store  with invalid json request body", async function(){
        const response = await request
                        .post("/registration")
                        .send({
                            "name" : "Kopi Kenangan",
                            "email" : "kopikenangan@gmail",
                            "password" : "Kopi123#"
                        });
        expect(response.statusCode).to.eql(400);
        expect(response.body.status).to.eql("fail");
        expect(response.body.message).to.eql("\"email\" must be a valid email");
    })

})