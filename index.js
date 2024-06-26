const express = require("express")
const mongoose = require("mongoose")
const app = express()
const dotEnv = require("dotenv")
const vendorRouter = require("./Routes/vendorRoutes")
const bodyparser = require("body-parser")
const firmRoutes = require("./Routes/firmRoutes")
const productRouters = require("./Routes/productRoutes")
const cors = require("cors")
const path = require("path")
const PORT = process.env.PORT || 4000

dotEnv.config()
app.use(cors())

mongoose.connect(process.env.Mongodb_URI).then(() => {
    console.log("MongoDB connected successfully!");
})
    .catch((error) => {
        console.log("MongoDB not connected!", error)
    })


app.use(bodyparser.json())
app.use("/vendor", vendorRouter)
app.use("/firm", firmRoutes)
app.use("/product", productRouters)
app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
    console.log(`server started and running ${PORT}`);
})


