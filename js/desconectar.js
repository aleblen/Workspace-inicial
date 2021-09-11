
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
  console.log("User signed out.");
  });
  }
  function onLoad() {
    gapi.load(`auth2`, function(){
        gapi.auth2.init();
        console.log("Iniciado");
    });
}

function desconectar() {
    localStorage.clear();
    sessionStorage.clear();
    signOut();
    location.href="index.html";
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
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



