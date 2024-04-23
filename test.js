const expect = require("chai").expect;
const request = require("request");

describe("Add Two Numbers API", function() {
    const url = "http://localhost:8080/addTwoNumbers/3/5";

    it("should return status 200 to verify API functionality", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("should return 'statusCode' key in body to verify correct response (should be 200)", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.statusCode).to.equal(200);
            done();
        });
    });

    it("should return the result as a number", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.be.a('number');
            done();
        });
    });

    it("should return the result equal to 8", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.equal(8);
            done();
        });
    });

    it("should return the result not equal to 15", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.not.equal(15);
            done();
        });
    });
});

describe("Add Two Strings API", function() {
    const url = "http://localhost:8080/addTwoNumbers/a/b";

    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("should return 'statusCode' key in body to verify correct response (should be 400)", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.statusCode).to.equal(400);
            done();
        });
    });

    it("should return the result as null", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.be.null;
            done();
        });
    });
});
