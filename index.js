const PORT = 8008
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://www.thejournal.ie/'

axios(url)
    .then(response => {
        const html = response.data
        console.log(html)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))