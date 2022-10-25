const express = require('express')
const app = express()
const port = process.env.PORT || 5002;

app.get('/', (req, res) => {
    res.send('Courses Server is Running!')
})

app.listen(port, () => {
    console.log('Courses Server is running on port', port);
})