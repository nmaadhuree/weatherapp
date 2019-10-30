var obj1;
var city ;
function getweather() {
   city=document.getElementsByName("cityname")[0].value;
   console.log(city);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //Typical action to be performed when the document is ready:
            document.getElementById("display").innerHTML = "The weather at " + city + " is";
            obj1 = JSON.parse(xhttp.responseText);
            console.log(obj1);
            document.getElementById("humidity").innerHTML="Humidity:"
            document.getElementById("chhumid").innerHTML = obj1.main.humidity;
            document.getElementById("pressure").innerHTML = "Pressure:"
            document.getElementById("chpressure").innerHTML = obj1.main.pressure;
            document.getElementById("temperature").innerHTML = "Temperature:"
            document.getElementById("chtemp").innerHTML = obj1.main.temp;
            document.getElementById("type").innerHTML = "Type:"
            document.getElementById("chtype").innerHTML = obj1.weather[0].main;
            document.getElementById("description").innerHTML = "Description:"
            document.getElementById("chdesc").innerHTML = obj1.weather[0].description;
        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=a3b15be8937e2850e67a5cc0c7e2d052", true);
    xhttp.send();

}

