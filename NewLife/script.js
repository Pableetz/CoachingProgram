// Sélectionnez les éléments
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlay-content");

// Fonction pour afficher l'overlay
function showOverlay() {
  overlay.style.display = "flex";
  setTimeout(function () {
    overlay.style.opacity = "1"; // Réglez l'opacité à 1 pour activer la transition
  }, 100); // Ajoutez un délai pour permettre la transition
}

// Fonction pour masquer l'overlay
function hideOverlay() {
  overlay.style.opacity = "0"; // Réglez l'opacité à 0 pour activer la transition
  setTimeout(function () {
    overlay.style.display = "none";
  }, 500); // Ajoutez un délai pour permettre la transition
}

// Attachez les gestionnaires d'événements de clic aux éléments du logo et du titre
document.getElementById("overlay-logo").addEventListener("click", hideOverlay);
document.getElementById("overlay-title").addEventListener("click", hideOverlay);

// Appelez la fonction pour afficher l'overlay (par exemple, lors du chargement de la page)
showOverlay();
