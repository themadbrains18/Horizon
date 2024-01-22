const dbConfig = require("../config/config.js");


const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    logging: true,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    port: 3306,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
(async () => {

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    
    db.users = require('./user.model.js')(sequelize, DataTypes);

    // await sequelize.sync({ alter: true });
    // db.sequelize.sync()
    // db.users.sync({ force: true });

})();

module.exports = db;
