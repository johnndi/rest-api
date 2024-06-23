import express from "express";
import productRouter from "./products/products.router.js";
const app = express ();

app.use (express.json());
app.use("/products",productRouter)


app.listen(5000, () => {
    console.log("localhost running on port 5000");
    });
    