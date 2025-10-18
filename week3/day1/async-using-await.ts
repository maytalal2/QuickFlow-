async function asyncUsingAwait(url :string) {
  try {
    console.log("async using await");
    await new Promise((result) => setTimeout(result, 1000));
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error happened ");
    const data = await response.text();
    console.log("Completed");
    console.log(data);
  } catch (error) {
    console.error("Error", error);
  }
}

// Try with no Error
asyncUsingAwait("https://jsonplaceholder.typicode.com/posts/1");
