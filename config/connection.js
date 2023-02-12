require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    sequelize.authenticate().then(() =>{
      console.log("connection succesful");
    }).catch((err) => {
      console.log(err, 'problem connecting')
    })
module.exports = sequelize;
