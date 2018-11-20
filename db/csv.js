const Reviews = require('./Review.js');
const db = require('./index.js');
const faker = require('faker');
var csv = require('fast-csv');
var fs = require('fs');

const {DocumentStore} = require('ravendb');
const store = new DocumentStore('http://localhost:8080', 'test');
store.initialize();
const session = store.openSession();
const bulkInsert = store.bulkInsert();

var csvStream = csv.createWriteStream({headers: true}),
  writableStream = fs.createWriteStream('./list.csv')


writableStream.on("finish", function(){
  console.log('DONE!');
})

const records = [];

csvStream.pipe(writableStream);

for (let c = 0; c <= 1000000; c++) {
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
      wasHelpful: helpful,
      reported: reported,
      id: 'test/',
      documentId: 'test/'
    })
    
    // record.stars = star;
    // record.course = c;
    // record.body = faker.lorem.paragraph();
    // record.author = faker.name.findName();
    // record.authorImgUrl = faker.image.avatar();
    // record.created = faker.date.past();
    // record.wasHelpful = helpful;
    // record.reported = reported;
    // record.id = 'test/';
    // record.documentId = 'test/';
  }
}

csvStream.end();

// for (let c = 100; c <= 300; c++) {
//   let rand = Math.floor(Math.random() * 20 + 20);
//   for (let i = 0; i < rand; i++) {

//     let record = {};
//     let star = Math.floor(Math.random() * 5 + 1);
//     let helpful = Math.floor(Math.random() * 20) * (Math.random() < 0.1 ? -1 : 1);
//     let reported = Math.random() < 0.01 ? true : false;
    
//     record.stars = star;
//     record.course = c;
//     record.body = faker.lorem.paragraph();
//     record.author = faker.name.findName();
//     record.authorImgUrl = faker.image.avatar();
//     record.created = faker.date.past();
//     record.wasHelpful = helpful;
//     record.reported = reported;
    
//     session.store(record)
//       .then((user) => console.log(user))
//       .then(() => session.saveChanges())
//       .catch((err) => {console.log(err, 'problem with DB')})
//   }
// }