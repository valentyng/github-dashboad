(function () {
	var github_client_id = "c773861efb911e0d93e0";
	var github_oauth_url = 
		"https://github.com/login/oauth/authorize"
		+ "?client_id=" + github_client_id;

	function init () {
		var query = location.search.substr(1);
		var params = parseQueryToJson(query);

		if(params.token){
			alert(params.token)
		}
		else{
			window.location = github_oauth_url;
		}
	}

	function parseQueryToJson (query) {
  		var data = query.split("&");
  		var result = {};
  		for(var i=0; i<data.length; i++) {
    		var item = data[i].split("=");
    		result[item[0]] = item[1];
  		}
  		return result;
	}

	init();
})()