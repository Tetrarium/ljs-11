# [Перепишите, используя sync/await](https://learn.javascript.ru/task/rewrite-async)

Перепишите один из примеров раздела [Цепочка промисов](https://learn.javascript.ru/promise-chaining), используя async/await вместо .then/catch:

```javascript
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
```
