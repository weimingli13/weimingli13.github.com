// JavaScript Document

//nav
function ron(n,m){
		return parseInt(Math.random()*(m-n)+n)	
	}
function getPos(obj) {
            var l = 0;
            var t = 0;
            while (obj) {
                l += obj.offsetLeft;
                t += obj.offsetTop;
                obj = obj.offsetParent;
            }
            return {left: l, top: t};
        }
window.onload=function(){
	var oNav=document.querySelector('#nav');
	var aLi=oNav.getElementsByTagName('a')
	var oB=document.getElementById('b_name');
	var oB2=document.getElementById('b_name2');
	var oAudio=document.getElementById('mp3');
		for(var i=0;i<aLi.length;i++){
			aLi[i].onmouseover=function(){
				var n='rgb('+ron(0,256)+','+ron(0,256)+','+ron(0,256)+')'
				for(var i=0;i<aLi.length;i++){
					aLi[i].className='';
					aLi[i].style.color='#FFF';		
				}
				this.className='active'	;
				this.style.color=n;	
				this.style.transition='0.4s';
				this.style.fontWeight='bold';
			}
		}
		oNav.onmouseout=function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';	
				aLi[i].style.color='#FFF'		
			}	
		}
		//换内容
		var oLogo=document.querySelector('#logo')
		var oH3=oLogo.getElementsByTagName('h3')[0];
		var oP=oLogo.getElementsByTagName('p')[0];
		var timer=null;
		oLogo.onmouseover=function(){
				oH3.innerHTML='Resume';
				oP.innerHTML='前端工程师';
				oH3.style.color='rgba(0, 255, 255, 0.58)';
				oP.style.color='rgba(0, 255, 255, 0.58)';
		}
		oLogo.onmouseout=function(){
				oH3.innerHTML='魏明理';
				oP.innerHTML='个人简历';	
				oH3.style.color='#fff';
				oP.style.color='#fff';
		}
	//滚动事件
		var oNavT=getPos(oNav).top;
		var oMe=document.getElementById('me');
		var oWord=document.getElementById('word');
		var str = '2015年毕业于山东协和学院,就职于上海九康科技有限公司喜欢夜深人静敲代码.爱运动,常思考.层出不穷的技术让人兴奋不已.从无到有的创造终会见证奇迹,搬砖永无止境勿忘初心 !';
		
		window.onscroll=function(){
		    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollT>oNavT){
				  // 吸
                    oNav.style.position = 'fixed';
                    oNav.style.left = 0;
                    oNav.style.top = 0;
					oNav.style.opacity='1';
					oNav.style.zIndex='1111';
					oNav.style.opacity='0.9'
					oAudio.play();
					if(scrollT>400){
						oMe.style.transition='1s';
						oMe.style.transform='rotate(3600deg) scale(2)';
						oMe.style.color='#11f5c2';	
						oMe.style.opacity='1';
						oMe.style.border='1px solid #fff';
						if(scrollT>900){
							var oSkill=document.getElementById('skill');
							var oS=oSkill.getElementsByTagName('span')[0];
							oS.style.width='200px';	
							if(scrollT>1500){
								var oShow=document.getElementById('show');
								var oS=oShow.getElementsByTagName('span')[0];
								oS.style.width='200px';
								if(scrollT>2300){
									var oWork=document.getElementById('work');
									var oS=oWork.getElementsByTagName('span')[0];
									oS.style.width='200px';
									if(scrollT>3000)
									var oWork=document.getElementById('contact');
									var oS=oWork.getElementsByTagName('span')[0];
									oS.style.width='200px';
								}
							}
						}
					}else{
						oMe.style.transition='';
						oMe.style.transform='';
						oMe.style.color='';	
						oMe.style.opacity='';
						oMe.style.border='';		
					}
  
					} else {
                    oNav.style.position = '';
					oNav.style.opacity='1'
                }
				
		}
		oB.style.opacity='1';
		move(oB2,{bottom:-100,opacity:1}, {
                    duration:2000,
                    easing: 'ease-in',
					complete:function(){
						for(var i=0;i<str.length;i++){
						var oS=document.createElement('span')
						oS.innerHTML=str.charAt(i);
						oWord.appendChild(oS);	
						}
						var aSpan=oWord.children;
						var i=0;
						var timer =setInterval(function(){
               			move(aSpan[i],{opacity:1,easing:'ease-in'})
                		i++;
               			 if (i == aSpan.length) {
                  		  clearInterval(timer);
              			 }
           		 },100)
							
					}
					
					});		
};