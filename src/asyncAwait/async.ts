export { };

console.log('Async / Await');

/**
 * https://learn.javascript.ru/async-await
 */

// async function f() {
//   return 1;
// }

// console.log(f());
// f().then(console.log);

// async function f1() {
//   return Promise.resolve(1);
// }

// console.log(f1());

// f1().then(console.log);

// async function f() {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => resolve('Готово!!!'), 1000);
//   });

//   const result = await promise;

//   console.log(result);
// }

// f();

async function showAvatar(name: string) {
  const response = await fetch(`https://api.github.com/users/${name}`);
  const ghUser = await response.json();

  const img = document.createElement('img');
  img.src = ghUser.avatar_url;
  document.body.append(img);

  await new Promise((resolve) => setTimeout(resolve, 3000));
  img.remove();

  return ghUser;
}

showAvatar('tetrarium');
