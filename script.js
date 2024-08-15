let balance = 1000;
let stockPrice = 100;
let stocksOwned = 0;

function updateUI() {
    document.getElementById('balance').innerText = balance.toFixed(2);
    document.getElementById('stock-price').innerText = stockPrice.toFixed(2);
    document.getElementById('stocks-owned').innerText = stocksOwned;
}

function buyStock() {
    if (balance >= stockPrice) {
        balance -= stockPrice;
        stocksOwned += 1;
        stockPrice += Math.random() * 10;
        updateUI();
    }
}

function sellStock() {
    if (stocksOwned > 0) {
        balance += stockPrice;
        stocksOwned -= 1;
        stockPrice -= Math.random() * 10;
        updateUI();
    }
}

updateUI();
