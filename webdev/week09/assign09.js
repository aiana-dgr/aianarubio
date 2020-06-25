function loadDoc(url) {
  var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {                
        if (url === "usa.txt" || url === "mexico.txt" || url === "canada.txt" || url === "russia.txt") {
          getCities(this.responseText);
        }   
        else if (url === "json.txt" || url === "json1.txt") {
          jsonRequest(this.responseText);
        }
      } else if (this.readyState == 4 && this.status == 404) {
        document.getElementById('info').innerHTML = "File does not exist";
        document.getElementById('info').style.color = "red";
      }  
    };
    request.open("GET", url, true);
    request.send();
  }

function getCities(responseText) {
  var cities = responseText.split(/\s{2,25}|\n/);
  var table = "<table><tr><th>City:</th><th>Population:</th></tr>";
  for (i = 0; i < cities.length - 1; i++) {
    table += "<tr><td>" + cities[i] + "</td><td>" + cities[i + 1] + "</td></tr>";
    i++;
  }
    
  table += "</table>";
  document.getElementById('cities').innerHTML = table;
};
                
function jsonRequest(responseText) {                 
  var json = JSON.parse(responseText);
  var table = "<table><tr><th>Name:</th><th>Address:</th><th>Major:</th><th>GPA:</th></tr>";
  for (var i = 0; i < json.students.length; i++) {
    table = table + "<tr><td>" + json.students[i].first + " " + 
    json.students[i].last + "</td><td>" + json.students[i].address.city + 
    ", " + json.students[i].address.state + ", " + 
    json.students[i].address.zip + "</td><td>" + json.students[i].major + 
    "</td><td>" + json.students[i].gpa + "</td></tr>";
  }

  table += "</table>";
  document.getElementById('info').innerHTML = table;
  document.getElementById('info').style.color = "white";
};