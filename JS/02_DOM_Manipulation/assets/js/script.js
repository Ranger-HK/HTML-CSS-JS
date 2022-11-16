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

    document.getElementById("display").innerText=document.getElementById("ipf").value;
});

