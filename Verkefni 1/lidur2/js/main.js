
var str = "";
var el = document.getElementById('listi');
var listi = ['Tannbursti', 'Klósettpappír', 'Kjúklingur','Lion Bar','USB lykill'];
var str = "kul";
function foo(){ function bar() { return 3; } return bar(); function bar() { return 8; } } window.alert(foo()); 
var result = (true || notkul); window.alert(result); // true 
for (var i = 0 ; i < listi.length ; i++) {
	var c = document.createElement('LI');
	c.innerHTML = listi[i] + " "+str;
	el.appendChild(c);	
}