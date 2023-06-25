const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("login", function(){
    it("(+) Login with valid json request body", async function(){
        const response = await request
                        .post("/authentications")
                        .send({
                            "email" : "kopikenangan@gmail.com",
                            "password" : "Kopi123#"
                        });
        expect(response.statusCode).to.eql(201);
        expect(response.body.status).to.eql("success");
        expect(response.body.message).to.eql("Authentication berhasil ditambahkan");
    })

    it("(-) Login with invalid json request body", async function(){
        const response = await request
                        .post("/authentications")
                        .send({
                            "email": "kopikenangan@gmail.comdgdg",
                            "password": "Kopi123dfdsfa#"
                        });
        expect(response.statusCode).to.eql(400);
        expect(response.body.status).to.eql("fail");
        expect(response.body.message).to.eql("\"email\" must be a valid email");
    })
})