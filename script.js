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
function animateTextByWord(id) {
  const textEl = document.getElementById(id);
  const text = textEl.textContent;
  textEl.innerHTML = "";

  const words = text.split(" ");

  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement("span");
    wordSpan.style.animationDelay = `${wordIndex * 0.2}s`; // délai entre les mots
    wordSpan.textContent = word + " "; // on garde l’espace
    textEl.appendChild(wordSpan);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  animateTextByWord("animatedText");
  animateTextByWord("animateText");
});
