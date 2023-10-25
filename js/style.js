
// 1 **************DASH BOARD OPENING / CLOSING********** 

let toggleVal = 0;
function toggle() {

	if(toggleVal == 0){
		document.getElementById("mySidebar").style.width = "350px";
		document.getElementById("main").style.marginLeft = "350px";
		toggleVal=1;
	}
	else{
		document.getElementById("mySidebar").style.width = "100px";
		document.getElementById("main").style.marginLeft= "100px";
		toggleVal=0;
	}
}

// *********************END DASHBOARD****************** 

// 2 ****************** DROP DOWN DASHBOARD****************** 

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function mydbFunction() {
  document.getElementById("myDropdown-db").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop-btn-db')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-db");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// ***********************END DASHBOARD********************* 

// 3 ************PROFILE TEXT DROPDOWN **************

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// ************ END DROPDOWN ***************

