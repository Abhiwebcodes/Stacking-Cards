// Selekhne ke liye, ".card" class wale sabhi HTML elements ko chun lo
// Aur ".stack-area" class wale ek HTML element ko chun lo
let cards = document.querySelectorAll(".card");
let stackArea = document.querySelector(".stack-area");

// rotateCards() naam ka ek function banaya gaya hai
function rotateCards() {
  let angle = 0;
  // Har "card" element ke liye, neeche di gayi conditions ko check karo
  cards.forEach((card) => {
    // Agar "card" element "active" class ke sath hai, to use specific tarike se transform karo
    if (card.classList.contains("active")) {
      card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
    } else {
      // Agar "card" element "active" class ke sath nahi hai, to use alag tarike se transform karo
      card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      angle = angle - 10; // Angle ko 10 degree kam karo har baar
    }
  });
}

// rotateCards() function ko pehli baar call karo
rotateCards();

// Jab user scroll karta hai, tab neeche di gayi event listener trigger hota hai
window.addEventListener("scroll", () => {
  // "stackArea" element ka position relative to viewport ke hisab se proportion nikalo
  let proportion = stackArea.getBoundingClientRect().top / window.innerHeight;
  // Agar proportion 0 se kam ya barabar hai
  if (proportion <= 0) {
    let n = cards.length;
    // "index" ko calculate karo based on proportion aur card count
    let index = Math.ceil((proportion * n) / 2);
    index = Math.abs(index) - 1;
    // Har "card" element ke liye loop chalao
    for (let i = 0; i < n; i++) {
      // Agar "i" index "index" se chhota ya barabar hai, to "active" class add karo
      // Varna, "active" class remove karo
      if (i <= index) {
        cards[i].classList.add("active");
      } else {
        cards[i].classList.remove("active");
      }
    }
    // rotateCards() function ko fir se call karo taki "card" elements update ho
    rotateCards();
  }
});
