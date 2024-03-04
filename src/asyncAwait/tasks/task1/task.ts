export { };

async function loadJson(url: string) {
  const response = await fetch(url);

  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error(response.status.toString());
  }
}

loadJson('blabla.json')
  .catch(console.log);
