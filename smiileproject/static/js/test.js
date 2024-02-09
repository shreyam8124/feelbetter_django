document.getElementById("add").onclick = function() {
    //First things first, we need our text:
    var text = document.getElementById("idea").value; //.value gets input values

    //Now construct a quick list element
    var li = "<li>" + text + "</li>";

    //Now use appendChild and add it to the list!
    document.getElementById("list").appendChild(li);
}
document.getElementById("pw")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'enter') {
        document.getElementById("myButton").click();
    }
});
window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    document.getElementById('txtlist').innerHTML = data.name;
}

function myFunction() {
    var Gender = document.getElementsByName('Gender')[0].value;
    var Status = document.getElementsByName('Status')[0].value;
    alert('Gender: ' + Gender + ', Status: ' + Status);
  }