
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  function onLoad() {
    gapi.load(`auth2`, function(){
        gapi.auth2.init();
    });
}
function desconectar() {
    localStorage.clear;
    sessionStorage.clear;
    signOut();
    location.href="login.html";
}



