/*
	Author: secretdiary.ninja
	License: (CC BY-SA 4.0) 
 * */

setTimeout(function(){
	Java.perform(function(){
		
		/** HttpURLConnection **/
		try{
			var httpurl = Java.use("java.net.HttpURLConnection");
			
			// new HttpURLConnection(URL url);
			try{
				httpurl.$init.implementation = function(url){
					console.log("new HttpURLConnection("+url.toString()+")");
					this.$init.call(this, url);
				}
			}catch(e){}
			
			// getRequestMethod()
			try{
				httpurl.getRequestMethod.implementation = function(){
					ret = httpurl.getRequestMethod.call(this);
					console.log("HttpURLConnection.getRequestMethod: "+ret);
					return ret;
				}
			}catch(e){}
			
			// setRequestMethod(str)
			try{
				httpurl.setRequestMethod.implementation = function(method){
					console.log("HttpURLConnection.setRequestMethod("+method+")");
					return httpurl.setRequestMethod.call(this, method);
				}
			}catch(e){}
			
			// usingProxy()
			try{
				httpurl.usingProxy.implementation = function(){
					ret = httpurl.usingProxy.call(this);
					console.log("HttpURLConnection.usingProxy() -> "+ ret);
					return ret;
				}
			}catch(e){}
			
			// getResponseMessage
			try{
				httpurl.getResponseMessage.implementation = function(){
					ret = httpurl.getResponseMessage.call(this);
					console.log("HttpURLConnection.getResponseMessage() -> "+ ret);
					return ret;
				}
			}catch(e){}
			
			// getResponseCode
			try{
				httpurl.getResponseCode.implementation = function(){
					ret = httpurl.getResponseCode.call(this);
					console.log("HttpURLConnection.getResponseCode() -> "+ ret);
					return ret;
				}
			}catch(e){}
			
			// getHeaderField
			try{
				httpurl.getHeaderField.overload("java.lang.String").implementation = function(n){
					ret = httpurl.overload("java.lang.String").getHeaderField.call(this,n);
					console.log("HttpURLConnection.getHeaderField("+n+") -> "+ ret);
					return ret;
				}
			}catch(e){}

			try{
				httpurl.getHeaderField.overload("int").implementation = function(n){
					ret = httpurl.overload("int").getHeaderField.call(this,n);
					console.log("HttpURLConnection.getHeaderField("+n+") -> "+ ret);
					return ret;
				}
			}catch(e){}
			
		}catch(e){ console.log("HttpURLConnection not found"); }
		
		/** HttpsURLConnection **/
		
		try{
			var httpsurl = Java.use("java.net.HttpsURLConnection");
			
			// new HttpsURLConnection(URL url);
			try{
				httpsurl.$init.implementation = function(url){
					console.log("new HttpsURLConnection("+url.toString()+")");
					this.$init.call(this, url);
				}
			}catch(e){}
			
			// getRequestMethod()
			try{
				httpsurl.getRequestMethod.implementation = function(){
					ret = httpurl.getRequestMethod.call(this);
					console.log("HttpsURLConnection.getRequestMethod: "+ret);
					return ret;
				}
			}catch(e){}
			
			// setRequestMethod(str)
			try{
				httpsurl.setRequestMethod.implementation = function(method){
					console.log("HttpURLConnection.setRequestMethod("+method+")");
					return httpsurl.setRequestMethod.call(this, method);
				}
			}catch(e){}
			
			// usingProxy()
			try{
				httpsurl.usingProxy.implementation = function(){
					ret = httpsurl.usingProxy.call(this);
					console.log("HttpsURLConnection.usingProxy() -> "+ ret);
					return ret;
				}
			}catch(e){}
			
			// getResponseMessage
			try{
				httpsurl.getResponseMessage.implementation = function(){
					ret = httpsurl.getResponseMessage.call(this);
					console.log("HttpsURLConnection.getResponseMessage() -> "+ ret);
					return ret;
				}
			}catch(e){}
			
			// getResponseCode
			try{
				httpsurl.getResponseCode.implementation = function(){
					ret = httpsurl.getResponseCode.call(this);
					console.log("HttpsURLConnection.getResponseCode() -> "+ ret);
					return ret;
				}
			}catch(e){}
			
			// getHeaderField
			try{
				httpsurl.getHeaderField.overload("java.lang.String").implementation = function(n){
					ret = httpsurl.overload("java.lang.String").getHeaderField.call(this,n);
					console.log("HttpsURLConnection.getHeaderField("+n+") -> "+ ret);
					return ret;
				}
			}catch(e){}
			
			try{
				httpsurl.getHeaderField.overload("int").implementation = function(n){
					ret = httpsurl.overload("int").getHeaderField.call(this,n);
					console.log("HttpsURLConnection.getHeaderField("+n+") -> "+ ret);
					return ret;
				}
			}catch(e){}
			
		}catch(e){ console.log("HttpsURLConnection not found"); }

		/** URL **/
		
		try{
			var Log = Java.use("android.util.Log");
			var Exception = Java.use("java.lang.Exception");
			
			var urlClass = Java.use("java.net.URL");
			// constructors
			
			try{
				urlClass.$init.overload("java.lang.String").implementation = function(spec){
					console.log("new URL(Spec: "+spec+")");
					// console.log(Log.getStackTraceString(Exception.$new()));
					this.$init.overload("java.lang.String").call(this, spec);
				}
			}catch(e){}
			
			try{
				urlClass.$init.overload("java.lang.String","java.lang.String","int", "java.lang.String").implementation = function(protocol, host, port, file){
					console.log("new URL(Protocol: "+protocol+", HostL "+host+", Port: "+port+", file: "+file+")");
					this.$init.overload("java.lang.String","java.lang.String","int", "java.lang.String").call(this, protocol, host, port, file);
				}
			}catch(e){}
			
			try{
				urlClass.$init.overload("java.lang.String","java.lang.String","int", "java.lang.String", "java.net.URLStreamHandler").implementation = function(protocol, host, port, file, streamHandler){
					console.log("new URL(Protocol: "+protocol+", HostL "+host+", Port: "+port+", file: "+file+", streamHandlerObject)");
					this.$init.overload("java.lang.String","java.lang.String","int", "java.lang.String", "java.net.URLStreamHandler").call(this, protocol, host, port, file, streamHandler);
				}
			}catch(e){}
			
			try{
				urlClass.$init.overload("java.lang.String","java.lang.String", "java.lang.String").implementation = function(protocol, host, file){
					console.log("new URL(Protocol: "+protocol+", HostL "+host+", file: "+file+")");
					this.$init.overload("java.lang.String","java.lang.String", "java.lang.String").call(this, protocol, host, file);
				}
			}catch(e){}
			
			try{
				urlClass.$init.overload("java.net.URL", "java.lang.String").implementation = function(url, spec){
					console.log("new URL(Url: "+url.toString()+", Spec: "+spec+")");
					this.$init.overload("java.net.URL", "java.lang.String").call(this, url, spec);
				}
			}catch(e){}
			
			try{
				urlClass.$init.overload("java.net.URL", "java.lang.String", "java.net.URLStreamHandler").implementation = function(url, spec, urlhandler){
					console.log("new URL(Url: "+url.toString()+", Spec: "+spec+", streamHandlerObject)");
					this.$init.overload("java.net.URL", "java.lang.String", "java.net.URLStreamHandler").call(this, url, spec, urlhandler);
				}
			}catch(e){}
			
			// methods
			
			try{
				urlClass.getHost.implementation = function(){
					ret = urlClass.getHost.call(this);
					console.log("URL.getHost() -> "+ret);
					return ret;
				}
			}catch(e){}
			
			try{
				urlClass.getPort.implementation = function(){
					ret = urlClass.getPort.call(this);
					console.log("URL.getPort() -> "+ret);
					return ret;
				}
			}catch(e){}
			
			try{
				urlClass.getPath.implementation = function(){
					ret = urlClass.getPath.call(this);
					console.log("URL.getPath() -> "+ret);
					return ret;
				}
			}catch(e){}
			
			try{
				urlClass.getProtocol.implementation = function(){
					ret = urlClass.getProtocol.call(this);
					console.log("URL.getProtocol() -> "+ret);
					return ret;
				}
			}catch(e){}
			
			try{
				urlClass.getQuery.implementation = function(){
					ret = urlClass.getQuery.call(this);
					console.log("URL.getQuery() -> "+ret);
					return ret;
				}
			}catch(e){}
			
			try{
				urlClass.getAuthority.implementation = function(){
					ret = urlClass.getAuthority.call(this);
					console.log("URL.getAuthority() -> "+ret);
					return ret;
				}
			}catch(e){}
			
			try{
				urlClass.openConnection.overload().implementation = function(){
					ret = urlClass.openConnection.overload().call(this);
					console.log("URL("+this.toString()+").openConnection()");
					
					//console.log(Log.getStackTraceString(Exception.$new()));
					
					return ret;
				}
			}catch(e){}
			
			try{
				urlClass.openConnection.overload("java.net.Proxy").implementation = function(){
					ret = urlClass.openConnection.overload("java.net.Proxy").call(this);
					console.log("URL("+this.toString()+").openConnection()");
					return ret;
				}
			}catch(e){}
		}catch(e){console.log("Class URL not found");}
		
	});
},0);
