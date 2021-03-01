var eta = parseInt(prompt("Inserisci età"));

var viaggio = parseFloat(prompt("Quanti km devi fare?"));

var price = viaggio * 0.21;



console.log(eta, price, viaggio);


if (isNaN(eta)){
  document.getElementById('prezzo').innerHTML = "Inserisci età valida";
} else if (isNaN(viaggio)){
  document.getElementById('prezzo').innerHTML = "Inserisci numero Km valido";
} else{
  if (eta < 18) {
    var sconto = price/100 *20;
    console.log(sconto);
    price -= sconto;
    price = price.toFixed(2);
    sconto = sconto.toFixed(2);
    document.getElementById('eta').innerHTML = "Anni: " + eta;
    document.getElementById('km').innerHTML = "Lunghezza viaggio: " + viaggio + "km";
    document.getElementById('prezzo').innerHTML = "Prezzo biglietto: " + price + "€";
    document.getElementById('sconto').innerHTML = "Sconto di " + sconto + "€ con la tariffa 'Junior fino a 18 anni'";
  } else if (eta > 65){
    var sconto = price/100 *40;
    price -= sconto;
    price = price.toFixed(2);
    sconto = sconto.toFixed(2);
    document.getElementById('eta').innerHTML = "Anni: " + eta;
    document.getElementById('km').innerHTML = "Lunghezza viaggio: " + viaggio + "km";
    document.getElementById('prezzo').innerHTML = "Prezzo biglietto: " + price + "€";
    document.getElementById('sconto').innerHTML = "Sconto di " + sconto + "€ con la tariffa 'Senior over 65 anni'";
  }
  else {
    document.getElementById('eta').innerHTML = "Anni: " + eta;
    document.getElementById('km').innerHTML = "Lunghezza viaggio: " + viaggio + "km";
    document.getElementById('prezzo').innerHTML = "Prezzo biglietto: " + price + "€";
    price = price.toFixed(2);
  }
}


console.log(eta, price, viaggio);
