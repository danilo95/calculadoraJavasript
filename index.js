let screen = document.getElementById('answer'); //seleciono el input que muestra los resultados
buttons = document.querySelectorAll('button'); //quer selector all me permite obtener todos los tipos ya sea por id, class en este caso seleciona todos los elementos html tipo input
let screenValue = ''; // lo que muestro en pantalla
for (item of buttons) {
	//botons ahora es un arerglo de nodes con los valores, entonces uso un for avanzado para recorer cada elemento, aca item sera cada elemento idnividual de ese arreglo de nodos
	item.addEventListener('click', (e) => {
		// asigno el listener ahora a cada nodo de los botones respondera al evento onclick, e es la variable que tiene toda la informacion perteneciente a ese boton.
		buttonText = e.target.innerText; // e.target.innerText lo que hace es que al boton que selecione le toma el texto que contenga
		if (buttonText == 'X') {
			// lo correcto seria usar un switch case en lugar de muchos if, pero vot contra tiempo esto funciona igual pero menos optimo, cada if compara el valor,
			buttonText = '*'; //aca le asigno el de multiplicacion porque el boton tiene una x entonces encesito que sea * para que lo entienda javascript
			screenValue += buttonText; //screen value concatena lo que venga del evento del boton y lo guarda
			screen.value = screenValue; //recordemos  que screen es  el valor del textobox donde esta el resultado entonces este es un node que tiene un valor llamado value, llego a el por medio de scree.value y le asigno lo que sea que venga  en screen value
		} else if (buttonText == 'C') {
			screenValue = '';
			screen.value = screenValue;
		} else if (buttonText == '=') {
			screen.value = eval(screenValue);
			///esto es importante si te fijas lo que hemos venido haciendo en cada if es realmente concatenar elemntos si quieres darte cuenta haws  al final del ultimo else console.log(screenValue) veras que todo se convierte en string entonces aca aprovechamos eval, eval es una funcion de javascript que permite que si le envamos una cade de caracteres valida, hara la operacio en toras palabras le estamos mandadndo por ejemplo 4+4 54+8 8-7 9/4 como string pero como esta son expresiones matematicas validas, el las opera,. esto optimiza el codigo y nos evita hacer un switch case donde debamos saber si viene una suma una resta multiplicaicon eval lo resulve por nosotros en una linea
		} else {
			screenValue += buttonText;
			screen.value = screenValue;
		}
	});
}
