document.addEventListener ("DOMContentLoaded", function(){
  var apiKey = "Nice Try"
  var output = document.querySelector("#output");
  var city = document.querySelector("#city");
  var submitButton = document.querySelector("#submit");
  var prefix = "http://api.openweathermap.org/data/2.5/weather?q="
  var theUrl = prefix + city.value + "&APPID=" + apiKey;

  var HttpClient = function() {
    this.get = function(theUrl, theCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                theCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", theUrl, true );
        anHttpRequest.send( null );
    }
  };
  var client = new HttpClient();
  client.get(theUrl, function(response){
    output.innerHTML = response;
  });

  function nextCity(){
    var next = new HttpClient();
    city = document.querySelector("#city").value;
    theUrl = prefix + city.value + "&APPID=" + apiKey;
    next.get((theUrl), function(response){
      output.innerHTML = response;
    });
  }

  submitButton.addEventListener("click", nextCity);
});
