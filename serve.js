/**
 * Created by kauriHealth on 2017/8/25.
 */


/*
 *为什么出现jsonp？
 * XMLHttpRequest不支持跨域请求
 * 1、处理url中的回调参数
 * 2.创建一个script标签
 * 3.挂载回调函数
 * 4.将script标签放到页面
 * */

(function(window, document){
	// 'use strict';
	var jsonp = function (url, data, callback) {
		//挂载回调函数
		var fnSuffix = Math.random().toString().replace('.','');
		var cbFuncName='my_jsonp_cb_' + fnSuffix;
		window[cbFuncName] = callback;

		//2data转换成url字符串的形式
		var querystring = '?';
		for (var key in data){
			querystring += key+ '=' + data[key] + '&';
		}

		//3.处理url中的回调函数
		//url+=callback=my_jsonp_cb_08154486800686033
		querystring += 'callback=' + cbFuncName;
		// alert(querystring);
		// ?count=1&start=5&callback=my_jsonp_cb_08154486800686033

		//4.创建一个script标签
		var scriptElement = document.createElement('script');
		scriptElement.src = url+querystring;
		// alert(scriptElement.src);
		//将script标签放在页面中
		document.body.appendChild(scriptElement);

		//append过后页面会自动对这个地址发送请求,请求完成后自动执行回调函数 my_jsonp_cb_08154486800686033
	};

	window.$jsonp = jsonp;

})(window, document);
