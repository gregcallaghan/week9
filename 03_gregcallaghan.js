var net=require ('net');
//console.log('net',net);
var server=net.createServer(respond);
function respond(socket){
	d=new Date();
	socket.end(d.toString());
}
port=process.argv[2];
console.log('listening of port',port);
server.listen(port);