const http = require("http");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("Hello, world!");
      res.end();
    } else {
      res.write("using another domain");
      res.end();
    }
  })
  .listen("3000");

http
  .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", (resp) => {
    let data = "";

    // A chunk of data has been received.
    resp.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      console.log(JSON.parse(data).explanation);
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
