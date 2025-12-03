document.addEventListener("DOMContentLoaded", () => {
  fetch("index_div_2.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("div_2").innerHTML = data;
    })
    .catch(error => console.error("Inhalt konnte nicht geladen werden:", error));
});