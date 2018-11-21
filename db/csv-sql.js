const Reviews = require('./Review.js');
const db = require('./index.js');
const faker = require('faker');
var csv = require('fast-csv');
var fs = require('fs');
var importCvs = require('./importCvs');

function csvMaker(start, end) {
  var csvStream = csv.createWriteStream({headers: true}),
  writableStream = fs.createWriteStream('./postgres-list.csv')

  writableStream.on("finish", function(){
    console.log('POSTGRES CSV DONE!');
  })

  csvStream.pipe(writableStream);

  for (let c = start; c <= end; c++) {
    let rand = Math.floor(Math.random() * 20 + 20);
    for (let i = 0; i < rand; i++) {

      let record = {};
      let star = Math.floor(Math.random() * 5 + 1);
      let helpful = Math.floor(Math.random() * 20) * (Math.random() < 0.1 ? -1 : 1);
      let reported = Math.random() < 0.01 ? true : false;

      csvStream.write({
        stars: star,
        course: c,
        body: faker.lorem.paragraph(),
        author: faker.name.findName(),
        created: faker.date.past(),
        washelpful: helpful,
        reported: reported
      })
    }
  }

  csvStream.end();
}

module.exports = csvMaker;