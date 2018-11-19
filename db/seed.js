const Reviews = require('./Review.js');
const db = require('./index.js');
const faker = require('faker');

const {DocumentStore} = require('ravendb');
const store = new DocumentStore('http://localhost:8080', 'test');
store.initialize();
const session = store.openSession();
const bulkInsert = store.bulkInsert();

async function bulk() {
  for (let c = 1; c <= 1000000; c++) {
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
      record.id = 'test/';
      record.documentId = 'test/';
      
      await bulkInsert.store(record)
        // .then(() => bulkInsert.saveChanges())
        // .catch((err) => {console.log(err, 'problem with DB')})
    }
  }
  await bulkInsert.finish();
}

bulk();

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