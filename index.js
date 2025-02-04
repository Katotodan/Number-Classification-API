const express = require("express")
const cors = require("cors")

const router = require("./router")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/", router)

app.listen("5000", ()=> console.log("Server running on port 5000"))