var quotes=[
    "\"Dream Dream Dream...\ <br> \ Dreams Transform Into Thoughts\ <br>\ And Thoughts Result Into Action\"<br>- APJ Abdul Kalam",
    "\"Constantly Think About How You Could Be Doing Things Better.\ <br> \ Keep Questioning Yourself\" <br> - Elon musk",
    "\"Good Ideas Are Always Crazy- \ <br> \ Until They’re Not\" <br> - Elon Musk",
    "\"The Best\ <br> \ Is Yet To Be\" <br> - Robert Browning",
    "\"Believe You Can\ <br> \ And You’re Halfway There\" <br> -Teddy Roosevelt",
];
function NewQuote(){
    var randomNumber= Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotedisplay').innerHTML=quotes[randomNumber];
}
function testJS() {
    var b = document.getElementById('name').value,
        url = '/Users/Shreds/smiileproject/smiileproject/templates' + encodeURIComponent(b);
    document.location.href = url ; 
}
