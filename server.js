const express = require('express');
const routes = require('./routes');
// import sequelize connection
// const sequelize = require('./config/connection');
const seedAll = require("./seeds/index.js")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//This is code i added myself because i could not make the sequelize .sync function work so i just manually imported the seedall function from the seeds index 
//The seeds method is already seeding and syncing the db so i figured using it was just as good i just had to stop the process exit 
//I wrapped it all in a .then because i needed it to seed the db then wait and then listen 
seedAll().then(() => {
  app.listen(PORT, () => {
 
console.log("All models were synchronized successfully.");
  console.log(`App listening on port ${PORT}!`);
});
})
// sync sequelize models to the database, then turn on the server

