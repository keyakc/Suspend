var $banner=$(".mod_banner");
var $banner_children=$banner.children();
var inFlag,offsetX,offsetY;
$banner.mouseenter(function(event) {
	inFlag=1;
	offsetX=event.offsetX;
	offsetY=event.offsetY;
})
$banner.mouseleave(function() {
	inFlag=0;
	for(i=0;i<$banner_children.length;i++){
	$banner_children.eq(i).attr("style",strGener(0,0,0,0));
	}
})
$banner.mousemove(function(event) {
	if(inFlag!=1) return;
	event=event||window.event;
	var newOffsetX=parseInt(event.offsetX),
		newOffsetY=parseInt(event.offsetY),
	 	width=$banner.outerWidth(),
	    height=$banner.outerHeight(),
	    degOffsetX=(height/2-newOffsetY)*20/height,
	    degOffsetY=(newOffsetX-width/2)*20/width,
		str="transform:rotateX("+degOffsetX+"deg) rotateY("+degOffsetY+"deg);";	
		
		$banner_children.eq(0).attr("style",strGener(degOffsetX,degOffsetY,0,0));
		$banner_children.eq(1).attr("style",strGener(degOffsetX,degOffsetY*2,degOffsetY,degOffsetX/(-1.5)));
		$banner_children.eq(2).attr("style",strGener(degOffsetX,degOffsetY*2,degOffsetY*(4),degOffsetX*(-3)));
		$banner_children.eq(3).attr("style",strGener(degOffsetX,degOffsetY,degOffsetY*2,degOffsetX*(-2)));
		$banner_children.eq(4).attr("style",strGener(degOffsetX,degOffsetY,degOffsetY*3,degOffsetX*(-3)));
})
function strGener(degOffsetX,degOffsetY,translateX,translateY){
	var str="transform:rotateX("+degOffsetX+"deg) rotateY("+degOffsetY+"deg) translate("+translateX+"px,"+translateY+"px);";
	return str;
}