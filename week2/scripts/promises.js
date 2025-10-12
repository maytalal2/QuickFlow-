//load scrpy using callback
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Error loading ${src}`));
  document.head.append(script);
}
//load script using promises
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Error loading ${src}`));

    document.head.append(script);
  });
}
// These two syntax with same output
new Promise((resolve, reject) => {
  throw new Error("Whoops!"); // by throwing directly 
}).catch(alert); // Error: Whoops!

new Promise((resolve, reject) => {
  reject(new Error("Error by reject!")); // we use reject
}).catch(alert);

