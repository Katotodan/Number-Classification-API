const express = require("express")
const axios = require("axios")
const {isPrime, isPerfect, isArmstrong, isEvenOrOdd, sumOfDigits} = require("./controller")

const router = express.Router()

router.get("/api/classify-number", async (req, res) =>{
    try {
        // Get the query param
        const inputNumber = Number(req.query.number);
        
        if(!Number.isInteger(inputNumber)) throw Error("Not a valid number")
        const {data} = await axios.get(`http://numbersapi.com/${inputNumber}/math`)

        res.status(200).json({
            "number": inputNumber,
            "is_prime": isPrime(inputNumber),
            "is_perfect": isPerfect(inputNumber),
            "properties": isArmstrong(inputNumber) ? ["armstrong", isEvenOrOdd(Number(inputNumber))] : [isEvenOrOdd(Number(inputNumber))],
            "digit_sum": sumOfDigits(req.query.number), 
            "fun_fact": data 
        })

    } catch (error) {
        res.status(400).json({
            "number": "alphabet",
            "error": true
        })
        
    }
})

module.exports = router