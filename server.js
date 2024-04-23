const express = require("express");
const app = express();

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req, res, next) {
    const firstNumber = parseInt(req.params.firstNumber);
    const secondNumber = parseInt(req.params.secondNumber);
    const result = isNaN(firstNumber) || isNaN(secondNumber) ? null : firstNumber + secondNumber;

    if (result === null) {
        res.status(400).json({ result: null, statusCode: 400 });
    } else {
        res.status(200).json({ result: result, statusCode: 200 });
    }
});

const port = 8080;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
