// ajax basket
// Grazie all'utilizzo dell'API e il suo url:
// https://www.boolean.careers/api/array/basket?n=numberPlayers
// Ricreare l’esercizio del basket, questa volta dando la possibilità all’utente
// di scegliere quanti giocatori generare per poi stampare la lista in una sidebar
// e vedere le statistiche correlate al player clicccato

var playersRequested = parseInt(prompt('quanti giocatori vuoi visualizzare?'));
var playersResponse;
$.ajax({
  url: 'https://www.boolean.careers/api/array/basket',
  method: 'GET',
  data: {
    n: playersRequested,
  },
  success: function(data){
    console.log(data);
    playersResponse = data.response;
    console.log(playersResponse);
    for (var i = 0; i < playersResponse.length; i++) {
      console.log(playersResponse[i].playerCode);
      $('.sidebar').append('<h3>' + playersResponse[i].playerCode + '</h3>');
    };
  },
  error: function(){
    alert('errore');
  }
});
// Parte importante, video -2:32:00
// CICLO FOR
// $(document).on('click','h3', function(){
//   for (var i = 0; i < playersResponse.length; i++) {
//     if (playersResponse[i].playerCode == $(this).text()) {
//       console.log(playersResponse[i]);
//       $('.stats').text('');
//       $('.stats').append('<h3>' + 'PlayerCode: ' + playersResponse[i].playerCode + '</h3>');
//       $('.stats').append('<h3>' + 'Rebounds: ' + playersResponse[i].rebounds + '</h3>');
//       $('.stats').append('<h3>' + 'Fouls: ' + playersResponse[i].fouls + '</h3>');
//       $('.stats').append('<h3>' + 'Points: ' + playersResponse[i].points + '</h3>');
//     }
//   }
// });




$(document).on('click','h3', function(){

var trovato = false;
var contatore = 0;
while (!trovato && contatore < playersResponse.length ) {
  if (playersResponse[contatore].playerCode == $(this).text()) {
    console.log(playersResponse[contatore]);
    $('.stats').text('');
    $('.stats').append('<h3>' + 'PlayerCode: ' + playersResponse[contatore].playerCode + '</h3>');
    $('.stats').append('<h3>' + 'Rebounds: ' + playersResponse[contatore].rebounds + '</h3>');
    $('.stats').append('<h3>' + 'Fouls: ' + playersResponse[contatore].fouls + '</h3>');
    $('.stats').append('<h3>' + 'Points: ' + playersResponse[contatore].points + '</h3>');
    trovato = true;
  }
  contatore++;
};

});
