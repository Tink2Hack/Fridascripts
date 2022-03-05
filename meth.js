var search_class = ['<your_class_name>'];
var search_method = [''];

function print_methods(className) {
	var methods = ObjC.classes[className].$ownMethods;
	if (Array.isArray(search_method) && search_method.length) { //search_method not empty
		for (var j = 0; j < search_method.length; j++) {
			if (methods.join(' ').toLowerCase().includes(search_method[j].toLowerCase())) {
				console.log('[*] ' + className);
				for (var i = 0; i < methods.length; i++){
					if (methods[i].toLowerCase().includes(search_method[j].toLowerCase())) {
						console.log('   ' + methods[i]);
					}
				}
			}
		}
	}
	else {
		console.log('[*] ' + className);
		var methods = ObjC.classes[className].$ownMethods;
		for (var i = 0; i < methods.length; i++){
			console.log('   ' + methods[i]);
		}
	}
}

if (ObjC.available)
{
	console.log('*** Dumping classes and methods ***')

	for (var className in ObjC.classes) {
		if (Array.isArray(search_class) && search_class.length) { // search_class not empty
			for (var i = 0; i < search_class.length; i++) {
				if (className.toLowerCase().includes(search_class[i].toLowerCase())) {
					print_methods(className);
				}
			}
		}
		else {
			print_methods(className);
		}
	}
}
else {
	console.log('Objective-C Runtime is not available!');
}
