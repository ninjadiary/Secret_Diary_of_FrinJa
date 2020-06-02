/*
	Author: secretdiary.ninja
	License: (CC BY-SA 4.0) 
 * */

setTimeout(function(){
	Java.perform(function(){
		
		console.log("Find the class which inherits the ProxySelector");
		
		// default
		var proxySelector = Java.use("java.net.ProxySelector");		// replace this with custom one, if there is any
		
		proxySelector.select.implementation = function(url){
			ret =  this.select.call(this, url);
			console.log(ret + " select("+url+")");
			return ret;
		}
		
		proxySelector.setDefault.implementation = function(ps){
			this.setDefault.call(this, ps);
			console.log("setDefault("+ps+")");
		}
		
		proxySelector.getDefault.implementation = function(){
			ret = this.getDefault.call(this);
			console.log(ret + " getDefault()");
			return ret;
		}
		
		proxySelector.connectFailed.implementation = function(uri, socketAddress, ioexception){
			this.connectFailed.call(this, uri, socketAddress, ioexception);
			console.log("connectFailed("+uri+", "+socketAddress+", "+ioexception+")");
		}
		
	});
},0);
