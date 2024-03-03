export { };

/**
 * https://learn.javascript.ru/promise-error-handling
 */

// fetch('https://asdfgh.fdsa')
//   .then(response => response.json())
//   .catch(err => console.log(err));

// new Promise(() => {
//   throw new Error('Error!!!!');
// }).catch(console.log);

// new Promise((_, reject) => {
//   reject(new Error('Alert!!! Error!!!!!'));
// }).catch(console.log);

// new Promise(() => {
//   throw new Error('Error!');
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .then(() => {
//     console.log('next then');
//   });

window.addEventListener('unhandledrejection', (event) => {
  console.log(event.promise);
  console.log(event.reason);
});

new Promise(() => {
  throw new Error('Error!!!');
});
