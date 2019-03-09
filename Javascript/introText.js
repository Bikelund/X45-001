/*______________________________________________
|                                               |
|                                               |
|     Script that plays out the intro text      |
|                                               |
|______________________________________________*/

let speed = 30; /* The speed/duration of the effect in milliseconds */

/* The text that will be typed out */
let txt = "Space, the final frontier. These are the voyages of the CM-88B Mortzestus. Its continuing mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no one has gone before.";
let txt2 = "Welcome to X45-001 Czar\'Krang Colossus Transit.";

let firstText = document.getElementById("typingText");
let secondText = document.getElementById("typingText2");

typingText(firstText, txt, secondText, txt2); // Function call for the typing text
setTimeout(remove, 13500); // Function call for removing the first blinking caret after 13,5 sec

/* Function for sleep */
/* That makes the pause between animations */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* Function that types out the text and creates delays between animations */
async function typingText(x, y, z, q) {
  
  /* First text */
  await sleep(6000); // First text types after 6 sec
  x.style.opacity = "1"; // This makes the text and blinking caret visable
  for (let i = 0; i < y.length; i++) { // Reveals one letter at a time
    (function (i) {
      setTimeout(function() {
        x.innerHTML += y.charAt(i);
      }, speed*i);
    })(i);
  };

  /* Second text */
  await sleep(8500); //Second caret is visable 8,5 sec after the first text starts to type
  z.style.opacity = "1";
  await sleep(1000); //One sec after that the last text plays out
  for (let i2 = 0; i2 < q.length; i2++) { // Second text types out one letter at a time
    (function (i) {
      setTimeout(function() {
        z.innerHTML += q.charAt(i2);
      }, speed*i2);
    })(i2);
  };
}

/* Function that removes the blinking caret */
function remove(x) {
  firstText.style.borderRight = "none";
}