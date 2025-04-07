const btnToCv = document.getElementById("btnToCv");
if (btnToCv){
    btnToCv.addEventListener("click", () => {
window.location.href= "cv.html";
    } );
}

const btnToIndex = document.getElementById("btnToIndex");
if(btnToIndex){
    btnToIndex.addEventListener("click", () => {
        window.location.href= "index.html";
    } );
}
function animateTextByLetter(id) {
  const textEl = document.getElementById(id);
  const text = textEl.textContent;
  textEl.innerHTML = "";

  // On coupe le texte en lettres
  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${index * 0.05}s`; // délai entre chaque lettre
    textEl.appendChild(span);
  });
}

// Quand la page se charge, on lance l'animation
window.addEventListener("DOMContentLoaded", () => {
  animateTextByLetter("animatedText");
});