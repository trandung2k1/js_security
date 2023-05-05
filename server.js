const express = require('express');
const cors = require('cors');
const port = 4000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the server',
    });
});
app.post('/login', (req, res) => {
    return res.status(200).json(req.body);
});
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
