const fs = require("fs");

// fs.writeFile(
//   "example.txt",
//   "This is an example of how to write into a file.",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File successfully created");
//       fs.readFile("example.txt", "utf8", (err, file) => {
//         if (err) console.log(err);
//         else console.log(file);
//       });
//     }
//   }
// );

// fs.rename("example.txt", "example2.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("Successfully renamed file");
// });

// fs.appendFile("example2.txt", " - This is appended data", (err) => {
//   if (err) console.log(err);
//   else console.log("Successfully modified file");
// });

fs.unlink("example2.txt", (err) => {
  if (err) console.log(err);
  else console.log("Successfully deleted file");
});
