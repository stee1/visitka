/**
 * Created by dmitry on 06.08.2016.
 */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btnTopNav = document.getElementsByClassName("openModal")[0];
var btnBottomNav = document.getElementsByClassName("openModal")[1];

// When the user clicks the button, open the modal
btnBottomNav.onclick = btnTopNav.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
