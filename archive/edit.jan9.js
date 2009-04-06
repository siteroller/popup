//1. trigger should download and display the login page
//2. the login page should load mooeditor
//3. mooeditor should be part of the added classes

var srJSClasses = ['libs/moo.121.c.js','libs/moo.121.m.js'];
var srJSLoader = new Request({evalResponse:true,   url:'siteroller/classes/core/assetLoader.php', 'link':'chain', onSuccess:respond }); 

$('trigger').addEvent('click', function(){
	var classes = [
		['libs/moo.121.m.js', 'mochaui/scripts/source/Core/Core.js', 'mochaui/scripts/source/Window/Window.js', 'mochaui/scripts/source/Window/Modal.js', 'edit/mochaPopup.js'],
		['mochaui/css/uiModified.css']//'mochaui/css/ui.css','mochaui/css/content.css'
	]
	var counter = 0, newClass = new Hash(), types = ['js', 'css'];
	for(var i=0; i<types.length; i++){
		classes[i].each(function(item, index){
			if(!srJSClasses.contains(item)){ 
				newClass.set(types[i]+'['+counter++ +']', item);
		//		srJSClasses.push(item);
			}
		})
	}
	srJSLoader.send(newClass.toQueryString());
	/*
	var newClass = new Hash({'style[0]':'mochaui/css/ui.css','style[1]':'mochaui/css/content.css','script[0]':'libs/moo.121.m.js', 'script[1]':'mochaui/scripts/source/Core/Core.js', 'script[2]':'mochaui/scripts/source/Window/Window.js', 'script[3]':'mochaui/scripts/source/Window/Modal.js' });
	newClass = newClass.filter(function(val){ return !srJSClasses.contains(val); });
	srJSLoader.send(newClass.toQueryString()); //security hole here
	console.log(srJSClasses.combine(newClass));
	*/
})

function respond(assets){
	var i = 0, scripts = assets.split('|');
	//alert(scripts);
	//alert(scripts.length)
	while (i < scripts.length){
		if(scripts[i]){
			console.log(i)
			var type = scripts[i].split('!');
			type[0] == 'js' ? new Asset.javascript(type[1]) : new Asset.css(type[1]);
		}
		i++
	}
}
	//console.log(type)
	//var script = new Asset.javascript(type[1]);
	//var script = new Asset.(type[0] == 'js' ? javascript : css)(type[1]);
	//var script = '/scripts/myScript.js', {id: 'myScript'});
	//var css = new Asset.css('/css/myStyle.css', {id: 'myStyle', title: 'myStyle'});
	//MochaUI.Modal = new MochaUI.Modal();
	//new MochaUI.Window({
	//	id: 'modalDemo', title: 'A Modal Window', content: 'Your modal window content', type: 'modal',
	//	width: 300, height: 150
	//});
	
	//abc = new MochaUI.Window({content:"abcdefrth"});
	//alert('responded');
	//alert(a)
	//alert(b)
//new MochaUI.Window({type:modal}); 
// var tester = new Hash({'abc[0]':'how now', 'abc[1]':'brown cow'});
//var a=['a', 'b','c&d'];
//test=new Hash();
//alert('loading')
//alert('fire');
//alert(newClass)
//for(i=0; i<newClass.length; i++){
//	if(srJSClasses.contains(newClass['script['+i+']'])) newClass.erase('script['+i+']');
//	else srJSClasses.push(newClass[i]);
//}
//for(i=0; i<srJSClasses.length; i++) test['abcd['+i+']'] = encodeURIComponent(a[i]);
	