var sqltest = require('./fw-sqltests.js');

var tasks = [
	[
		"Create a 'App' database",
		"USE App"
	],
	[
		"Using dot syntax, create a 'settings' table in the 'App' database with the specified features",
		"SHOW COLUMNS FROM App.settings WHERE Field = 'email_frequency' AND Type = 'tinyint(2) unsigned'"
	]
];

sqltest.init(tasks, "App");