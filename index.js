const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors());

const port = 5000;

app.get('/', (req, res) => {
    res.send('hello from my third node and express and nodemon')
})

const users = [
    { id: 0, name: 'shabana', email: "shabana@gmail.com" },
    { id: 1, name: 'shabnoor', email: "shabnoora@gmail.com" },
    { id: 2, name: 'shabnaz', email: "habnaz@gmail.com" },
    { id: 3, name: 'bobita', email: "sbobita@gmail.com" },
    { id: 4, name: 'moushumi', email: "sbobita@gmail.com" }
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/users', (req, res) => {
    const search = req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})

app.listen(port, () => {
    console.log('listening to', port)
})