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


$(document).ready(function(){
	
	$("#connect").bind("click", connect);
	$("#disconnect").bind("click", disconnect);
	$("#feedback").bind("click", feedback);
	
	set_status();

	switch(localStorage['mode']){
		case 'local': 	$("body").css("background", "green"); break;
		case 'dev': 	$("body").css("background", "yellow"); break;
		default: break;
	}
});

function set_status(){
    var username = localStorage["username"];
    var userkey = localStorage["userkey"];
    $("#version").html(localStorage["version"]);
    if(username && userkey){
	    $("#status").removeClass("loading").html("You are <b>connected</b> to BrandMyMail with <span class='username'>"+username+"</span>");
	    $("#connect").hide();
	    $("#disconnect").removeClass('disabled');
	    $("#disconnect").show();
	    $("#error").hide();
	    $("#error").html("");
    }
    else{
	    $("#status").removeClass("loading").html("You are <b>not connected</b> to BrandMyMail");
	    $("#disconnect").hide();
	    $("#connect").removeClass('disabled');
	    $("#connect").show();
    }
}

function feedback(){
    chrome.tabs.create({'url': 'http://' + host + '/contact'}, function(tab) {
        window.close();
    });
}

function connect(){
	if($('#connect').hasClass('disabled'))
		return false;
	$("#connect").addClass('disabled');
	$("#status").addClass("loading").empty();
	authenticate(host, localStorage["version"], function(data){
    	localStorage['username'] = data['username'];
		localStorage['userkey'] = data['userkey'];
		localStorage['token'] = data['token'];
		var current_time = new Date();
		localStorage['token_valid_until'] = current_time.getTime() + 10*24*60*60*1000;
		set_status();
    },
    function(data){
    	$("#error").html("You aren't logged to BrandMyMail");
        chrome.tabs.create({'url': 'http://' + host + '/browser_extension_setup'}, function(tab) {
        	window.close();
    	});
	    $("#error").show();
    	set_status();
    });
}

function disconnect(){    
	if($('#disconnect').hasClass('disabled'))
		return false;
    $("#disconnect").addClass('disabled');
    $("#status").addClass("loading").empty();
    $("#status").empty().addClass("loading");
    localStorage["userkey"] = "";
    localStorage['username'] = "";
    localStorage['token'] = "";
    localStorage['token_valid_until'] = 0;
    set_status();
}