export { };

console.log('delay');

function delay(ms: number) {
  // return new Promise<void>((res) => {
  //   setTimeout(() => res(), ms);
  // });
  // Вариант автора. Поскольку промис ничего не возвращает
  // resolve без аргументов
  return new Promise<void>(res => setTimeout(res, ms));
}

delay(3000)
  .then(() => console.log('Выполнилось через 3 секунды'));