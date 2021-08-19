// promise that would be resolved when gapi would be loaded
/*var gapiPromise = (function(){
  var deferred = $.deferred();
  window.onLoadCallback = function(){
    deferred.resolve(gapi);
  };
  return deferred.promise()
}());

var authInited = gapiPromise.then(function(){
  gapi.auth2.init({
      client_id: '264632097992-q8jjmd4dpb8dl740jgt6r3pgcigdceqc.apps.googleusercontent.com'
    });
})


$('#btn').click(function(){
  gapiPromise.then(function(){
    // will be executed after gapi is loaded
  });

  authInited.then(function(){
    // will be executed after gapi is loaded, and gapi.auth2.init was called
  });
});
*/
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




