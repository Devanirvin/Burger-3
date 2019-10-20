  
var orm = require('../config/orm.js');

var burger = {
	selectAll: function {
		orm.All('burgers', function (res) {
			cb(res);
		});
	},

     insertOne: function (cols, vals) {
		orm.insert('burgers', cols, vals, function (res) {
			});
	},
     updateOne: function (objColVals, condition) {
		orm.update('burgers', objColVals, condition, function (res) {
		});
	}
};

module.exports = burger;