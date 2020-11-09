//ждет пока структура html/css загрузяться, легче чем load
window.addEventListener('DOMContentLoaded', function() {
	// Он должен содержать свойства: height, width, bg, fontSize, textAlign
	// создаем класс
	class Options {
		// свойства
		constructor(height, width, fontSize, textAlign, bg) {
			this.height = height;
			this.width = width;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
			this.backgroundColor = bg;
		}

		// методы
		createDiv() {
			// создаем эл
			let p = document.createElement('p'),
				col = document.querySelector('.col-auto');
			// помещаем на страницу
			col.appendChild(p);

			// любой текст
			p.textContent = 'Далеко-далеко за словесными горами в стране';

			// изменять свойства объекта
			p.style.cssText = `height: ${this.height}px;
							   width: ${this.width}px;
							   font-size: ${this.fontSize}px;
							   text-align: ${this.textAlign};
							   background-color: ${this.backgroundColor};`;

		}
	}

	let div = new Options(350, 350, 39, 'left', 'green');
	div.createDiv();

});
