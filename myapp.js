const dotenv = require('dotenv');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const result = dotenv.config();
    if (result.error) {
        throw result.error;
    }
    console.log(result.parsed);
    // console.log(process.env.DB_USER);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))