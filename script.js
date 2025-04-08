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

const color= document.getElementById("color");
color.addEventListener("change", ()=>{
  setMainColor(color.value);
})
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
function setMainColor(color){
  
  document.getElementById("header").style.backgroundColor =color;
  document.getElementById("education").style.backgroundColor =color;
  document.getElementById("ico").style.backgroundColor =color;
  document.getElementById("wom").style.backgroundColor =color;
  document.getElementById("lan").style.backgroundColor =color;
  document.getElementById("lois").style.backgroundColor =color;
  document.getElementById("cont").style.backgroundColor =color;
  document.getElementById("pro").style.backgroundColor =color;
  document.getElementById("pro1").style.backgroundColor =color;
  document.getElementById("pro2").style.backgroundColor =color;
  document.getElementById("pro3").style.backgroundColor =color;
  document.getElementById("pro4").style.backgroundColor =color;
  
}

window.addEventListener("DOMContentLoaded", function () {
  const bouton = document.getElementById("btnTelecharger");

  bouton.addEventListener("click", function () {
    const element = document.getElementById("cv");

    const options = {
      margin: 0,
      filename: 'CV_Niakalé.pdf',
      image: { type: 'png, jpg', quality: 1 },
      html2canvas: { 
        scale: 2,
        scrollY:0 

      },
      jsPDF: { unit: 'px', format: [390,950], orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  });
});


