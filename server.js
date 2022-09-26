import express  from "express";
import products from "./routes/products.js";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello")
})

app.use("/products", products)


app.listen(6000, ()=>console.log("Port is listening: 6000"))