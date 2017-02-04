var pizza = {nafn: "ObjectPizza",staerd: "Stór", alegg: ["ostur","skinka","nautahakk","pepperoni","ananas"],verd: "2.590 kr", getpizza: function(){
		return "Nafn: "+ this.nafn + "<br>" +
	"Stærð: " + this.staerd + "<br>" +
	"Álegg: " + this.alegg + "<br>"  +
	"Verð: " + this.verd;
}};
var A = document.getElementById('object');
var B = document.createElement('p')
A.appendChild(B)
B.innerHTML = pizza.getpizza();;
var petsa = function(nafn,staerd,alegg,verd) {
	this.nafn = nafn;
	this.staerd = staerd;
	this.alegg = alegg;
	this.verd = verd;
}

var pulsupitsa = new petsa("Pulsupitsa","Miðstærð","Pylsur, Pulsur,Pepperoni,Salami,Oregano","2190 kr");
var beikonborgari = new petsa("beikonborgarapetsa","Stór","Beikon, Nautakjöt, Egg, Franskar, Tómatsósa, Semamfræ","2790 kr");

petsa.prototype.getpetsa = function() {
	return "Nafn: "+ this.nafn + "<br>" +
	"Stærð: " + this.staerd + "<br>" +
	"Álegg: " + this.alegg + "<br>"  +
	"Verð: " + this.verd;
}

f = document.getElementById('function');
a = document.createElement('p');
b = document.createElement('p');
f.appendChild(a);
f.appendChild(b);
a.innerHTML = pulsupitsa.getpetsa()
b.innerHTML = beikonborgari.getpetsa();;