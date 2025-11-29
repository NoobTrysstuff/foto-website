document.addEventListener("DOMContentLoaded", () => {
  fetch("ueberschriften_banner.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("ueberschriften_banner").innerHTML = data;
    })
    .catch(error => console.error("Banner konnte nicht geladen werden:", error));
});