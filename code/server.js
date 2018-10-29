import express from "express"
import bodyParser from 'body-parser'

const app = express()
const contactsJson = require("./contacts.json")

app.get("/", (req, res) =>
  res.send("Hello World and other planets!")
)

app.listen(3000, () =>
  console.log("Example app listening on port 3000!")
)

app.get("/contacts", (req, res) => {
  res.send(contacts)
  console.log(contacts)
})


app.get("/contacts/:id", (req, res) => {
  const id = parseInt(req.params.id)
  console.log(id);
  const individual = contactsJson.contacts.filter(item => item.id == id)
  if (individual){
    res.send(individual)
  } else {
    res.status(404)
    res.send("Page not found")}
  })

  app.get("*", (req, res) => {
   res.send("Page not found")
  })


// catch all other pages
//app.get(“*”, (req, res) => {
 //res.send(“Path not found”)
//})
