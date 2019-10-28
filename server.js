const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/cursonode');

requireDir('./src/models');

const Product =  mongoose.model('Product');

app.use('/api',require('./src/routes'));


app.listen(3001);