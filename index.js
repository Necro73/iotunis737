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
		function sendForm(event)
		{
			// получаем значение поля кнопки
			var idopj = event.target.id;
			if(num[idopj] == truer[0])
			{
				alert("Успех!");
			}
			else
			{
				alert("Провал!");
			}
		}
 
    //for (var i = 1; i < 49; i++)
   // {
   //   num[i-1] = i;
  //  }

    for (var i = 1; i < 49; i++)
    {
      var sendButton = document.getElementById("valuer_" + i);
      sendButton.addEventListener("click", sendForm);
    }