/*
	Author: secretdiary.ninja
	License: (CC BY-SA 4.0) 
 * */

setImmediate(function() {
	Java.perform(function() {

		var url = Java.use("java.net.URL");
		
		try{
			url.$init.overload('java.lang.String').implementation = function (var0) {
				console.log("[*] Created new URL with value: " + var0 +"\n");
				return this.$init(var0);
			};
		}catch(e){
			console.err(e);
		}

		try{
			url.openConnection.overload().implementation = function () {
				console.log("[*] Created new URL connection\n");
				return this.openConnection();
			};
		}catch(e){
			console.err(e);
		}

		try{
			url.openConnection.overload('java.net.Proxy').implementation = function (var0) {
				console.log("[*] Created new URL connection with proxy value: " + var0 +"\n");
				return this.openConnection(var0);
			};
		}catch(e){
			console.err(e);
		}


		var URLConnection = Java.use("java.net.URLConnection");

		try{
			URLConnection.connect.implementation = function () {
				console.log("[*] Connect called.\n");
				this.connect();
			};
		}catch(e){
			console.err(e);
		}

		
		try{
			URLConnection.getContent.overload().implementation = function () {
				var content = this.getContent();
				console.log("[*] Get content called. Content: " + content + "\n");
				return content;
			};
		}catch(e){
			console.err(e);
		}

		try{
			URLConnection.getContentType.implementation = function () {
				var contentType = this.getContentType();
				console.log("[*] Get content type called. Content type: " + contentType + "\n");
				return contentType;
			};
		}catch(e){
			console.err(e);
		}

		try{
			URLConnection.getContentLength.implementation = function () {
				var contentLength = this.getContentLength();
				console.log("[*] Get content length called. Content length: " + contentLength + "\n");
				return contentLength;
			};
		}catch(e){
			console.err(e);
		}

		
		try{
			URLConnection.getContentLengthLong.implementation = function () {
				var contentLengthLong = this.getContentLengthLong();
				console.log("[*] Get content length long called. Content length long: " + contentLengthLong + "\n");
				return contentLengthLong;
			};
		}catch(e){
			console.err(e);
		}


		try{
			URLConnection.getContentEncoding.implementation = function () {
				var contentEncoding = this.getContentEncoding();
				console.log("[*] Get content encoding called. Content encoding: " + contentEncoding + "\n");
				return contentEncoding;
			};
		}catch(e){
			console.err(e);
		}

		try{
			URLConnection.getDate.implementation = function () {
				var contentDate = this.getDate();
				console.log("[*] Get date called. Date: " + contentDate + "\n");
				return contentDate;
			};
		}catch(e){
			console.err(e);
		}

		try{
			URLConnection.getExpiration.implementation = function () {
				var contentExpiration = this.getExpiration();
				console.log("[*] Get expiration called. Expiration: " + contentExpiration + "\n");
				return contentExpiration;
			};
		}catch(e){
			console.err(e);
		}


		try{
			URLConnection.getLastModified.implementation = function () {
				var lastModified = this.getLastModified();
				console.log("[*] Get last modified called. Value: " + lastModified + "\n");
				return lastModified;
			};
		}catch(e){
			console.err(e);
		}

		try{
			URLConnection.getInputStream.implementation = function () {
				console.log("[*] Get input stream called.\n");
				return this.getInputStream;
			};
		}catch(e){
			console.err(e);
		}
	
		try{
			URLConnection.setDoOutput.overload('boolean').implementation = function (var0) {
				console.log("[*] URLConnection.setDoOutput called with value: " + var0 + ".\n");
				this.setDoOutput(var0);
			};
		}catch(e){
			console.err(e);
		}
		
		try{
			URLConnection.setDoInput.overload('boolean').implementation = function (var0) {
				console.log("[*] URLConnection.setDoInput called with value: " + var0 + ".\n");
				this.setDoInput(var0);
			};
		}catch(e){
			console.err(e);
		}
		
		var httpURLConnection = Java.use("com.android.okhttp.internal.huc.HttpURLConnectionImpl");

		try{
			httpURLConnection.setRequestMethod.overload('java.lang.String').implementation = function (var0) {
				console.log("[*] Set request method called: " + var0 + "\n");
				this.setRequestMethod(var0);
			};
		}catch(e){
			console.err(e);
		}
		
		try{
			httpURLConnection.setRequestMethod.overload('java.lang.String').implementation = function (var0) {
				console.log("[*] Set request method called: " + var0 + "\n");
				this.setRequestMethod(var0);
			};	
		}catch(e){
			console.err(e);
		}
		
		try{
			httpURLConnection.connect.implementation = function () {
				console.log("[*] Connect called.\n");
				this.connect();
			};
		}catch(e){
			console.err(e);
		}
		
		try{
			httpURLConnection.disconnect.implementation = function () {
				console.log("[*] Disconnect called.\n");
				this.disconnect();
			};
		}catch(e){
			console.err(e);
		}
		
		try{
			httpURLConnection.getResponseCode.implementation = function () {
				var responseCode  = this.getResponseCode();
				console.log("[*] Get response code called: " + responseCode + "\n");
				return responseCode;
			};
		}catch(e){
			console.err(e);
		}
		
		
		var httpsURLConnection = Java.use("com.android.okhttp.internal.huc.HttpsURLConnectionImpl");

		try{
			httpsURLConnection.setRequestMethod.overload('java.lang.String').implementation = function (var0) {
				console.log("[*] Set request method called: " + var0 + "\n");
				this.setRequestMethod(var0);
			};
		}catch(e){
			console.err(e);
		}
		
		try{
			httpsURLConnection.connect.implementation = function () {
				console.log("[*] Connect called.\n");
				this.connect();
			};
		}catch(e){
			console.err(e);
		}
		
		try{
			httpsURLConnection.disconnect.implementation = function () {
				console.log("[*] Disconnect called.\n");
				this.disconnect();
			};
		}catch(e){
			console.err(e);
		}
		
		try{
			httpsURLConnection.getResponseCode.implementation = function () {
				var responseCode  = this.getResponseCode();
				console.log("[*] Get response code called: " + responseCode + "\n");
				return responseCode;
			};
		}catch(e){
			console.err(e);
		}
		
		try{
			httpsURLConnection.setRequestProperty.overload('java.lang.String', 'java.lang.String').implementation = function (var0, var1) {
				console.log("[*] URLConnection.setRequestProperty called with key: " + var0 + " and value: " + var1 + ".\n");
				this.setRequestProperty(var0, var1);
			};
		}catch(e){
			console.err(e);
		}
		
	});
});
