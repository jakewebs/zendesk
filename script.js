var express = require("express");
 
 //use the application off of express.
 var app = express();
  //app.use("/zendesk", express.static('./zendesk/'));
 //define the route for "/"
 app.get("/", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/index.html");
 });
 
 //start the server
 app.listen(8080);
 
 console.log("Open http://localhost:8080 in your browser to see the webpage!");

function pull() {
	let email = document.getElementById("email").value;
	let token = document.getElementById("token").value;
	//let email = 'jakewebster2023@berkeley.edu'
	//let token = '7bpia9Ypln87GZOAXgnGRIKLQrD7p8rpy6aQONTL'
	//let token = 'blah'
	//console.log(email);
	//console.log(token);
	/*define(['require'], function (require) {
		console.log("test2");
		const { spawn } = require('child_process').spawn;
		const pyProcess = spawn('python', ['process.py', email, token]);
		
		return {
			pyProcess.stdout.on('data', (data) => {
	    		// Do something with the data returned from python script
	    		console.log(data);
	    		console.log("hi");
	    		res.send(data.toString());
			});
		}
	}); 
	//const { spawn } = require('child_process').spawn;
	

	require(["child_process"], function (cp) {
    	var spawn = cp.spawn;
    	const pyProcess = spawn('python', ['process.py', email, token]);
    	pyProcess.stdout.on('data', (data) => {
		    // Do something with the data returned from python script
		    console.log(data);
		    console.log("hi");
		    res.send(data.toString());
		});
	});
		
	
	console.log("test"); */

	//const {execSync} = require('child_process')
	//const output = execSync('python ./process.py')
	//const data = JSON.parse(output)
	//const {execFile} = require('child_process')
	//const output = execFile('python ./process.py', [email, token])
	//const data = JSON.parse(JSON.stringify(output))
	const child_process = require('child_process');
	const output = child_process.spawn('python3', ['process.py', email, token]);
	output.stdout.on('data', function (data) {
		console.log(data.toString());
	});
	//console.log(output)
	//const data = JSON.parse(output)
	//console.log(output) // {"A": 0, "B": 1, ...}

    //const { spawn } = require('child_process').spawn;
		
	
	/*
	const http = require('http')

	const hostname = '127.0.0.1'
	const port = 3000

	const server = http.createServer((req, res) => {
	  res.statusCode = 200
	  res.setHeader('Content-Type', 'text/plain')
	  res.end('Hello World\n')
	})

	server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`)
	}) */
}