document.getElementById('conversionForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
  
    var conversionRate = 1.2; // Taux de conversion fictif
    var convertedAmount = amount * conversionRate;
  
    document.getElementById('result').textContent = `Résultat : ${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  });