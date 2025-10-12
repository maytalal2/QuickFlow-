function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script); //Called After script is loaded 
  document.head.append(script);

}
/* 
loadScript('/script1.js', function() {
  loadScript('/script2.js', function() {
    loadScript('/script3.js', function() {
      
    });
  });
});
*/

/* Callback Hell or "Pyramid of Doom
loadScript('1.js', function(error, script) {
  if (error) handleError(error);
  else {
    loadScript('2.js', function(error, script) {
      if (error) handleError(error);
      else {
        loadScript('3.js', function(error, script) {
          if (error) handleError(error);
          else {
            // ...
          }
        });
      }
    });
  }
});



*/
loadScript('main.js', function(error, script) {
  if (error) {
    console.error(error);
  } else {
    console.log('Script loaded:', script.src);
  }
});

// Ex 
let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(result => alert(result)); //After one minute : done 
promise.then(console.log('Resolved state '))
// For Catching Errors 
promise.catch(err => alert("Error: " + err));

//Cleanup After finishing  >> WE use finally and then after it to log result 
//finally is just for finish up 

new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 1000);
})
  .finally(() => console.log("Promise ready"))
  .then(result => console.log(result));





