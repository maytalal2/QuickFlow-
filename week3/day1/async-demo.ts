function asyncUsingPromise(url :string): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log("Fetch request");

    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            reject();
          }
          return response.text();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, 1000);
  });
}

asyncUsingPromise("https://jsonplaceholder.typicode.com/posts/1")
  .then((result) => {
    console.log("completed");
    console.log(result);
  })
  .catch((error) => {
    console.error("Error");
    alert(error);
  });
