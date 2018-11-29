var csv = require('fast-csv');
var pool = require('./pgdb');

function importCvs() {
    pool.connect(function(err){
        if(err) {
            console.log(err, 'error connecting to db');
        }
      });

    const queryText =
    `CREATE TABLE IF NOT EXISTS
      pgtest7(
        id UUID PRIMARY KEY,
        stars INT(4) NOT NULL,
        course INT(4) NOT NULL,
        body VARCHAR NOT NULL,
        author VARCHAR NOT NULL,
        created VARCHAR NOT NULL,
        washelpful VARCHAR NOT NULL,
        reported VARCHAR NOT NULL
      )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });

    let csvStream = csv.fromPath("./list-finals.csv", { headers: true })
        .on("data", function(record){
            csvStream.pause();

            let stars = record.stars;
            let course = record.course;
            let body = record.body;
            let author = record.author;
            let created = record.created;
            let washelpful = record.washelpful;
            let reported = record.reported;
    
            pool.query("INSERT INTO pgtest7(stars, course, body, author, created, washelpful, reported) \
            VALUES($1, $2, $3, $4, $5, $6, $7)", [stars, course, body, author, created, washelpful, reported], function(err){
                if(err) {
                    console.log(err);
                }
            });
    
            csvStream.resume();
    
        }).on("end", function(){
            console.log("Job is done!");
        }).on("error", function(err){
            console.log(err);
        });
}



module.exports = importCvs