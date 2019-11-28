var numeroAlatorio = function (size){
  return Math.floor(Math.random() * size);
}

var distaciaEntreDosPuntos = function (e, tesoro){
  var difX = e.offsetX - tesoro.x;
  var difY = e.offsetY - tesoro.y;
  return Math.sqrt((difX * difX) + (difY * difY));
}

var avisoDistanciaTesoro = function (distancia){
  if (distancia < 30) {
    return "Estás muy muy cerca!";
  } else if (distancia < 40) {
    return "Estás cerca";
  } else if (distancia < 60) {
    return "Un poco cerca";
  } else if (distancia < 100) {
    return "Un poco alejado";
  } else if (distancia < 180) {
    return "Estás lejos";
  } else if (distancia < 360) {
    return "Estás muy lejos";
  } else {
    return "Estás demasiado lejos!";
  }
}

var ancho = 400;
var alto = 400;

var tesoro = {
  x: numeroAlatorio(ancho),
  y: numeroAlatorio(alto)
};

var $mapa = document.querySelector('#mapa');
var $distancia = document.querySelector('#distancia');
var $clicks = document.querySelector('#clicks');
var $clicksPorDificultad = document.querySelector('#clicks-por-dificultad');
var clicks = 0;

var $dificultad = 'facil';
if ($dificultad == 'facil') {
  $clicksPorDificultad.innerHTML = `<h4>Solo tienes 40 clicks para encontrar el tesoro</h4>`
}

document.querySelector('#dificultad').onchange = function (e) {
  $dificultad = this.value;
  if ($dificultad == 'facil') {
    $clicksPorDificultad.innerHTML = `<h4>Solo tienes 40 clicks para encontrar el tesoro</h4>`
  }
  if ($dificultad == 'medio') {
    $clicksPorDificultad.innerHTML = `<h4>Solo tienes 20 clicks para encontrar el tesoro</h4>`
  }
  if ($dificultad == 'dificil') {
    $clicksPorDificultad.innerHTML = `<h4>Solo tienes 10 clicks para encontrar el tesoro</h4>`
  }
}

$mapa.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  if ($dificultad == 'facil' && clicks > 40) {
    alert('Haz perdido :(');
    location.reload();
  }
   if ($dificultad == 'medio' && clicks > 20) {
    alert('Haz perdido :(');
    location.reload();
  }
   if ($dificultad == 'dificil' && clicks > 10) {
    alert('Haz perdido :(');
    location.reload();
  }
  var distancia = distaciaEntreDosPuntos(e, tesoro);
  var distanciaTesoro = avisoDistanciaTesoro(distancia);
  $distancia.innerHTML = `<h2>${distanciaTesoro}</h2>`;
  $clicks.innerHTML = `<strong>Cantidad de clicks hechos ${clicks}</strong>`

  if (distancia < 20 ) {
    alert(`Haz encontrado el tesoro en ${clicks} clicks!`);
    location.reload();
  }
});
