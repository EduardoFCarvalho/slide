export default function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

// A função debounce é utilizada para quando temos uma atividade que realiza um repetição de ações sem necessidade fazendo com que o sistema sobrecarregue desnecessáriamente, ele vai atuar fazendo com que o item aguarde o final da ação para ocorrer, assim acontecendo somente 1 vez, como no resize por exemplo.
