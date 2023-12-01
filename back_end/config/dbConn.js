var mysql = require('mysql');

const connectDB = () => {

    var con = mysql.createConnection({
        host: "localhost",
        user: "kavindu",
        password: "20171k"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
}

module.exports = connectDB