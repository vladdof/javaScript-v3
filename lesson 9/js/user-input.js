
let age = document.getElementById('age');

age.addEventListener('change', function() {

	let	value = age.value;

	function showUser(surname, name) {
		alert("Пользователь " + surname + " " + name + " , возраст " + this.value);
	}

	console.log(showUser.call(age, 'Efanov', 'Vlad'));

});