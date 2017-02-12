window.onload=function(){
		var oCanvas = document.querySelector('canvas');
		var ctx = oCanvas.getContext('2d');

		var amount = 200;
		var dotArray = [];

		var range = 100;
		var first = true;

		for( var dot = 0; dot < amount; dot++ ){
			dotArray.push({
				x:rnd(0,oCanvas.width),
				y:rnd(0,oCanvas.height),
				speedX:rndSign()*rnd(1,3)*0.5,
				speedY:rndSign()*rnd(1,3)*0.5,
				r:rnd(1,4)
			})
		}

		setInterval(function(){
			ctx.clearRect(0,0,oCanvas.width,oCanvas.height);

			dotArray.forEach(function(dot,index){

				ctx.beginPath();
				ctx.fillStyle = "rgb(141, 134, 32)";
				var {
					x,
					y,
					r,
					speedX,
					speedY
				} = dot;

				ctx.arc(x,y,r,0,2*Math.PI,false);
				ctx.fill();

				dot.x += speedX;
				dot.y += speedY;

				if( dot.x < 0 || dot.x > oCanvas.width - r ){
					dot.speedX*=-1
				}

				if( dot.y < 0 || dot.y > oCanvas.height - r ){
					dot.speedY*=-1
				}
			})

dotArray.forEach(function(dot,index){
	/*
		dotArray.forEach(function(otherDot,otherIndex){
			var distance = Math.sqrt(
					Math.pow(dot.x - otherDot.x,2)+
					Math.pow(dot.y - otherDot.y,2)
				)
		})
	*/

	for( let i = index;i < dotArray.length;i++ ){
		var distance = Math.sqrt(
			Math.pow(dot.x - dotArray[i].x,2)+
			Math.pow(dot.y - dotArray[i].y,2)
		)

		if( distance < range ){
			ctx.beginPath();
			
			ctx.moveTo(dot.x,dot.y);
			ctx.lineTo(dotArray[i].x,dotArray[i].y);

			ctx.strokeStyle = `rgba(141, 134, 32,${1-distance/range})`;
			ctx.stroke();
		}
	}
})

		},16)

		function rnd(n,m){
			return parseInt(Math.random()*(m-n)+n)
		}

		function rndSign(){
			return Math.random() > 0.5 ? 1 : -1;
		}

		document.onmousemove = function({clientX,clientY}){

			if( first ){

				first = false;
				dotArray.unshift({
					x:clientX,
					y:clientY,
					speedX:0,
					speedY:0,
					r:1
				})
			} else {
				dotArray[0].x = clientX;
				dotArray[0].y = clientY;
			}
		}

};