//There is catch inside the promise 

/* new Promise(() => { throw new Error("Whoops!"); })
  .catch(error => {
    alert("The error is handled, continue normally");
  })
  .then(() => alert("Next successful handler runs"));
 */ 
//Rethrawing Errors
/* new Promise(() => { throw new Error("Whoops!"); })
  .catch(error => {
    alert("Can't handle such error");
    throw error; // **from here 
  })
  .then(() => alert("This will not run"))
  .catch(error => alert(`The unknown error has occurred: ${error}`));
*/ 

  //Unhandeled Rejections ** No catch will handel it so it will be rejected only and Broswer will send Error : UnhandledPromiseRejection. 
  new Promise(() => {
  noSuchFunction(); // Error
});
window.addEventListener('unhandledrejection', function(event) {
  alert(event.promise); // الـ Promise اللي سبب الخطأ
  alert(event.reason);  // نص الخطأ نفسه
});
//Catch will catch all the errors rejected or throwed 
// Then can handle error if we add promise.then(successHandler, errorHandler);



