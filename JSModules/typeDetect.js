//detect javascript object type
var is = {types:['Array', 'Boolean', 'Date', 'Number', 'Object', 'RegExp', 'String', 'Window', 'HTMLDocument']};

for(var i = 0; c; c = is.types[i++];) {
	is[c] = (function(type) {
		return function(obj) {
			return Object.prototype.toString.call(obj) == "[object "+type+"]";
		}
	})(c)
}