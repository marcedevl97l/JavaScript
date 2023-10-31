document.addEventListener('DOMContentLoaded', function () {
  // Variables para rastrear el estado de la calculadora
  let primerNumero = '';   // Almacena el primer número en la operación
  let operador = '';       // Almacena el operador seleccionado
  let segundoNumero = '';  // Almacena el segundo número en la operación

  // Función para actualizar el contenido del display
  function actualizarDisplay() {
      display.value = primerNumero + operador + segundoNumero;
  }

  // Obtén referencias a elementos del DOM
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.buttons button');

  // Agrega un controlador de eventos para los botones
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const contenido = button.textContent;

          if (button.classList.contains('operator')) {
              if (contenido === '=') {
                  // Si es el botón de igual, realiza la operación
                  switch (operador) {
                      case '+':
                          primerNumero = (parseFloat(primerNumero) + parseFloat(segundoNumero)).toString();
                          break;
                      case '-':
                          primerNumero = (parseFloat(primerNumero) - parseFloat(segundoNumero)).toString();
                          break;
                      case '*':
                          primerNumero = (parseFloat(primerNumero) * parseFloat(segundoNumero)).toString();
                          break;
                      case '/':
                          if (parseFloat(segundoNumero) === 0) {
                              display.value = 'Error';
                              return;
                          }
                          primerNumero = (parseFloat(primerNumero) / parseFloat(segundoNumero)).toString();
                          break;
                  }
                  segundoNumero = '';
                  operador = '';
                  actualizarDisplay();
              } else {
                  // Si es un operador (+, -, *, /), establece el operador actual
                  operador = contenido;
                  actualizarDisplay();
              }
          } else if (button.id === 'clear') {
              // Si es el botón "C", borra todo
              primerNumero = '';
              operador = '';
              segundoNumero = '';
              display.value = '';
          } else {
              // De lo contrario, es un número o dígito
              if (!operador) {
                  // Si no se ha seleccionado un operador, agrega al primer número
                  primerNumero += contenido;
              } else {
                  // Si se ha seleccionado un operador, agrega al segundo número
                  segundoNumero += contenido;
              }
              actualizarDisplay();
          }
      });
  });
});
