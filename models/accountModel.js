var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'aaaddd',
  database: 'test' // 对不起，我一不小心把数据库名字和表名起成一样的，你知道就行
});
connection.connect();

/**
 * 根据 username 获取用户信息
 * @param {*} username 
 * @param {*} callback 
 */
exports.findByUsername = function findByUsername(username, callback) {
  connection.query(`select * from account where username='${username}'`, function (err, results, fields) {
    callback(err, results);
  });
}





