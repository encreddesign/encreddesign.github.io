(function () {

	var _self = this,
		_params = window.location.search;
		_codeField = document.getElementById('code-field');
		
	_self.getParams = function () {
	
		var _noQ = '',
			_return = [];
		
		if(_params.length == 0) {
			return null;
		}
		
		_noQ = _params.substr(1, _params.length).split('&');
		
		for(var i = 0; i < _noQ.length; i++){
			
			_return.push(_noQ[i]);
			
		}
		
		return _return;
		
	};
	
	_self.getParam = function (key) {
	
		var _return = '',
			_params = _self.getParams();
		
		for(var i = 0; i < _params.length; i++) {
		
			var _key = _params[i].split('=')[0],
				_val = _params[i].split('=')[1];
				
			if(key == _key) {
			
				_return = _val;
				break;
				
			}
		
		}
		
		return _return;
	
	};
	
	_self.onWindowLoad = function () {
		
		var _code = _self.getParam('code');
		
		if(_codeField) {
			
			_codeField.value = _code;
			
		}
		
	};
	
	if(_self.getParams().length > 0) {
		
		_self.onWindowLoad();
		
	}

}());