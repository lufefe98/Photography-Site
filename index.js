// Express Connection and NPM Modules
const express = require('express');
const { parse } = require('path');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');


app.listen(3400, () => {
    console.log("Connected to port 3400")
})





// Express Middleware
app.use(express.json())
app.use(express.urlencoded( {extended: true}))
// app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))

// EJS Connection
app.set('view engine', 'ejs')
app.engine('ejs', ejsMate)

// CSS Link
app.use(express.static(path.join(__dirname, 'public')))







    
// ROUTES
// home
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/collections', (req, res) => {
    res.render('pages/collections')
})
app.get('/blogs', (req, res) => {
    res.render('pages/blogs')
})
app.get('/contact', (req, res) => {
    res.render('pages/contact')
})
app.get('/gallery', (req, res) => {
    res.render('pages/gallery')
})
app.get('/services', (req, res) => {
    res.render('pages/services')
})
app.get('/about', (req, res) => {
    res.render('pages/about')
})

