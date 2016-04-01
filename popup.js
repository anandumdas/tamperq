function handler(){
	var backGroundPage = chrome.extension.getBackgroundPage();
	backGroundPage.replaceHeader();
};

document.addEventListener('DOMContentLoaded',function(){
	document.getElementById('click-me').addEventListener('click',handler);
})