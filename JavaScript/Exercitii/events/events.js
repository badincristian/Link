var button = document.querySelector("input");
var element = document.getElementById("time");

var showTime = function() {
    var date= Date();
    element.innerText = date;
}
function changeStyle() {
    element.className = "newStyle";
}
// showTime();
// button.onclick = showTime;
// button.onclick = changeStyle;

// button.onclick = function() {
//     showTime();
//     changeStyle();
// }
button.addEventListener("click", showTime);
button.addEventListener("click", changeStyle);

// button.removeEventListener("click", changeStyle);
