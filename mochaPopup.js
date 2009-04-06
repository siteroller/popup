var srFormLogin = new Element('form', {'class':'srFormLogin'}).adopt(
	new Element('span',  {'text':'User Name:'}),
	new Element('input', {'type':'text',     'name':'user' }),
	new Element('span',  {'text':'Password:' }),
	new Element('input', {'type':'password', 'name':'pass' }),
	new Element('input', {'type':'submit', events:{'click':function(e){
		e.stop(); console.log('form submitted'); 
		var srLogin = new Request({
			link:'chain', url:'siteroller/classes/core/sql.php', 'method':'get',  
			onSuccess:function(admin){ console.log(admin); admin*=1; if(admin){ new MooEditor(); MochaUI.closeAll(); MochaUI.garbageCleanUp(); }}	
		}).send(srFormLogin);
}  	}})	)

MochaUI.Modal = new MochaUI.Modal();
new MochaUI.Window({ 
	id: 'srLogin', title: 'Login to Edit Page', 
	type: 'modal', width: 300, height: 150,
	content: srFormLogin
});

//########################## Load Assets ###############################//

var assetLoader = new Request({
	link:'chain', url:'siteroller/classes/core/assetLoader.php',  
	onSuccess:function(assets){
		var i = 0, scripts = assets.split('|');  //alert(scripts); //alert(scripts.length)console.log(i)
		while (i < scripts.length){
			if(scripts[i]){
				var type = scripts[i].split('!');
				type[0] == 'js' ? new Asset.javascript(type[1]) : new Asset.css(type[1]);
}i++}	}	});

function loadAssets(){
	//encodeURIcomponent()
	assetLoader.send("assets="+[].splice.call(arguments,0).join('_'));
}

loadAssets('MooEditor');
