document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("div_1").innerHTML = data;
    })
    .catch(error => console.error("Inhalt konnte nicht geladen werden:", error));
});