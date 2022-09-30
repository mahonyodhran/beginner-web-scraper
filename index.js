const PORT = 8008
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://www.tesco.ie/groceries/en-IE/search?query=chicken'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.product-list--list-item',  html).each(function(){
            const title =  $(this).text()
            const titleProper = $(this).find('span').text()
            const url = 'https://www.tesco.ie/' + $(this).find('a').attr('href')
            articles.push({
                titleProper,
                url
            })
        })
        console.log(articles)

    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))