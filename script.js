//HTTP Statuses
//200: "OK"
//403: "Forbidden"
//404: "Not Found"

var button = document.querySelector("button");
button.addEventListener("click", loadText);

function loadText () {
    // console.log("Button has just been clicked")
    // Create XHR object
    var xhr = new XMLHttpRequest();
    //Open - type, url/file, async
    xhr.open('GET', 'sample.txt', true)
    
    xhr.onload = function() {
        if(this.status ==200) {
            console.log(this.responseText)
        }
    }

    //Sends request
    xhr.send();
}
