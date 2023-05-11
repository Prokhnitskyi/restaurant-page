function renderPage (componentsArray, callback) {
  const container = document.querySelector('.content');
  container.innerHTML = componentsArray.join('');
  callback();
}

export { renderPage }