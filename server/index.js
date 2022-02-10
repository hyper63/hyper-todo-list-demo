const express = require('express')
const app = express();
const path = require('path')

const { todoRouter } = require('./routes')

const PORT = 3010;

// serve CRA built output
app.use(express.static(path.resolve(__dirname, '../build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/todos', todoRouter);

app.get('/api', (req, res) => {
    res.json({ message: 'Hello World' })
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})