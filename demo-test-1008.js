var banner=document.getElementById("banner");
var nodesOfBanners=banner.getElementsByTagName("*");
var inFlag,offsetX,offsetY;
banner.onmouseenter=function(event) {
	event=event||window.event;
	inFlag=1;
	offsetX=event.offsetX;
	offsetY=event.offsetY;
}
banner.onmouseleave=function() {
	inFlag=0;
	for(i=0;i<nodesOfBanners.length;i++){
	nodesOfBanners[i].setAttribute("style",strGener(0,0,0,0));
	}
}
banner.onmousemove=function(event) {
	if(inFlag!=1) return;
	event=event||window.event;
	var newOffsetX=parseInt(event.offsetX),
		newOffsetY=parseInt(event.offsetY),
	 	width=parseInt(window.getComputedStyle(banner,null).width),
	    height=parseInt(window.getComputedStyle(banner,null).height),
	    degOffsetX=(height/2-newOffsetY)*20/height,
	    degOffsetY=(newOffsetX-width/2)*20/width,
		str="transform:rotateX("+degOffsetX+"deg) rotateY("+degOffsetY+"deg);"		
		nodesOfBanners[0].setAttribute("style",strGener(degOffsetX,degOffsetY,0,0));
		nodesOfBanners[1].setAttribute("style",strGener(degOffsetX,degOffsetY*2,degOffsetY,degOffsetX/(-1.5)));
		nodesOfBanners[2].setAttribute("style",strGener(degOffsetX,degOffsetY*2,degOffsetY*(4),degOffsetX*(-3)));
		nodesOfBanners[3].setAttribute("style",strGener(degOffsetX,degOffsetY,degOffsetY*2,degOffsetX*(-2)));
		nodesOfBanners[4].setAttribute("style",strGener(degOffsetX,degOffsetY,degOffsetY*3,degOffsetX*(-3)));
}
function strGener(degOffsetX,degOffsetY,translateX,translateY){
	var str="transform:rotateX("+degOffsetX+"deg) rotateY("+degOffsetY+"deg) translate("+translateX+"px,"+translateY+"px);";
	return str;
}