
//initializing (should be loaded from some file)
var settings = Array(['username',''], ['userkey',''],['mode','live'],['localhost','localhost'],
['devhost','dev.brandmymail.com'],['livehost','www.brandmymail.com'],['first','Y'], ['staff','N'], 
['just_installed','Y'],['static_url','/static/'],['token',''],['token_valid_until','0']);

for (i in settings){
	var name = settings[i][0];
	if (localStorage[name] == undefined ){
		localStorage[name] = settings[i][1];
	}
}

/*
//get version of the extension
var xhr = new XMLHttpRequest();
xhr.open('GET', chrome.extension.getURL('manifest.json'), false);
xhr.send(null);
var manifest = JSON.parse(xhr.responseText);

var new_version = manifest.version;
*/
var new_version = chrome.app.getDetails().version;
console.log(new_version);

var old_version = localStorage["version"]?localStorage["version"]:new_version;
var just_updated = old_version != new_version?true:false;
localStorage["version"] = new_version;

//get the host
var host = localStorage['livehost'];
switch(localStorage['mode']){
	case 'local':
	        host = localStorage['localhost'];
			break;
	case 'dev':
			host = localStorage['devhost'];
			break;
	case 'live':
	default:
	        break;
}

// listener for storage requests
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	switch(request.action){
		case 'get': 
					sendResponse(localStorage);
					break;
		case 'set': 
					localStorage[request.name] = request.data;
					sendResponse(localStorage);
					break;
		case 'get_token':
					var bmmToken = new Token(request.host, localStorage);
					bmmToken.get(function(token){
					        localStorage['token'] = '';
							localStorage['token_valid_until']=0;
							sendResponse({token:token, error:""});
							//asking for a new token to save
							bmmToken.ask(function(token){
							    localStorage['token'] = token;
							    var current_time = new Date();
								localStorage['token_valid_until'] = current_time.getTime() + 10*24*60*60*1000;
							});
						},
						function(error){
							sendResponse({token:"", error:error});
						}
					);
					break;
		case 'set_token':
					localStorage['token'] = request.token;
					var current_time = new Date();
					localStorage['token_valid_until'] = current_time.getTime() + 10*24*60*60*1000;
					break;
		case 'expire_token':
					localStorage['token']='';
					localStorage['token_valid_until']=0;
					sendResponse(localStorage);
					break;
	    default:
	                break;
	}
});

/* this requires "management" in the permissions
chrome.management.onUninstalled.addListener(function(id) {
    uninstall_signal(host, localStorage["version"], localStorage["username"], localStorage["userkey"]);
});
chrome.management.onEnabled.addListener(function(id) {
    enable_signal(host, localStorage["version"], localStorage["username"], localStorage["userkey"]);
});
chrome.management.onDisabled.addListener(function(id) {
    disable_signal(host, localStorage["version"], localStorage["username"], localStorage["userkey"]);
});
*/
// onInstall event
// we should update the bmm page to activate extension after installation
if(just_updated){
	update_signal(host, old_version, new_version, localStorage["username"], localStorage["userkey"]);
}
else if ( localStorage["just_installed"] == 'Y' ){
    localStorage["just_installed"] = 'N';
    authenticate(host, localStorage["version"], 
        function(data){
    	    localStorage['username'] = data['username'];
		    localStorage['userkey'] = data['userkey'];
		    localStorage['token'] = data['token'];
		    localStorage['staff'] = data['staff'];
		    var current_time = new Date();
		    localStorage['token_valid_until'] = current_time.getTime() + 10*24*60*60*1000;
        },
        function(data){
            chrome.tabs.create({'url': 'http://' + host + '/chrome_landing_page'});
        }
   );
}


/*
java -jar compiler.jar --js jquery.min.js --js jquery.base64.min.js --js email.js --js bmmLang.js --js bmmVisual.js --js bmmPreferences.js --js bmmStatistics.js --js bmmPreview.js --js bmmGmail.js --js bmmLiveGmail.js --js_output_file out.js

chrome.tabs.query({"url": "*://mail.google.com/*"}, function(tabs){
	for(i in tabs){
		var tabId = tabs[i].id;
		
		console.log(tabId);
		//  allFrames: false
		
		chrome.tabs.executeScript(tabId, {file: "content/jquery.min.js"});
		chrome.tabs.executeScript(tabId, {file: "content/jquery.base64.min.js"});
		chrome.tabs.executeScript(tabId, {file: "content/bmmLang.js"});
		chrome.tabs.executeScript(tabId, {file: "content/bmmVisual.js"});
		chrome.tabs.executeScript(tabId, {file: "content/bmmPreferences.js"});
		chrome.tabs.executeScript(tabId, {file: "content/bmmStatistics.js"});
		chrome.tabs.executeScript(tabId, {file: "content/email.js"});
		chrome.tabs.executeScript(tabId, {file: "content/bmmPreview.js"});
		chrome.tabs.executeScript(tabId, {file: "content/bmmGmail.js"});
		chrome.tabs.executeScript(tabId, {file: "content/bmmLiveGmail.js"});
	}
});
*/
