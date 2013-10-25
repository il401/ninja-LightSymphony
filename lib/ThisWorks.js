var PORT = 10001;
var HOST = '192.168.0.210';

var dgram = require('dgram');
var message = new Buffer('area_on 5 /');

var client = dgram.createSocket('udp4');

client.on('message', function (message, remote) {

	console.log("message received: "&message);

    });


client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
	if (err) throw err;
	console.log('UDP message sent to ' + HOST +':'+ PORT);
	//count++;
    });
