function authenticate(host, version, success_callback, error_callback){
	var data = "browser=chrome&version="+version;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://" + host + '/services/extension_installed', true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//xhr.setRequestHeader("Content-length", data.length);
	//xhr.setRequestHeader("Connection", "close");
    xhr.onreadystatechange = function(data) {
    	if (xhr.readyState == 4) {
    		if (xhr.status == 200){
    			if (success_callback){
    				var data = JSON.parse(xhr.responseText);
    				success_callback(data);
    			}
    		}else if (error_callback){
    			error_callback(xhr.responseText);
            }
    	}
	}
    xhr.send(data);
}
	
function update_signal(host, old_version, version, username, userkey){
	var data = "browser=chrome&version=" + version + "&oldversion=" + old_version;
	data += "&username=" + username + "&userkey=" + userkey;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://" + host + '/services/extension_updated', true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//xhr.setRequestHeader("Content-Length", data.length);
	//xhr.setRequestHeader("Connection", "close");
    xhr.onreadystatechange = function(data) {
    	if (xhr.readyState == 4) {
    		if (xhr.status == 200) {
              	//OK, we aren't waiting for any info from the respose
        	}
    	}
	}
    xhr.send(data);
	
}

function uninstall_signal(host, version, username, userkey){
	var data = "browser=chrome&version=" + version;
	data += "&username=" + username + "&userkey=" + userkey;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://" + host + '/services/extension_uninstalled', true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(data) {
    	if (xhr.readyState == 4) {
    		if (xhr.status == 200) {
              	//OK, we aren't waiting for any info from the respose
        	}
    	}
	}
    xhr.send(data);
}

function disable_signal(host, version, username, userkey){
	var data = "browser=chrome&version=" + version;
	data += "&username=" + username + "&userkey=" + userkey;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://" + host + '/services/extension_disabled', true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(data) {
    	if (xhr.readyState == 4) {
    		if (xhr.status == 200) {
              	//OK, we aren't waiting for any info from the respose
        	}
    	}
	}
    xhr.send(data);
}
function enable_signal(host, version, username, userkey){
	var data = "browser=chrome&version=" + version;
	data += "&username=" + username + "&userkey=" + userkey;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://" + host + '/services/extension_enabled', true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(data) {
    	if (xhr.readyState == 4) {
    		if (xhr.status == 200) {
              	//OK, we aren't waiting for any info from the respose
        	}
    	}
	}
    xhr.send(data);
}