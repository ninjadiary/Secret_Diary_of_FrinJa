/*
	Author: secretdiary.ninja
	License: (CC BY-SA 4.0) 
 * */

setTimeout(function(){
	Java.perform(function(){
		
		var sock = Java.use("java.net.Socket");
		
		// Socket.bind()
		sock.bind.implementation = function(localAddress){
			console.log("Socket.bind("+localAddress.toString()+")");
			sock.bind.call(this, localAddress);
		}
		
		// Socket.connect(endPoint)
		sock.connect.overload("java.net.SocketAddress").implementation = function(endPoint){
			console.log("Socket.connect("+endPoint.toString()+")");
			sock.connect.overload("java.net.SocketAddress").call(this, endPoint);
		}
		
		// Socket.connect(endPoint, timeout)
		sock.connect.overload("java.net.SocketAddress", "int").implementation = function(endPoint, tmout){
			console.log("Socket.connect("+endPoint.toString()+", Timeout: "+tmout+")");
			sock.connect.overload("java.net.SocketAddress", "int").call(this, endPoint, tmout);
		}
		
		// Socket.getInetAddress()
		sock.getInetAddress.implementation = function(){
			ret = sock.getInetAddress.call(this);
			console.log(ret.toString()+" Socket.getInetAddress()");
			return ret;
		}
		
		// Socket.getInputStream()
		sock.getInputStream.implementation = function(){
			console.log("Socket.getInputStream()");
			return sock.getInputStream.call(this);
		}
		
		// Socket.getOutputStream()
		sock.getOutputStream.implementation = function(){
			console.log("Socket.getOutputStream()");
			return sock.getOutputStream.call(this);
		}
		
	});
},0);
