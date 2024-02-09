var quotes=[
    "\"First Think,\ <br> \ Second Dream,\ <br>\ Third Believe and\ <br>\ Finally Dare\" <br> - Walt Disney",
    "\"All Your Dreams\ <br> \ Can Come True\ <br> \ If You Have The Courage To Pursue Them\" <br> - Walt Disney",
    "\"The Way\ <br> \ I See It,\ <br> \ If You Want The Rainbow\ <br>\ You Gotta Put Up With The Rain\" <br> - Dolly Parton",
    "\"Float Like \ <br>\ A Butterfly,\ <br> \ Sting Like A Bee\" <br> - Muhammad Ali",
    "\"Speed Has Never Killed Anyone\ <br> \ Suddenly Becoming Stationary,\ <br>\ Thats What Gets\ <br> \ You\" <br> -Jeremy Clarkson",
];
function NewQuote(){
    var randomNumber= Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotedisplay').innerHTML=quotes[randomNumber];
}