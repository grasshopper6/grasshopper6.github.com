var svgDoc,Map,map,ttrelem,tttelem,tt,node,node1,imgg;
var svgW,svgH,vbMaxW,vbMaxH;
var vbCX,vbCY,vbCW,vbCH,WAmp,HAmp,currentAmp;
var minAmp,maxAmp=0.45;
var CMD=null;
var isBusy=false;
var panX,panY;
var zoomRect,obc,obw;

var zoomVal=0;
var moveStep=20;
var svgDocument = null;
var svgRoot= null;
var cRadius= 4.; //半径
var mouseCoord = {
          x : 0.,
          y : 0.
          };
var userCoord = {
          x : 0.,    
          y : 0.
          };
var timer;
var delay = 1000;
var i=0;
var parentWnd = null;
var newX=-1000;
var newY=0;
var svgElement;
var tim; 
var vec = 160;

//----Public-----------------------------------------------------------------
function Init(evt)
{
	svgDoc = evt.target.ownerDocument;
	Map = svgDoc.rootElement;
   // alert(Map.nodeName);
	map= svgDoc.getElementById("map");
   // alert(map.nodeName);
	initBasicParam();
	addEventHanle();
	//addGraphicUnit();
	svgElement = svgDoc.getElementById("title");
	ttrelem = svgDoc.getElementById("ttr");
    tttelem = svgDoc.getElementById("ttt");
	imgg = svgDoc.getElementById("img1");
    timer = setInterval(slowshow, delay); 
	tim = setInterval(doAnim, vec); 
    parentWnd = window.parent;//获得引用svg文件的父窗口
	  
}

function doAnim()
     {    
     newX=newX+10;
	 svgElement.setAttributeNS(null, "transform", "translate(" + newX + "," + newY + ")");
	 if ( newX>=0)
	 clearInterval(tim);
    }
	function setCurrentVB(x,y,w,h)
{   x=5*x;
    y=5*y;
	w=5*w;
	h=5*h;
    var cx=x+w/2;
	var cy=y+h/2;
	if(w > 0 && h > 0)
	{
		currentAmp=Math.min(svgW/w,svgH/h);
			
		w=svgW/currentAmp; h=svgH/currentAmp; x=cx-w/2; y=cy-h/2;
		x=Math.min(Math.max(x,0),vbMaxW-w);
		y=Math.min(Math.max(y,0),vbMaxH-h);
	    Map.setAttributeNS(null,"viewBox",x+" "+y+" "+w+" "+h);
	   
	}
	getCurrentVB();
}
parent.setCurrentVB = setCurrentVB;
function mapMouseDown(evt)
{
    //if(evt.target.tagName!="rect") return;
	switch(CMD)
	{
		case null:
			break;
		case "PAN"://漫游
			//addGraphicUnit1();
		    if(minAmp==currentAmp) {alert("请先放大地图..."); map.removeChild(node); CMD = null;  break;}
		    panX=evt.clientX;
	        panY=evt.clientY;
	        isBusy=true;
		    break;
		case"RECTZOOM"://拉框放大
    		if(!checkAmp()) {
			map.removeChild(node);
			return;
			}
		   	getCurrentVB();
			var x=evt.clientX*WAmp+vbCX;
			var y=evt.clientY*HAmp+vbCY;
			zoomRect.setAttributeNS(null,"x",x);
			zoomRect.setAttributeNS(null,"y",y);
			zoomRect.setAttributeNS(null,"width",0);
			zoomRect.setAttributeNS(null,"height",0);
			isBusy=true;
			zoomRect.setAttributeNS(null,"visibility","visible");
			break;
	}
}
function checkAmp()
{
	if(currentAmp>=maxAmp)
        {
	    alert("已经放大到最大！");
	    return false;
        }
	return true;
}
function mapMouseMove(evt)
{
    if(!isBusy) return;
	switch(CMD)
	{
		case null:
			break;
		case "PAN"://漫游
		
		    getCurrentVB();
			var x=-(evt.clientX-panX)*WAmp+vbCX;
			var y=-(evt.clientY-panY)*HAmp+vbCY;
			x=Math.min(Math.max(x,0),vbMaxW-vbCW);
			y=Math.min(Math.max(y,0),vbMaxH-vbCH);
			panX=evt.clientX; panY=evt.clientY;
			Map.setAttributeNS(null,"viewBox",x+" "+y+" "+vbCW+" "+vbCH);
			break;
		case"RECTZOOM"://拉框放大
			var x=parseFloat(zoomRect.getAttributeNS(null,"x"));
			var y=parseFloat(zoomRect.getAttributeNS(null,"y"));
			var w=evt.clientX*WAmp+vbCX-x;
			var h=evt.clientY*HAmp+vbCY-y;
			if(w<0)	w=0;
			if(h<0)	h=0;
			zoomRect.setAttributeNS(null,"width",w);
			zoomRect.setAttributeNS(null,"height",h);
			break;
	}
}
function mapMouseUp(evt)
{
    if(!isBusy) return;
	switch(CMD)
	{
		case null:
			break;
		case "PAN"://漫游
			isBusy=false;
			map.removeChild(node);
			getCurrentVB();
			//parent.MiniRect_Refresh(vbCX/vbMaxW,vbCY/vbMaxH,vbCW/vbMaxW,vbCH/vbMaxH);	
		    break;
			map.removeChild(node);	
		case"RECTZOOM"://拉框放大
		    	isBusy=false;
			var x=parseFloat(zoomRect.getAttributeNS(null,"x"));
			var y=parseFloat(zoomRect.getAttributeNS(null,"y"));
			var w=evt.clientX*WAmp+vbCX-x;
			var h=evt.clientY*HAmp+vbCY-y;
			var cx=x+w/2;
			var cy=y+h/2;
			if(w > 0 && h > 0)
			{
				currentAmp=Math.min(svgW/w,svgH/h,maxAmp);
			
				w=svgW/currentAmp; h=svgH/currentAmp; x=cx-w/2; y=cy-h/2;
				x=Math.min(Math.max(x,0),vbMaxW-w);
		        y=Math.min(Math.max(y,0),vbMaxH-h);
				Map.setAttributeNS(null,"viewBox",x+" "+y+" "+w+" "+h);
				zoomRect.setAttributeNS(null,"visibility","hidden");
				map.removeChild(node);
				map.removeChild(node1);
				endZoom();
				break;
			}
	}
}
function endZoom()
{
    getCurrentVB();
    zoomVal = (currentAmp - minAmp)*100/(maxAmp-minAmp);	
	//parent.MiniRect_Refresh(vbCX/vbMaxW,vbCY/vbMaxH,vbCW/vbMaxW,vbCH/vbMaxH);
}
function fullscreen()
{ 	
	CMD = null;
    Map.setAttributeNS(null,"viewBox","0 0 "+vbMaxW+" "+vbMaxH);
	getCurrentVB();
	//parent.hidediv();
	zoomVal=0;
}
parent.fullscreen = fullscreen;	
function setCMD(cmd)
{
    CMD=cmd;
}
function mapPan()
{
   addGraphicUnit1();
    setCMD("PAN");
}
parent.mapPan = mapPan;

function mapRectZoom()
{
    addGraphicUnit();
    setCMD("RECTZOOM");
}
parent.mapRectZoom = mapRectZoom;

function zoomIn()
{
	if(checkAmp()) 
	{
		zoomVal +=1;
		zoomTo(zoomVal);
	}
	
}
parent.zoomIn = zoomIn;
function zoomOut()
{
	zoomVal -= 1;
	zoomVal = (zoomVal<=0)?0:zoomVal;
	zoomTo(zoomVal);
}
parent.zoomOut = zoomOut;
function addEventHanle()
{
	map.addEventListener("mousedown",mapMouseDown,false);
	map.addEventListener("mousemove",mapMouseMove,false);
	map.addEventListener("mouseup",mapMouseUp,false);
}
function addGraphicUnit1()
{
    var xmlns="http://www.w3.org/2000/svg";
    node = svgDoc.createElementNS(xmlns, "rect");
    node.setAttribute("width",vbMaxW); 
    node.setAttribute("height",vbMaxH); 
	node.setAttribute("fill-opacity","0"); 
    //node.setAttribute("fill-opacity","100"); 
    map.insertBefore(node,null);
}
function addGraphicUnit()
{
    var xmlns="http://www.w3.org/2000/svg";
    node = svgDoc.createElementNS(xmlns, "rect");
    node.setAttribute("width",vbMaxW); 
    node.setAttribute("height",vbMaxH); 
	node.setAttribute("fill-opacity","0"); 
    //node.setAttribute("fill-opacity","100"); 
    map.insertBefore(node,null);
     
	
	 
	 
    node1 = svgDoc.createElementNS(xmlns, "rect");
    node1.setAttribute("id","zoomrect"); 
	node1.setAttribute("visibility",'visible');
	node1.setAttribute("pointer-events",'none');
	node1.setAttribute("fill",'lightgray');
	node1.setAttribute("stroke",'none');
    node1.setAttribute("width",0); 
    node1.setAttribute("height",0); 
    node1.setAttribute("fill-opacity","0.7"); 
	zoomRect=map.insertBefore(node1,null);

}

function initBasicParam()
{
	svgW   = parseInt(Map.getAttributeNS(null,"width"));
	svgH   = parseInt(Map.getAttributeNS(null,"height"));
	getCurrentVB();
	vbMaxW = vbCW; 
	vbMaxH = vbCH;  
	minAmp = currentAmp;
}

/*中心放大*/
function zoomTo(value)
{
	    getCurrentVB();
	    var cx=vbCX+vbCW/2;
	    var cy=vbCY+vbCH/2;
	    currentAmp=value*(maxAmp-minAmp)/100 + minAmp;
	    w=svgW/currentAmp; h=svgH/currentAmp; x=cx-w/2; y=cy-h/2;
	    x=Math.min(Math.max(x,0),vbMaxW-w);
	    y=Math.min(Math.max(y,0),vbMaxH-h);
	    Map.setAttributeNS(null,"viewBox",x+" "+y+" "+w+" "+h);
	    endZoom();
}


function getCurrentVB()
{
	var vb = Map.getAttributeNS(null,"viewBox").split(" ");
	vbCX=parseFloat(vb[0]);	vbCY=parseFloat(vb[1]);
	vbCW=parseFloat(vb[2]);	vbCH=parseFloat(vb[3]);
	WAmp= vbCW/svgW;	  HAmp= vbCH/svgH;
	currentAmp = 1/WAmp;
}



   

  

//********************************************
//------------------------------------------------------------------------------------------------
