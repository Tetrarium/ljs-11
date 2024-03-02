console.log('I am collbacks module');

/**
 * Первый пример из 11.1
 * https://learn.javascript.ru/callbacks
 */

function loadScript(src: string) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
};

loadScript('./callbacks/examples/example1.ts'); // выполняется только после выполнения синхронных задач
console.log('log after call loadScript');

/**
 * loadScript2 с вызовом коллбэка
 */

function loadScript2(src: string, callback: (...args: any) => any) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript2('./callbacks/examples/example2.ts', () => {
  // @ts-ignore
  newFunction();
});

loadScript2('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (script) => {
  console.log(`Здорово, срипт ${script.src} загрузился!!!`);
  // @ts-ignore
  console.log(_);
});
