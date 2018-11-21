const Reviews = require('./Review.js');
const faker = require('faker');
const now = require('performance-now');

const {DocumentStore} = require('ravendb');
const store = new DocumentStore('http://localhost:8080', 'test4');
store.initialize();
const session = store.openSession();
const bulkInsert = store.bulkInsert();

// for (let c = 1; c <= 100; c++) {
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
//     record.authorfImgUrl = faker.image.avatar();
//     record.created = faker.date.past();
//     record.wasHelpful = helpful;
//     record.reported = reported;
//     record.id = 'test3/';
//     record.documentId = 'test3/';
    
//     bulkInsert.store(record)
//       .then(() => bulkInsert.saveChanges())
//       .catch((err) => {console.log(err, 'problem with DB')})
//   }
// }
// bulkInsert.finish(() => {
//   const t1 = now();
//   console.log(`${t1 - t0} milliseconds to finish`);
// });


for (let c = 1; c <= 100; c++) {
  let rand = Math.floor(Math.random() * 20 + 20);
  for (let i = 0; i < rand; i++) {

    let record = {};
    let star = Math.floor(Math.random() * 5 + 1);
    let helpful = Math.floor(Math.random() * 20) * (Math.random() < 0.1 ? -1 : 1);
    let reported = Math.random() < 0.01 ? true : false;
    
    record.stars = star;
    record.course = c;
    record.body = faker.lorem.paragraph();
    record.author = faker.name.findName();
    record.authorImgUrl = faker.image.avatar();
    record.created = faker.date.past();
    record.wasHelpful = helpful;
    record.reported = reported;
    
    session.store(record)
      .then((user) => console.log(user))
      .then(() => session.saveChanges())
      .catch((err) => {console.log(err, 'problem with DB')})
  }
}