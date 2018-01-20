console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors =require('cors')
const morgan =require('morgan')

const app = express()
app.use(parse.urlencoded({extended:false}))
app.use(parse.json())