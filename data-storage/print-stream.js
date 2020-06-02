/*
	Author: secretdiary.ninja
	License: (CC BY-SA 4.0) 
 * */

setImmediate(function() {
	Java.perform(function() {
		var printStream = Java.use("java.io.PrintStream");

		// void print(int i)
		printStream.print.overload('int').implementation = function(var0) {
			console.log("[*] PrintStream.print('int') called with value: " + var0 + "\n");
			this.print(var0);
		};

		// void print(double d)
		printStream.print.overload('double').implementation = function(var0) {
			console.log("[*] PrintStream.print('double') called with value: " + var0 + "\n");
			this.print(var0);
		};

		// void print(boolean b)
		printStream.print.overload('boolean').implementation = function(var0) {
			console.log("[*] PrintStream.print('boolean') called with value: " + var0 + "\n");
			this.print(var0);
		};

		// void print(char c)
		printStream.print.overload('char').implementation = function(var0) {
			console.log("[*] PrintStream.print('char') called with value: " + var0 + "\n");
			this.print(var0);
		};

		// void print(long l)
		printStream.print.overload('long').implementation = function(var0) {
			console.log("[*] PrintStream.print('long') called with value: " + var0 + "\n");
			this.print(var0);
		};

		// void print(float f)
		printStream.print.overload('float').implementation = function(var0) {
			console.log("[*] PrintStream.print('float') called with value: " + var0 + "\n");
			this.print(var0);
		};

		// void print(String s)
		printStream.print.overload('java.lang.String').implementation = function(var0) {
			console.log("[*] PrintStream.print('String') called with value: " + var0 + "\n");
			this.print(var0);
		};

		// void print(Object obj)
		printStream.print.overload('java.lang.Object').implementation = function(var0) {
			console.log("[*] PrintStream.print('Object') called with value: " + var0 + "\n");
			this.print(var0);
		};

		// void print(char[] s)
		printStream.print.overload('[C').implementation = function(var0) {
			console.log("[*] PrintStream.print('char[]') called with value: " + var0 + "\n");
			this.print(var0);
		};

		// void println(int i)
		printStream.println.overload('int').implementation = function(var0) {
			console.log("[*] PrintStream.println('int') called with value: " + var0 + "\n");
			this.println(var0);
		};


		// void println(double d)
		printStream.println.overload('double').implementation = function(var0) {
			console.log("[*] PrintStream.println('double') called with value: " + var0 + "\n");
			this.println(var0);
		};

		// void println(boolean b)
		printStream.println.overload('boolean').implementation = function(var0) {
			console.log("[*] PrintStream.println('boolean') called with value: " + var0 + "\n");
			this.println(var0);
		};

		// void println(char c)
		printStream.println.overload('char').implementation = function(var0) {
			console.log("[*] PrintStream.println('char') called with value: " + var0 + "\n");
			this.println(var0);
		};

		// void println(long l)
		printStream.println.overload('long').implementation = function(var0) {
			console.log("[*] PrintStream.println('long') called with value: " + var0 + "\n");
			this.println(var0);
		};

		// void println(float f)
		printStream.println.overload('float').implementation = function(var0) {
			console.log("[*] PrintStream.println('float') called with value: " + var0 + "\n");
			this.println(var0);
		};

		// void println(String s)
		printStream.println.overload('java.lang.String').implementation = function(var0) {
			console.log("[*] PrintStream.println('String') called with value: " + var0 + "\n");
			this.println(var0);
		};

		// void println(Object obj)
		printStream.println.overload('java.lang.Object').implementation = function(var0) {
			console.log("[*] PrintStream.println('Object') called with value: " + var0 + "\n");
			this.println(var0);
		};

		// void println(char[] s)
		printStream.println.overload('[C').implementation = function(var0) {
			console.log("[*] PrintStream.println('char[]') called with value: " + var0 + "\n");
			this.println(var0);
		};
	});
});
