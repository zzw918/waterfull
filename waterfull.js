window.onload = function() {
	imgLocation("container","box");
}

function imgLocation(parent, content) {

	var cparent=document.getElementById(parent),
	    ccontent=getChildElement(cparent,content),
	    imgWidth=ccontent[0].offsetWidth,
	    cols =Math.floor(document.documentElement.clientWidth/imgWidth);
	cparent.style.cssText="width:"+imgWidth*cols+"px; margin: 0 auto";

	var hArr=[],
		i;
	for( i = 0; i < ccontent.length; i++ ) {
		if ( i < cols ) {
			hArr.push(ccontent[i].offsetHeight);
		} else {
			var minH = Math.min.apply(null,hArr),
			   index = getMinhIndex(hArr,minH);
			ccontent[i].style.cssText = "position: absolute; top: "+ 
					minH + "px;" + "left: " + imgWidth*index + "px;";
			hArr[index] += ccontent[i].offsetHeight;
		}
	}
}

// 获取一个元素的所有子元素
function getChildElement(parent, content) {
	var contentArr = [],
	    allcontent = parent.getElementsByTagName("*"),
	    i;
	for ( i = 0; i < allcontent.length; i++ ) {
		if (allcontent[i].className == content) {
			contentArr.push( allcontent[i] );
		}
	}
	return contentArr;
}

// 获取一个值在数组中的index
function getMinhIndex(arr, val) {
	for (var i in arr) {
		if( arr[i] == val ){
			return i;
		}
	}
}
