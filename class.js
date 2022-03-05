var search_class = ['your_class_name'];

if (ObjC.available)
{
	console.log('*** Dumping classes ***')

	for (var className in ObjC.classes) {
		if (Array.isArray(search_class) && search_class.length) {
			for (var i = 0; i < search_class.length; i++) {
				if (className.toLowerCase().includes(search_class[i].toLowerCase())) {
					console.log(className)
				}
			}
		}
		else {
			console.log(className);
		}
	}
}
else {
	console.log('Objective-C Runtime is not available!');
}
