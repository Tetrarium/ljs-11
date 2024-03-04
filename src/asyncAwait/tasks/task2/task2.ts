export { };

class HttpError extends Error {
  response: Response;
  constructor(response: Response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

// function loadJson(url: string) {
//   return fetch(url)
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new HttpError(response);
//       }
//     });
// }

async function loadJson(url: string) {
  const response = await fetch(url);

  if (response.status === 200) {
    return await response.json();
  }

  throw new HttpError(response);
}

// function demoGithubUser(): Promise<any> {
//   const name = prompt('Введите логин?', 'tetrarium');

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then(user => {
//       console.log(`Полное имя: ${user.login}`);
//       return user;
//     })
//     .catch(err => {
//       if (err instanceof HttpError && err.response.status === 404) {
//         console.log('Такого пользователя не существует. Пожалуйста, повторите ввод.');
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }

async function demoGithubUser(): Promise<any> {
  while (true) {
    try {
      const name = prompt('Введите логин?', 'tetrarium');
      const response = await loadJson(`https://api.github.com/users/${name}`);
      console.log(response);
      return response;
    } catch (err) {
      if (err instanceof HttpError && err.response.status === 404) {
        console.log('Такого пользователя не существует. Пожалуйста, повторите ввод.');
      } else {
        throw err;
      }
    }
  }
}

demoGithubUser();