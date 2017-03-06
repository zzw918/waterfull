window.onload=function(){
	imgLocation("container","box");
	// var dataInt={"data":[{"src":"0.jpg"},{"src":"1.jpg"}];
	// window.onscroll=function(){
	// 	if(checkScrollSlide){
	// 		var oParent=document.getElementById("container");
	// 		for(var i=0;i<dataInt.data.length;i++){
	// 			var oBox=document.createElement("div");
	// 			oBox.className="box";
	// 			oParent.appendChild(oBox);
	// 			var oPic=document.createElement("div");
	// 			oPic.className="pic";
	// 			oBox.appendChild(oPic);
	// 			var oImg=document.createElement("img");
	// 			oImg.scr="images/"+dataInt.data[i].src;
	// 			oPic.appendChild(oImg);
	// 		}
	// 	}
	// 	checkScrollSlide();
	// }
}
function imgLocation(parent,content){
	//将parent下的所有内容全部取出
	var cparent=document.getElementById(parent);
	var ccontent=getChildElement(cparent,content);
	var imgWidth=ccontent[0].offsetWidth;//获取每张图片的宽度
	var cols =Math.floor(document.documentElement.clientWidth/imgWidth);//获取列数
	cparent.style.cssText="width:"+imgWidth*cols+"px;margin:0 auto";//固定父元素的宽度
	var hArr=[];
	for(var i=0;i<ccontent.length;i++){
		if(i<cols){
			hArr.push(ccontent[i].offsetHeight);//即012345的高度
		}else{
			var minH=Math.min.apply(null,hArr);//关键，用apply传数组
			var index=getMinhIndex(hArr,minH);
			ccontent[i].style.position="absolute";
			ccontent[i].style.top=minH+"px";
			ccontent[i].style.left=imgWidth*index+"px";
			// ccontent[i].style.left=ccontent[index].offsetLeft+"px";
			hArr[index]+=ccontent[i].offsetHeight;
		}
	}
	// console.log(hArr);
}
function getChildElement(parent,content){
	var contentArr=[];
	var allcontent=parent.getElementsByTagName("*");
	for(var i=0;i<allcontent.length;i++){
		if(allcontent[i].className==content){
			contentArr.push(allcontent[i]);
		}
	}
	return contentArr;
}
function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}
// function checkScrollSlide(){
// 	var oParent=document.getElementById("container");
// 	var oBoxs=getChildElement(oParent,"box");
// 	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
// 	var scrollTop=Math.floor(document.body.scrollTop||document.documentElement.scrollTop);
// 	var height=document.body.clientHeight||document.documentElement.clientHeight;
// 	return (lastBoxH<scrollTop+height)?true:false;
// }	