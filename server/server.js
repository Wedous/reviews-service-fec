const express = require('express');
const bodyParser = require('body-parser');
const Reviews = require('../db/Review.js');
const cors = require('cors');
//const db = require('../db/index.js');

const app = express();
const PORT = 8000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

// get the records of reviews from db (all for now)
app.get('/reviews/:focalCourse', function(req, res) {
  
  // console.log(req.query, 'query', new Date)
  let courseId = Number(req.params.focalCourse) || 15
  console.log(courseId, 'courseId', new Date)
  Reviews
    .find({course: courseId})
    .sort({'createdAt': -1})
    .limit(Number(req.query.showNumber))
    .exec(function(error, reviews){
      if (error){
        console.log('ERROR, failed to read reviews from the DB', error)
      }
        res.status(200).send(JSON.stringify(reviews))
    })
});
// app.get('reviews/', function(req, res) {
//   // console.log(req.params.focalCourse, 'params', new Date)
//   // console.log(req.query, 'query', new Date)
//   let courseId = 2
//   console.log(courseId, '<------this is the thing im looking for right now!', new Date)
//   Reviews
//     .find({course: courseId})
//     .sort({'createdAt': -1})
//     .limit(Number(req.query.showNumber))
//     .exec(function(error, reviews){
//       if (error){
//         console.log('ERROR, failed to read reviews from the DB', error)
//       }
//         res.status(200).send(JSON.stringify(reviews))
//     })
// });




//search results

// app.get('/search/:focalCourse', function(req, res) {
//   let courseId = Number(req.params.focalCourse) || 1
//   let search = req.query.search

//   Reviews
//     .find({course: courseId, body: new RegExp(search, 'i') })
//     .sort({'createdAt': -1})
//     .exec(function(error, reviews){
//       if (error){
//         console.log('ERROR, failed to read reviews from the DB', error)
//       }
//         res.status(200).send(JSON.stringify(reviews))
//     })
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});