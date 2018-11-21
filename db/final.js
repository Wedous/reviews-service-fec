var csv = require('./csv-sql');
var importCvs = require('./importCvs');

var x = 1;
var y = 10000;

function csvMaster() {
  csv(x, y);
  y = y + 10000;
  x = x + 10000;
}

while (y < 100000) {
  csvMaster();
}



