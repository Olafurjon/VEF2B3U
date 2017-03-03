var div = document.createElement('div');
var h2 = document.createElement('h2');

div.className = "quiz";
document.body.appendChild(div);
div.appendChild(h2);
h2.innerHTML = ('Quizmaster3000');
var ul = document.createElement('ul');
div.appendChild(ul)
var li = document.createElement('li');

function shuffleArray(array) {
 let m = array.length, t, i;
 // While there remain elements to shuffle…
 while (m) {
 // Pick a remaining element…
 i = Math.floor(Math.random() * m--);
 // And swap it with the current element.
 t = array[m];
 array[m] = array[i];
 array[i] = t;
 }
 return array;
}

function spurningamaker(spurning,moguleikar,rettsvar){
	this.spurning = spurning;
	this.moguleikar = shuffleArray(moguleikar);
	this.rettsvar = rettsvar;
}
var spurning1 = new spurningamaker("Hver stal kökunni úr krúsinni í gær?",["Hann","Hún","Það","Þessi"],"Hann");
var spurning2 = new spurningamaker("Er þetta forrit að virka?",["Já","Nei"],"Já");
var spurning3 = new spurningamaker("Pabbi Bjarna á 3 syni, Ripp, Rapp og... ?", ["Jón","Rupp","Kjartan","Bjarna"],"Bjarna");


var spurningar = [spurning1,spurning2,spurning3];

function birtaSpurningu(){
	var x = Math.round(Math.random() * + Math.abs(spurningar.length - 1))
	var li = document.createElement('li');
	ul.appendChild(li);
	var p = document.createElement('p');
	li.appendChild(p).innerHTML = spurningar[x]['spurning'];
	for (var i = 0; i < spurningar[x]['moguleikar'].length ; i++) {
		var li = document.createElement('li');
			li.className = "ABCD";
	ul.appendChild(li);
	var p = document.createElement('p');
	var abcd = ["A: ","B: ","C: ","D: "];
	li.appendChild(p).innerHTML = abcd[i] + spurningar[x]['moguleikar'][i];
	};}


div.addEventListener("click",function(e) {
	if(e.target && e.target.matches("li.ABCD")) {
		e.target.className += " active";
	}
});

birtaSpurningu()

// Lausn við lið 4
// function checkUsername(e) {
//target = e.target;
//alert("þetta: ?" + target);-
//}
//var el = document.getElementById('username');
//el.addEventListener('blur', checkUsername, false); 