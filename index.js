import express from 'express'

const app = express();

const port = 3000;

app.use(express.json());

let teaData = [];
let nextId = 1;

// add a new Tea
app.post('/teas', (req,res) => {
    const {name,price} = req.body
    const newTea = {id: nextId++, name, price};
    teaData.push(newTea);
    res.status(201);
    res.send(newTea);
});

// get all tea
app.get('/teas',(req,res) => {
    res.status(200);
    res.send(teaData);
});

// get a specific tea
app.get('/teas/:id',(req,res) =>{
   const tea = teaData.find(t => t.id == parseInt(req.params.id));
   res.status(200);
   res.send(tea)
});

// to update data
app.get('/teas:id',(req,res) => {
    const id = parseInt(req.params.id);
    const teaToUpdate = teaData.find(t => t.id == id);

    const {name,price} = req.body;
    teaToUpdate.name = name;
    teaToUpdate.price = price;
    res.status(200).send(teaToUpdate);

});

// delete data
app.delete('/teas:id',(req,res) => {
    const teaData = teaData.filter(tea => tea.id != parseInt(req.params.id));
    res.status(200).send(teaData)
})

/*
app.get('/', (req,res) => {
    res.send("Hello from vishal and Green Tea...")

});

app.get('/ice-tea', (req,res) => {
    res.send("Hello from vishal and Ice tea...")

});

app.get('/instagram', (req,res) => {
    res.send("vishalramreddy")
});
*/

app.listen(port,() => {
    console.log(`Server is running at ${port}...`)

});