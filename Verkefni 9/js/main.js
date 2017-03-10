/*Hér bý ég til elementin sem ég mun nota í þessu */
var div = document.createElement('div');
var h2 = document.createElement('h2');
/*gefur divinu classnafn */
div.className = "quiz";
document.body.appendChild(div);
div.appendChild(h2);
h2.innerHTML = ('Quizmaster3000');
var ul = document.createElement('ul');
div.appendChild(ul)
var li = document.createElement('li');
/*ShuddleArrayin sem þú bentir okkur á */
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
/*Held utan um rétt og röng svör*/
var rett = 0;
var rangt = 0;
/*Heldur utan um rétta svarið í spurningunni í gangi*/
var currentrettsvar = 0;

/*Bý til spurningamakerinn*/
function spurningamaker(spurning,moguleikar,rettsvar){
	this.spurning = spurning;
	this.moguleikar = shuffleArray(moguleikar);
	this.rettsvar = rettsvar;
}
/*By til nokkrar spurningar, hægt er bara að búa til fleiri spurningar og setja þær í spurningar array og það bara virkar*/
var spurning1 = new spurningamaker("Hver stal kökunni úr krúsinni í gær?",["Hann","Hún","Það","Þessi"],"Hann");
var spurning2 = new spurningamaker("Er þetta forrit að virka?",["Já","Nei"],"Já");
var spurning3 = new spurningamaker("Pabbi Bjarna á 3 syni, Ripp, Rapp og... ?", ["Jón","Rupp","Kjartan","Bjarna"],"Bjarna");

/*Set spurningarnar í heild inní array*/
var spurningar = [spurning1,spurning2,spurning3];
/*Sér um að birta spurningarnar og fá random spurningu*/
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
	currentrettsvar =  spurningar[x]['rettsvar'];
	index = x;	
	
	};}

/*skilboð sem birtast í lok leiks*/
function gameover(){

	var p = document.createElement('p');
	if (rett > rangt)
	{
		if(rangt == 1){p.innerHTML = "Þú Vannst með "+ rett + " rétt svör og " + rangt+   " rangt svar"} else {p.innerHTML = "Þú Vannst með "+ rett + " rétt svör og " + rangt+  " röng svör"};
	}
	else
	{
		if(rett == 1){ p.innerHTML = "Þú tapaðir með "+ rangt + " röng svör og " + rett + " rétt svar"} else { p.innerHTML = "Þú tapaðir með "+ rangt + " röng svör og " + rett + " rétt svör"};
	}
	div.appendChild(p);
}
/*Resize event listener, breytir quizmaster3000 í 1000*/
window.addEventListener("resize",quizmaster,false);
/*basic*/
function quizmaster(){	
	
	if (h2.innerHTML == ('Quizmaster1000'))
	{h2.innerHTML = ('Quizmaster3000');}
	else{h2.innerHTML = ('Quizmaster1000');}
	
}

window.addEventListener("keydown", checkKeyPressed, false);
/*hefði getað randomizað bara liti en whatevs*/
function checkKeyPressed(e) {
	
    if (e.keyCode == "65") {
      document.body.style.backgroundColor ="blue";	
    }
	if (e.keyCode == "83") {
      document.body.style.backgroundColor ="black";		
    }
	
    if (e.keyCode == "68") {
      document.body.style.backgroundColor ="white";		
    }
}
/*Hannaði þennan ekki en þessi virkar vel, fékk hann frá http://stackoverflow.com/questions/14226803/javascript-wait-5-seconds-before-executing-next-line */
var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

/*Hlustar eftir clicki á li tögin og reactar eftir því*/
div.addEventListener("click",function(e) {
	if(e.target && e.target.matches("li.ABCD")) {
		if(e.target.innerHTML.includes(currentrettsvar))
		{
		e.target.classList.toggle("rett");
		delay(function(){
    	while( ul.firstChild ){
		ul.removeChild( ul.firstChild );
		}
		if (spurningar.length == 0)
		{
			gameover()
		}
		else{
		birtaSpurningu()
		}
		}, 600 ); // end dela
		
		spurningar.splice(index,1);
		rett += 1;


	
		}
		else
		{
		e.target.classList.toggle("rangt");
		spurningar.splice(index,1);
		rangt +=1;
		delay(function(){
    	while( ul.firstChild ){
		ul.removeChild( ul.firstChild );
		}
		if (spurningar.length == 0)
		{
			gameover()
		}
		else{
		birtaSpurningu()
		}
		}, 600 ); // end dela

		}
		

	}



});
/*Birtir fyrstu spurningu við initialization*/
birtaSpurningu()

