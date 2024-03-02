export { };

const circleWrapper = document.querySelector('.circle-wrapper');
console.log(circleWrapper);

const button = document.createElement('button');
button.innerText = 'showCircle';
button.classList.add('circle-button');
circleWrapper?.appendChild(button);

function createInputEl(name: string, defValue?: number): HTMLInputElement {
  const label = document.createElement('label');
  label.classList.add('circle-param');
  label.textContent = `${name}: `;

  const input = document.createElement('input');
  input.name = name;
  input.placeholder = name;
  input.type = 'number';
  input.value = defValue?.toString() || '';
  label.appendChild(input);

  circleWrapper?.appendChild(label);

  return input;
}

const cxInp = createInputEl('cx', 150);
const cyInp = createInputEl('cy', 150);
const radiusInp = createInputEl('radius', 100);

function showCircle(cx: number, cy: number, radius: number) {
  let circle = circleWrapper?.querySelector('.circle') as HTMLElement;

  if (radius <= 0) {
    return;
  }

  if (circle) {
    console.log(circle);
    circleWrapper?.removeChild(circle)!;
  } else {
    circle = document.createElement('div');
    circle.classList.add('circle');
  }

  circle.style.left = cx + 'px';
  circle.style.top = cy + 'px';
  circle.innerHTML = '';

  circle.style.width = 0 + 'px';
  circle.style.height = 0 + 'px';

  circleWrapper?.appendChild(circle);

  // Мое решение
  // const DURATION = 2;
  // circle.style.transitionDuration = DURATION + 's';
  // setTimeout(() => {
  //   circle.style.width = radius * 2 + 'px';
  //   circle.style.height = radius * 2 + 'px';
  // }, 0);

  // return new Promise<HTMLElement>((res) => {
  //   setTimeout(() => {
  //     res(circle);
  //   }, DURATION * 1000);
  // });

  // Решение автора
  return new Promise<HTMLElement>(res => {
    setTimeout(() => {
      circle.style.width
        = circle.style.height
        = radius * 2 + 'px';

      circle.addEventListener('transitionend', function handler() {
        circle.removeEventListener('transitionend', handler);
        res(circle);
      });
    });
  });
}

button.addEventListener('click', (evt) => {
  evt.preventDefault();
  console.log(evt.target);

  button.disabled = true;

  showCircle(
    +cxInp.value,
    +cyInp.value,
    +radiusInp.value,
  )
    ?.then(div => {
      div.classList.add('message-ball');
      div.innerHTML = ('Hello, World!');
    })
    .finally(() => {
      button.disabled = false;
    });
});
