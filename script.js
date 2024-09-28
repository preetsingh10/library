const bodyDivSelector = document.querySelector('.main')

const myLibrary = [
  { name: "Merchant of Venice", author: "shakespeare", pages: 1089 },
  { name: "Hamlet", author: "shakerpeare", pages: 69 },
  { name: "Merchant of Venice", author: "shakespeare", pages: 1089 },
  { name: "Hamlet", author: "shakerpeare", pages: 69 },
  { name: "Merchant of Venice", author: "shakespeare", pages: 1089 },
  { name: "Hamlet", author: "shakerpeare", pages: 69 },
];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {}



myLibrary.forEach((book) => {
  const div = document.createElement("div");
  div.classList = "book-container";

  const nameOfTheBook = document.createElement("h2");
  nameOfTheBook.textContent = book.name;

  const authorOfTheBook = document.createElement("h3");
  authorOfTheBook.textContent = `Author ~ ${book.author}`;

  const pagesOfTheBook = document.createElement("h4");
  pagesOfTheBook.textContent = `Pages ~ ${book.pages}`;

  bodyDivSelector.appendChild(div);
  div.appendChild(nameOfTheBook);
  div.appendChild(authorOfTheBook);
  div.appendChild(pagesOfTheBook);
});
