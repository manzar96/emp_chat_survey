

// function reqListener () {
//     var text = this.responseText;
// }

function makerequest_async () {
    var xmlhttp = new XMLHttpRequest()
    // xmlhttp.addEventListener("load", reqListener);
    xmlhttp.open("GET", "http://localhost:5001/page1", false);
    xmlhttp.send();
    xmlhttp.onreadystatechange = (e) => {
        // console.log(xmlhttp.response)
        return xmlhttp.response
    }
}

function makerequest_sync(){
   var request = new XMLHttpRequest();
    request.open('GET', "http://localhost:5001/page1", false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
      // console.log(request.responseText);
      return request.responseText
    }
}





