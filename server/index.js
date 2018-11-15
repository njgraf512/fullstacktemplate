// Your eslint is complaining here about your use of double quotes, change to single quotes
const app = require("./app");

app.listen(app.get("port"), () => { // Multiline arrow functions should always have curly braces
  console.log(`listening on port ${app.get("port")}...`)
});
