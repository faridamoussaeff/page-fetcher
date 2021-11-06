const request = require('request');
const fs = require('fs');

const path = process.argv[3];
const domain = process.argv[2]; 

request(domain, (error, response, body) => {
  if (error) {
    console.log('error:', error); 
  }
  fs.writeFile(`${path}`, body, function(error){
    if(error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});

// It should take two command line arguments:
// 1. a URL
// 2. a local file path
// It should download the resource at the URL to the local path on your machine. 
//n Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

// There are two operations in this problem which will take an unknown amount of time:

// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
// When you're trying to control the order of asynchronous operations, you can use nested callbacks.