var color=document.querySelector('#color');
	var text=document.querySelector('#hex');
	const color1=document.querySelector('#color1');
	var text1=document.querySelector('#hex1');
	const color2=document.querySelector('#color2');
	var text2=document.querySelector('#hex2');
	const color3=document.querySelector('#color3');
	var text3=document.querySelector('#hex3');
		color.addEventListener('input',function (){
			var colorInput=color.value;
			document.body.style.background =`linear-gradient(to right,${color.value},${color1.value},${color2.value},${color3.value})`;
			text.value=colorInput;
		});
		color1.addEventListener('input',()=>{
			var colorInput1=color1.value;
			document.body.style.background =`linear-gradient(to right,${color.value},${color1.value},${color2.value},${color3.value})`;
			text1.value=colorInput1;

		});
		color2.addEventListener('input',()=>{
			var colorInput2=color2.value;
			document.body.style.background =`linear-gradient(to right,${color.value},${color1.value},${color2.value},${color3.value})`;
			text2.value=colorInput2;

		});
		color3.addEventListener('input',()=>{
			var colorInput3=color3.value;
			document.body.style.background =`linear-gradient(to right,${color.value},${color1.value},${color2.value},${color3.value})`;
			text3.value=colorInput3;

		});
		