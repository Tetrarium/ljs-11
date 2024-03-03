export { };

console.log('Chaining Promises');

/**
 * https://learn.javascript.ru/promise-chaining
 */

// new Promise<number>((resolve) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   });

// Возвращаем промисы
// new Promise<number>((resolve) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     console.log(result);

//     return new Promise((resolve) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//   });


// const recursivePromise = (num: number) => {
//   if (num > 100000000000) {
//     console.log('end');
//     return null;
//   }
//   console.log(num);

//   return new Promise<number>((resolve) => {
//     setTimeout(() => resolve(num * 2), 1000);
//   })
//     .then((result) => {
//       recursivePromise(result);
//     });
// };

// recursivePromise(1);

// fetch('https://api.github.com/users/tetrarium')
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(user => new Promise((resolve) => {
//     console.log(user);
//     const img = document.createElement('img');
//     img.src = user.avatar_url;
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(user);
//     }, 3000);
//   }))
//   .then(user => console.log('Закончили показ ', (user as { login: string; }).login));

// function loadJson(url: string) {
//   return fetch(url)
//     .then(response => response.json());
// }

function loadGithubUser(name: string) {
  return fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json());
}

interface GithubUser {
  avatar_url: string;
}

function showAvatar(githubUser: GithubUser) {
  return new Promise((resolve) => {
    const img = document.createElement('img');
    img.src = githubUser.avatar_url;
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 5000);
  });
}

function showUser(user: string) {
  return loadGithubUser(user)
    .then(showAvatar)
    .then(user => console.log(user));
}

showUser('tetrarium')
  .then(() => {
    showUser('turovae');
  });