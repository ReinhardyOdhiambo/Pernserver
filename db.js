const Pool =require("pg").Pool;

const pool=new Pool({
    user :"postgres",
    password: "one2three4five",
    host:"localhost",
    database:"perntodo"

});

module.exports = pool;