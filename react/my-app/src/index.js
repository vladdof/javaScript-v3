import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './button';
import registerServiceWorker from './registerServiceWorker';

// функции и классы в реакте с Большой буквы
// function Greet(props) {
// 	return(
// 		<h1> Hello {props.phrase}! My name is {props.name} </h1>
// 		)
// }

// function GreetAll() {
// 	return(
// 	<div>
// 		<Greet phrase="Pice" name="Anna"/>
// 		<Greet phrase="Pice" name="Vlad"/>
// 		<Greet phrase="Pice" name="Alex"/>
// 	</div>
// 	)
// } 

// класс app наследуюется(extends) от react компонента
class App extends React.Component {
	// отвечает метод за отображение на странице, метод это функция
	render() {
		return(
			<div className="wrapper">
				<Clock />
				<Button />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
