var quotes=[
    "\"Don't Let\ <br> \ The Voice Of Others Opinions\ <br> \ Drown Out Your Inner Voice\" <br> - Steve Jobs",
    "\"However Difficult\ <br> \ Life May Seem,\ <br> \ There Is Always Something You Can Be Successful At\" <br> - Stephen Hawking",
    "\"Everyone Falls\ <br>\ Down.\ <br> \ Getting Back Up Is How You Learn How To Walk\" <br> - Walt Disney",
    "\"One Small Crack Does Not Mean You Are Broken.\ <br>\ It Means You Were Put To The Test And You Didn't Fall Apart\"", 
    "\"You're Braver\ <br>\ Than You Believe,\ <br> \ Stronger Than You Seem\ <br> \ And Smarter Than You Think\" <br> - A.A Milne",
];
function NewQuote(){
    var randomNumber= Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotedisplay').innerHTML=quotes[randomNumber];
}