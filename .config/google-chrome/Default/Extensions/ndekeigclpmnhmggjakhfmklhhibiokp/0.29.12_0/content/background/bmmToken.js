"use strict";
function Token(host, storage) {this.init(host, storage); } 

// -------------------------------
// class to connect BMM for a token
// -------------------------------
Token.prototype = {
	
	_host:"",
	_storage: null,
	_wait_for_response: false,
	_wait_for_callback: null,
	
	// ------------------------------------
	// initialize 
	// -----------------------------------
	init: function(host, storage){
		this._host = host;
		this._storage = storage;
		this._wait_for_response = false;
	},
	
	get: function(success_callback, error_callback){
		var token = this._storage['token'];
		var token_time = this._storage['token_valid_until']
		var current_time = new Date();
		if(!token || current_time.getTime() > token_time){
			this.ask(success_callback, error_callback);
		}
		else if(success_callback){
			success_callback(token);
		}
	},
	
	ask: function(success_callback, error_callback) {
		// save callback to the variable
		// the post-request for token usually has no success_callback 
		// so the send-request which happens after post-request
		// will simple add a success_callback function
		if(success_callback && !this._wait_for_callback){
			this._wait_for_callback = success_callback;
		}
		
		if (this._wait_for_response) {
			return false;
		}

		this._wait_for_response = true;
		var self = this;
		
		var ajax_params = "username="+this._storage['username']+"&userkey="+this._storage['userkey'];
		ajax_params += "&browser=chrome&version="+this._storage['version'];
		var xhr = new XMLHttpRequest();
	    xhr.open("POST", this._host + '/services/token', true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhr.onreadystatechange = function(data) {
	    	if (xhr.readyState == 4) {
	    		self._wait_for_response = false;
	    		if (xhr.status == 200) {    	
				    self._onConnect(xhr.responseText, success_callback);
	        	}
	    		else{
			    	self._onError(xhr.responseText, error_callback);
	    		}
	    	}
		}
	    xhr.send(ajax_params);	
	},
	
	_onError: function(response, error_callback){		
		this._wait_for_callback = null;
		if(error_callback){
			error_callback(response);
		}
	},
	
	_onConnect: function(response, success_callback){
		var token = response;
		var success_callback = this._wait_for_callback;
		this._wait_for_callback = null;
		
		if(success_callback){
			success_callback(token);
		}
	},
	
};
