export { };

console.log('Promise API');

/**
 * https://learn.javascript.ru/promise-api
 */

/**
 * Promise.all(promises)
 * - ожидает выполнения всех промисов
 * и возвращает массив с результатами.
 * Если любой из указанных промисов вернет ошибку,
 * то результатом работы Promise.all будет эта ошибка,
 * результаты остальных промисов будут игнорироваться
 */

// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//   new Promise(resolve => setTimeout(() => resolve(3), 1000)),
// ])
//   .then(console.log);


// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig'
// ];

// let requests = urls.map(url => fetch(url));

// console.log(requests);

// Promise.all(requests)
//   .then(responses => responses.forEach(
//     response => console.log(`${response.url}: ${response.status}`)
//   ));


// let names = ['tetrarium', 'turovae', 'remy'];
// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// Promise.all(requests)
//   .then(responses => {
//     for (let response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }

//     return responses;
//   })
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   .then(users => users.forEach(user => console.log(user.login)));

/**
 * Promise.allSettled(promises)
 * - ждет, пока все промисы завершатся
 * и возвращает их результаты в виде массива с объектами.
 * У каждого объекта свои свойства
 * { status: "fulfilled", value: Результат } - для успешного
 * { status: "rejected", reson: Ошибка } - для с ошибкой
 */

// const urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/tetrarium',
//   'https://asdfg.df'
// ];

// Promise.allSettled(urls.map(url => fetch(url)))
//   .then(results => {
//     console.log(results);
//     results.forEach((result, num) => {
//       if (result.status === 'fulfilled') {
//         console.log(`${urls[num]}: ${result.value.status}`);
//       }
//       if (result.status === 'rejected') {
//         console.log(`${urls[num]}: ${result.reason}`);
//       }
//     });
//   });

/**
 * Promise.race(promises)
 * - ожидает первый выполненный промис,
 * который становится его результатом,
 * остальные игнорируются
 */

// возвращает результат работы первого выполненного промиса
// Promise.race([
//   new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
//   new Promise((_, reject) => setTimeout(() => reject(new Error('Alarm!!!')), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
// ])
// .then(console.log);


/**
 * Promise.any(promises)
 * - ожидает первый успешно выполненный промис,
 * который становится его результатом, остальные игнорируются.
 * Если все переданные промисы отклонены,
 * результатом становится ошибка AggregateError
 */

// возвращает результат работы первого УСПЕШНО выполненного промиса
// Promise.any([
//   new Promise((_, reject) => setTimeout(() => reject(new Error('Alarm!!!')), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
// ]).then(console.log);

Promise.any([
  new Promise((_, reject) => setTimeout(() => reject(new Error('Alarm!!!')), 1000)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Any Error!!!')), 2000)),
]).catch(error => {
  console.log(error.constructor.name);
  console.log(error.errors[0]);
  console.log(error.errors[1]);
  console.log(error);
  console.log(error.errors);
});

/**
 * Promise.resolve(value)
 * - возвращает успешно выполненный промис с результатом value
 */

/**
 * Promise.reject(error)
 * - возвращает промис с ошибкой error
 */
