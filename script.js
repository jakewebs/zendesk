/*
	This file takes in login credentials as a command-line argument and calls process.py using Node.js to 
	get the tickets if the credentials were correct.

	Then, it processes the data.
*/
let email = process.argv[2];
let token = process.argv[3];

const child_process = require('child_process');
const output = child_process.spawn('python3', ['process.py', email, token]);
output.stdout.on('data', function (data) {
	console.log(data.toString());
});
