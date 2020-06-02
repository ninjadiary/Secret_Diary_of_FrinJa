/*
	Author: secretdiary.ninja
	License: (CC BY-SA 4.0) 
 * */
 
setImmediate(function() {
	Java.perform(function() {

		var trustManagerExtensions = Java.use("android.net.http.X509TrustManagerExtensions");

		trustManagerExtensions.checkServerTrusted.overload('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'java.lang.String').implementation = function (var0, var1, var2) {
			console.log("[*] X509TrustManagerExtensions.checkServerTrusted called for host: " + var2 +"\n");
			return this.overload('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'java.lang.String').checkServerTrusted(var0, var1, var2);
		};
	});
});
