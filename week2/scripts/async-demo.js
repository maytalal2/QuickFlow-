function asyncUsingPromise(url) {
  
  return new Promise((resolve, reject) => {
    console.log("Festch request");
    
  
    setTimeout(() => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            reject();
          }
          return response.text(); 
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    }, 1000);
  });
}

asyncUsingPromise("https://jsoning.com/examples/")
  .then(result => {
    console.log("completed");
    console.log(result);
  })
  .catch(error => {
    console.error("Error");
    alert(error);
  });
