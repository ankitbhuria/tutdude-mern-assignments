const express = require('express');
const PORT = process.env.PORT || 1000;
const app = express();
const path = require('path');
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', __dirname + '/views');
let items = []
app.get('/', (req, res)=>{
    res.render('index', {todo: items});
})
app.post('/', (req, res)=>{
    let todo = req.body.todo;
    items.push(todo);
    res.redirect('/');
})
app.listen(PORT, ()=>{
    console.log(`Your server has been started on PORT: ${PORT}`);
})
