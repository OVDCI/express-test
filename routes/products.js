import express  from "express";

let router = express.Router();

router.route('/toys')
.get( (req, res) => {
    res.send("This is GET request")
})
.post((req, res) => {
    res.send("This is POST request")
})
.put((req, res) => {
    res.send("This is PUT request")
})
.delete((req, res) => {
    res.send("This is DELETE request")
})




export default router