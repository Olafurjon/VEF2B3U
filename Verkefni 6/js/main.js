var div = document.createElement('div');
var h2 = document.createElement('h2');
document.body.appendChild(h2);
h2.innerHTML = ('Quizmaster3000');
div.className = "quiz";
document.body.appendChild(div);
var ul = document.createElement('ul');
div.appendChild(ul)
var li = document.createElement('li');

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function spurningamaker(spurning,moguleikar,rettsvar){
	this.spurning = spurning;
	this.moguleikar = moguleikar;
}
var spurning1 = new spurningamaker("Hver stal kökunni úr krúsinni í gær?",["Hann","Hún","Það","Þessi"],"Hann");
var spurning2 = new spurningamaker("Er þetta forrit að virka?",["Já","Nei"],"Já");
var spurning3 = new spurningamaker("Pabbi Bjarna á 3 syni, Ripp, Rapp og... ?", ["Jón","Rupp","Kjartan","Bjarna"],"Bjarna");


var spurningar = [spurning1,spurning2,spurning3];

function buatilSpurningu(){
	var x = Math.round(Math.random() * + Math.abs(spurningar.length - 1))
	var li = document.createElement('li');
	ul.appendChild(li);
	var p = document.createElement('p');
	li.appendChild(p).innerHTML = spurningar[x]['spurning'];
	for (var i = 0; i < spurningar[x]['moguleikar'].length ; i++) {
		var li = document.createElement('li');
	ul.appendChild(li);
	var p = document.createElement('p');
	var abcd = ["A: ","B: ","C: ","D: "];

	li.appendChild(p).innerHTML = abcd[i] + spurningar[x]['moguleikar'][i];
	};
	
}

buatilSpurningu();