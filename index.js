// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
var num = [];
		var x;
		var truer = [];
		truer[0] = 1;
		truer[1] = 2;
		truer[2] = 3;
		truer[3] = 4;
		truer[4] = 5;
		truer[5] = 6;
		function sendForm()
		{
			// получаем значение поля кнопки
			var keyBox = document.getElementById("valuer_1");
			var val = keyBox.value;
			if(val == truer[0])
			{
				alert("Успех!");
			}
			else
			{
				alert("Провал!");
			}
		}
 
		var sendButton_1 = document.getElementById("valuer_1");
		sendButton_1.addEventListener("click", sendForm);