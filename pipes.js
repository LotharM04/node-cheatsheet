const fs = require("fs");
const zlib = require("zlib"); //for compression of files
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

//const readStream = fs.createReadStream("./example.txt", "utf8");
//const writeStream = fs.createWriteStream("./example2.txt");
//readStream.pipe(writeStream);

//for compression
//const writeStream1 = fs.createWriteStream("./example2.txt.gz");
//readStream.pipe(gzip).pipe(writeStream1);

//for unzip
const readStream = fs.createReadStream("./example3.txt.gz");
const writeStream1 = fs.createWriteStream("./uncompressed.txt");
readStream.pipe(gunzip).pipe(writeStream1);
