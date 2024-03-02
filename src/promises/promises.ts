export default {};

console.log('Promises file');

/**
 * https://learn.javascript.ru/promise-basics
 */

// const promise = new Promise(function executor(resolve, reject) {
// executor - функция исполнитель - может быть анонимной
// resolve(value) - при успешном
// reject(error) - при ошибке, error - объект ошибки

// });

/**
 *  У promise есть внутренние свойства:
 *    state (состояние)
 *      "pending" - ожидание
 *      "fulfilled" - выолнился успешно
 *      "rejected" - выполнился с ошибкой
 *    result (результат)
 *      undefined ->       value | error
 *        при состояниях:
 *      "pending" -> "fulfilled" | "rejected"
 */

let promise2 = new Promise((res) => {
  setTimeout(() => res('done'), 1000);
});
console.log(promise2);

let promise3 = new Promise((_, rej) => {
  console.log('inside promise 3'); // вызывается сразу при создании промиса
  setTimeout(() => rej(new Error('Alarm!!!')), 2000);
});
console.log(promise3);

// состояние promise изменяется только один раз.
// Все последующие вызовы resolve / reject будут проигнорированы

/**
 * .then
 * 
 * promise.then(
 *  function(result) { обрабатывается успешное выполнение },
 *  function(error) { обраьатывается ошибка }
 * )
 */

promise2.then(
  result => console.log('Успешное выполнение промиса 2. Результат:', result)
);

promise3.then(
  null,
  err => console.log('Ошибка выполнения промиса 3. Результат:', err.message)
);

/**
 * .catch(f)
 * обработка ошибки
 * сокращенный вариант .then(null, f)
 */

/**
 * .finally(f)
 * f  отрабатывает в любом случае.
 * аналогично .then(f, f)
 * очистка, остановка индикатора загрузки, общие завершающие процедуры ...
 * обработчик в finally не имеет аргументов,
 * а результат promise обрабатывается в следующем обработчике
 *
 */

new Promise((res) => {
  setTimeout(() => res('value'), 3000);
})
  .finally(() => console.log('finally до then'))
  .then(res => console.log('Результат безымянного промиса:', res))
  .finally(() => console.log('finally после then'));

/**
 * finally пропускает результат выполнения к последующим обработчикам
 * любой возвращаемый этим обработчиком результат игнорируется
 * если в finally возникает ошибка, она передается следующему обработчику
 */

function loadScript(src: string) {
  return new Promise<HTMLScriptElement>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js')
  .then((script) => {
    console.log(script.src, 'загружен!');
  })
  .catch((err) => {
    console.log('Ошибка:', err.message);
  });