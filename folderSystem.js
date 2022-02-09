const fs = require("fs");

fs.mkdir("tutorial", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder successfully created!");

    // fs.rmdir("tutorial", (err) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("Folder successfully removed!");
    //   }
    // });

    fs.writeFile(
      "./tutorial/example.txt",
      "This is an example of how to write into a file.",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File successfully created");
          fs.readFile("./tutorial/example.txt", "utf8", (err, file) => {
            if (err) console.log(err);
            else console.log(file);
          });
        }
      }
    );
  }
});
