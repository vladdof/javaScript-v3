let age = document.getElementById('age');

	function showUser(surname, name) {
		alert('Пользователь ' + surname + ' ' + name + ' , возраст ' + this.value);
	}

showUser.call(age, 'vlad', 'efanov');
