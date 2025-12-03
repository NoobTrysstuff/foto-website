document.addEventListener("DOMContentLoaded", () => {
  fetch("galerie_div_1.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("galerie_div_1").innerHTML = data;
    })
    .catch(error => console.error("Inhalt konnte nicht geladen werden:", error));
});