// let options = {
// 	width: 1366,
// 	heeight: 768,
// 	background: 'red',
// 	font: {
// 		size: "16px",
// 		color: "#fff"
// 	}
// }

// // преобразовать объект в Json
// console.log(JSON.stringify(options));
// // parse обратная трансформация
// // так можно создавать глубокие объекты
// console.log(JSON.parse(JSON.stringify(options)));

// 1) создаем объект запроса
let request = new XMLHttpRequest();

// 2) НАСТРОили наш запрос
request.open("GET", "server.php", true, login, passsword);
// 1ый аргумент - это method передачи
// 2ой аргумент путь на сервер
// 3 - true, обычно никогда не надо false

// 3) отправили запрос
request.send();

// свойста запроса
request.status
request.statusText //текстовое сообщение от сервера
request.responseText
request.readyState // текущее состояние нашего сервера
