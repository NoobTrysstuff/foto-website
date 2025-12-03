document.addEventListener("DOMContentLoaded", () => {
  fetch("index_div_1.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("index_div_1").innerHTML = data;
    })
    .catch(error => console.error("Inhalt konnte nicht geladen werden:", error));
});