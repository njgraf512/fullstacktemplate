// Bad filename. Rename it as something meaningful: like apiEndpoints.js
// This file should also live under the server directory.

const fs = require('fs');
// db is never used and that sticks out like a sore thumb to anyone that has a decent IDE.
// Reading further it becomes more clear that you don't actually use the DB at all.
const db = require('../models');

module.exports = {
  // For an api endpoint, I would expect to see an actual endpoint string here.
  // Would also be good to have more than one endpoint (like a POST).
  get: (req, res) => {
    // Remove all `console.log`'s from production code. Look into a logging mechanism/package instead for this sort of thing.
    console.log('getting data');
    fs.readFile('./data/data.txt', 'utf8', (err, data) => {
      if (err) {
        // You need to respond to the client in an appropriate way under this error condition.
        // Most likely, send an error code 500. Otherwise, as written, you are sending what will most
        // likely be `undefined` back to the client like nothing went wrong.
        console.log(err);
      }

      console.log(data);
      res.send(data);
    });
  },
};
