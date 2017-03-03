function checkUsername(e) {
target = e.target;
alert("þetta: ?" + target);
}
var el = document.getElementById('username');
el.addEventListener('blur', checkUsername, false);