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
// pages
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

// collections
app.get('/beach', (req, res) => {
    res.render('collections/beach')
})
app.get('/clouds', (req, res) => {
    res.render('collections/clouds')
})
app.get('/food', (req, res) => {
    res.render('collections/food')
})
app.get('/nature', (req, res) => {
    res.render('collections/nature')
})
app.get('/night', (req, res) => {
    res.render('collections/night')
})
app.get('/street', (req, res) => {
    res.render('collections/street')
})
app.get('/sunrise', (req, res) => {
    res.render('collections/sunrise')
})
app.get('/sunset', (req, res) => {
    res.render('collections/sunset')
})

// blog-pages
app.get('/personal', (req, res) => {
    res.render('blog-pages/personal')
})
app.get('/tutorial', (req, res) => {
    res.render('blog-pages/tutorial')
})
app.get('/travel', (req, res) => {
    res.render('blog-pages/travel')
})