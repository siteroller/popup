//1. trigger should download and display the login page
//2. the login page should load mooeditor
//3. mooeditor should be part of the added classes

var srJSClasses = ['libs/moo.121.c.js','libs/moo.121.m.js'];

var assetLoader = new Request({
	evalResponse:true, link:'chain',
	url:'siteroller/classes/core/assetLoader.php',  
	onSuccess:function(assets){
		var i = 0, scripts = assets.split('|');  //alert(scripts); //alert(scripts.length)console.log(i)
		while (i < scripts.length){
			if(scripts[i]){
				var type = scripts[i].split('!');
				type[0] == 'js' ? new Asset.javascript(type[1]) : new Asset.css(type[1]);
			}
			i++
		}	
	} 	
}); 


function srPopup(){
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
	assetLoader.send(newClass.toQueryString());
}
if(window.search.contains('edit=true'))srPopup();
$('trigger').addEvent('click', srPopup);
