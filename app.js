const express = require('express');
const exphbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient

const uri = "mongodb://admin:12345678@db:27017";

MongoClient.connect(uri)
    .then(main)
    .catch(console.error)

function main(client) {
    const db = client.db('booksdb');
    const app = express();

    // Configure Handlebars, the view engine
    app.engine('hbs', exphbs({
        defaultLayout: 'main',
        extname: '.hbs'
    }));

    app.set('view engine', 'hbs');
    app.use(express.static('views/images'));


    app.get('/', function (req, res) {
        const category = req.query.category;
        const query = (category !== undefined && category.length > 0) ? { categories: category } : {};

        db.collection('Books')
            .find(query)
            .toArray()
            .then(books => {
                res.render('home', {
                    books
                });
            });
    });

    app.get('/search', function (req, res) {
        // db.users.findOne({"username" : {$regex : ".*son.*"}});
        const key = req.query.q;
        const query = (key !== undefined && key.length > 0) ? { title: { $regex: `.*${key}.*`} } : {};

        db.collection('Books')
            .find(query)
            .toArray()
            .then(books => {
                res.render('home', {
                    books
                });
            });
    });

    app.listen(3000, () => {
        console.log('The web server has started on port 3000');
    });
}