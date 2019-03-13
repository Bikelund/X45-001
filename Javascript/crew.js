/*____________________________________
|                                     |
|                                     |
|     Hide and show crew members      |
|                                     |
|____________________________________*/

hideCrew();
document.getElementById("crew1").style.display = "flex"; // Displays Ellen on page load
document.getElementById("crewEllen").classList.add("active-name"); // Activate Ellen button

/* Function that clear all crew members and activated button */
function hideCrew() {
  let crewStyle = document.getElementsByClassName("crew-name");
  for (let i = 0; i < crewStyle.length; i++) {
    crewStyle[i].classList.remove("active-name"); // Removes active color and returns to default
  }
  let crew = document.getElementsByClassName("crew-person");
  for (let i = 0; i < crew.length; i++) {
    crew[i].style.display = "none"; // Hides the crew member
  }
}

/* Function that shows the correct crew person on click */
document.getElementById("crew-list").onclick = function(event) {
  if (event.target.tagName === "A") {
    hideCrew();
    let link = event.target.getAttribute("href");
    link = link.replace("#","");
    document.getElementById(link).style.display = "flex"; // Shows the clicked crew member
    event.target.classList.add("active-name"); // Add class to active nav button
  }
}