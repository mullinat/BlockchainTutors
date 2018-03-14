const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Get your blockchain tutor here at BlockahinTutors!'))
app.use('/src', express.static('src'))
app.listen(3042, () => console.log('Example app listening on port 3042!'))