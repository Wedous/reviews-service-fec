const faker = require('faker');
var fs = require('fs');
const { Readable } = require('stream');
const now = require('performance-now');

const stream = fs.createWriteStream('./list5.csv').on('finish', () => { const t1 = now();
console.log(`${t1 - t0} milliseconds to finish`)});

const t0 = now();
let count = 1;

const inStream = new Readable({
  read() {
      let rand = Math.floor(Math.random() * 20 + 20);
      for (let i = 0; i < rand; i++) {
        let star = Math.floor(Math.random() * 5 + 1);
        let helpful = Math.floor(Math.random() * 20) * (Math.random() < 0.1 ? -1 : 1);
        let reported = Math.random() < 0.01 ? true : false;
        this.push(`${star},${count},${faker.lorem.paragraph()},${faker.name.findName()},${faker.date.past()},${helpful},${reported}\n`)
      }
    count++;
    if (count === 1000) {
      this.push(null);
    }
  }
})


inStream.pipe(stream);