const nr = require('newrelic')
const express = require('express');
const bodyParser = require('body-parser');
const Reviews = require('../db/Review.js');
const cors = require('cors');
const pg = require('pg');
const now = require('performance-now');
const t0 = now();
var ExpressCassandra = require('express-cassandra')

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

// cassandra Try
// var models = ExpressCassandra.createClient({
//   clientOptions: {
//     contactPoints: ['127.0.0.1'],
//     protocolOptions: { port: 9042 },
//     keyspace: 'sdc',
//     queryOptions: {consistency: ExpressCassandra.consistencies.one}
//   },
//   ormOptions: {
//       defaultReplicationStrategy : {
//           class: 'SimpleStrategy',
//           replication_factor: 1
//       },
//       migration: 'safe',
//   }
// });

// var MyModel = models.loadSchema('reviews', {
//   fields: {
//     numb: 'int',
//     count: 'int',
//     stars: 'int',
//     body: 'text',
//     author: 'text',
//     created: 'text',
//     reported: 'text',
//     washelpful: 'text',
//   },
//   key: ["numb"]
// })

// MyModel.syncDB(function(err, result) {
//   if (err) throw err;
// });

// app.get('/reviews/:focalCourse', function(req, res) {
//   let courseId = Number(req.params.focalCourse) || 15
//   models.instance.reviews.findOne({numb: 25000000}, function(err, data) {
//     if (err) {
//       console.log(err)
//     } else {
//       const t1 = now();
//       console.log(t1 - t0, 'miliseconds', JSON.stringify(data));
//       res.status(200).send(JSON.stringify(data))
//     }
//   })
// });



// PostGres Try
var config = {
  user: '', //env var: PGUSER 
  database: 'postgres', //env var: PGDATABASE 
  password: '', //env var: PGPASSWORD 
  host: '127.0.0.1', // Server hosting the postgres database 
  port: 5432, //env var: PGPORT 
  max: 10, // max number of clients in the pool
};
const pool = new pg.Pool(config);


app.get('/reviews/:focalCourse', function(req, res) {
   
  pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack);
  });

  let courseId = Number(req.params.focalCourse) || 15
  const query = `SELECT * FROM pgtest6 WHERE id = 25000000`;
  // const query = `explain analyze select * from pgtest6`;
  return pool.query(query)
    .then(result => {const t1 = now(); console.log(t1 - t0, 'miliseconds'); console.log(result, 'the result')})
    .then(final => res.status(200).send(JSON.stringify(final)))
});



// MAX'S WORKING GET
// get the records of reviews from db (all for now)
// app.get('/reviews/:focalCourse', function(req, res) {
//   // console.log(req.query, 'query', new Date)
//   let courseId = Number(req.params.focalCourse) || 15
//   console.log(courseId, 'courseId', new Date)
//   Reviews
//     .find({course: courseId})
//     .sort({'createdAt': -1})
//     .limit(Number(req.query.showNumber))
//     .exec(function(error, reviews){
//       if (error){
//         console.log('ERROR, failed to read reviews from the DB', error)
//       }
//         const t1 = now(); 
//         console.log(t1 - t0, 'miliseconds')
//         res.status(200).send(JSON.stringify(reviews))
//     })
// });





// OLD OLD OLD
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