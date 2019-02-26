window.onload = function () {

    "use strict";
    fetch("data/specs.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);
    });




// var ajax = new XMLHttpRequest();
// ajax.open('GET', '/data/specs.json');
// ajax.onload = function () {
//     console.log('entoru no request');
//     if (ajax.status >= 200 && ajax.status < 400) {
//         var autoBots = JSON.parse(ajax.responseText).Autobots;
//     }
//     ajax.onerror = function () {
//         console.log("Connection error");
//     };
//     ajax.send();
// }

}