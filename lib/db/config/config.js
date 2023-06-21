module.exports = {
    HOST: "localhost", //localhost
    USER: "root",
    PASSWORD: '123456Qw',// "tmb@2018#2",
    DB: "horizon",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  };
  
  