// set / get
var handleCookie = {
	// param: name,value,hours
	// return: undefined
	set: function (name,value,hours) {
		var data = name + '=' + value;
		if (hours) {
			var now = new Date();
			now.setHours(now.getHours() + hours);
			data += "; expires=" + now.toGMTString();
		}
		document.cookie = data;
	},
	// param: name
	// return : value or undefined
	get: function (name) {
		var cookieString = document.cookie;
		var value;
		$(cookieString.split(' ')).each(function(index, el) {
			var cookieAlone = this.split('=');
			if (cookieAlone[0] === name) {
				value = cookieAlone[1].split(';')[0];
			}
		});
		return value;
	}
}
