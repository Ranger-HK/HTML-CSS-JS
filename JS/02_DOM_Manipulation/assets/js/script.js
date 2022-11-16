document.getElementsByTagName("h1")[0].innerText = "Hello java Script";
document.getElementsByTagName("h1")[0].style.fontSize = "30px";
document.getElementsByTagName("h2")[0].innerText = "GDSE";
document.getElementsByTagName("h3")[0].style.color = "red";
document.getElementsByTagName("p")[0].style.backgroundColor = "red"
document.getElementsByTagName("p")[0].style.color = "white "
document.querySelector("input").value = "C001";

// for remove content by affter click button
document.getElementsByTagName("button")[0].addEventListener("click", function () {
    document.getElementsByTagName("h2")[0].remove();
    alert("Remove Done");

});

document.getElementById("btn2").addEventListener("click", function () {
    alert("Remove Done");

    document.getElementById("display").innerText = document.getElementById("ipf").value;
});

// Add New image to attribute

document.getElementById("img").getAttributeNames();
document.getElementById("img").getAttribute("src");
document.getElementById("img").setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIX4fdymadei7FiL-19pxFAWPLEJgQlNEww&usqp=CAU");


//set image to click button

document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("ipf").value;
    document.getElementById("img").setAttribute("src", document.getElementById("ipf").value);
});

// add new li element

document.querySelector("ul").innerHTML;
document.querySelector("ul").innerHTML = "<li>CMJD</li>";
document.querySelector("ul").innerHTML = "<li>CMJD</li> <li>GDSE</li>"; // ----------> 1st way
document.querySelector("ul").innerHTML += "<li>ABSD</li>"; //----------> 1st way


document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("ipf").value;
    document.querySelector("ul").innerHTML +="<li>"+document.getElementById("ipf").value+"</li>";
});