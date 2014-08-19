// //DOM = Document Object Model

// //objetos (Navigator, window y document)
// 	//variables
// 	//funciones

// //.- document
// // Math

// var pi=3.14159654;
// pi= Math.floor(pi); //redondear al mínimo
// document.write(pi);
// pi=3.14159654;
// pi= Math.ceil(pi); //redondear al siguiente entero
// document.write(pi);

// function mostrar (pos)
// {
// 	document.write(pos.coords.latitude+ "," + pos.coords.longitude);	
// }

// var pos=navigator.geolocation.getCurrentPosition(mostrar);

// //fin mostrar ubicación actual


//
// function estructura(n,t,p1,p2,p3){
// 	var Obras=
// 	{
// 		nombre:n,
// 		tipo:t,
// 		pR:p1,
// 		pO:p2,
// 		pP:p3,
// 		datos:{tipo:"tierra",debilidad:"fuego"}
// 	};

// 	return Obras;
// }

// var ooo=estructura("GDO 1000","mmt",10,5,5);
// var xxx=estructura("GDO 2000","mmt",8,5,3);

// console.log(xxx);

// document.write(xxx.datos.debilidad);


function Obra(a,b){
	this.nombre=a;
	this.tipo=b;
	this.img="img/enconstruction.gif";
	this.sonido="uyuyyy";
	this.grito=function(){
		alert(this.sonido);
	}
}

function inicio(){

var o1=new Obra("GDO Teco-444","mmto");
o1.tipo="cambio tipo";
o1.grito();

var o2=new Obra("GDO Teco-144","construccion");
o2.img="img/in.gif";

obra.innerText=obra.textContent+" "+o1.nombre;
detalle.innerText=obra.textContent+" "+o1.tipo;
abatar.src=o2.img;

}