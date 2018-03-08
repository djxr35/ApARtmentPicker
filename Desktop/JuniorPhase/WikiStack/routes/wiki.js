const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var models = require('../models');
var Page = models.Page;
var User = models.User;

router.post('/', function(req, res, next) {

  User.findOrCreate({
    name: req.body.authorName,
    email: req.body.email
  })
    .spread(function(user, createdBoolPage){ // use bluebird - see like minute 10 or something

      return Page.create({ //this is wrong for some reason I think
        title: req.body.title,
        content: req.body.content,
        status: req.body.status
      })
        .then(function(createdPage){
          return createdPage.setAuthor(user);
        });
    })
    .catch(next);

  // var author = User.build({
  //   name: req.body.authorName,
  //   email: req.body.email
  // });

  // author.save()
  //   .then(function(savedAuthor){
  //     console.log(savedAuthor);
  //   })
  //   .catch(next);

  var newPage = Page.build(req.body);

  newPage.save()
    .then(function (){
       res.redirect(newPage.urlTitle);
    })
    .catch(console.error);

});

router.get('/', function(req, res, next) {
  Page.findAll({})
    .then(function(thePages){
      res.render('index', {
        pages: thePages
      });
    })
    .catch(next);
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

// router.get('/:urlTitle', function(req, res, next) {
//   var urlTitleOfPage = req.params.urlTitle;

//   Page.find({
//     where: {
//       urlTitle: urlTitleOfPage
//     }
//   })
//   .then(function(page){
//     if (page === null){
//       return next(new Error('That page was not found!'));
//     }
//     res.render('wikipage', );
//     {page: page}
//   })
//   .catch(next);
// });

module.exports = router;
