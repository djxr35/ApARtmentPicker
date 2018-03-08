const express = require( 'express' );
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const blueBird = require('bluebird');
const router = require('./routes');
const path = require('path');
const app = express();
const models = require('./models');
const env = nunjucks.configure('views', {noCache: true});
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');


app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(volleyball);
app.use(express.static(path.join(__dirname, '/views')));
app.use(bodyParser.urlencoded({extended: true})); // form HTML form submits
app.use(bodyParser.json());// would be for AJAX requests
app.use('/wiki', wikiRouter);
app.use(router);


app.use(function(err, req, res, next) { // four paramaters is for error handling
  console.error(err.stack);
  res.status(err.status || 500).send(err.message);
});//sol added this to other app

//if there's a problem here fo to 2:20 in second vid
//need to change this
models.db.sync({force: true})
.then(function () {
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);

