document.addEventListener("DOMContentLoaded", () => {
  fetch("ueberschrift_banner.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("ueberschrift_banner").innerHTML = data;
    })
    .catch(error => console.error("Banner konnte nicht geladen werden:", error));
});