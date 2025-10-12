/* class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    });
}

// Ask for a user name until github returns a valid user
function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();
*/ 
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return await response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let user;
  
  while (true) {
    let name = prompt("Enter a name?", "May");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // إذا نجح الطلب، نخرج من الحلقة
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
      } else {
        throw err; // أي خطأ آخر نرميه
      }
    }
  }

  alert(`Full name: ${user.name}.`);
  return user;
}

demoGithubUser();

