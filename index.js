function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
return fetch('https://anapioficeandfire.com/api/books')
  .then(response => {
    return response.json();
  })
  .then(books => {
    renderBooks(books);
  })
  .catch(error => {
    console.error(error);
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  
  fetch('https://anapioficeandfire.com/api/books', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'The Lord of the Rings'

    })
   
  })
    
    .then(response => {
      return response.json();
    })
    .then(books => {
      renderBooks(books);
    })
});
