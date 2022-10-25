const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5002;

app.use(cors())

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Courses Server is Running!')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('Courses Server is running on port', port);
})