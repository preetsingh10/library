// Select the main body element
const bodyDivSelector = document.querySelector(".main");

// dialog elements
const newBookButton = document.querySelector(".new-book-button"); // Button to open new book dialog
const newBookDialog = document.querySelector(".new-book-dialog"); // Dialog for adding a new book
const cancelDialog = document.querySelector(".cancel-book-form-button"); // Button to cancel the dialog
const addBookDialog = document.querySelector(".add-book-form-button"); // Button to add the book

// Event listener to show the new book dialog when the button is clicked
newBookButton.addEventListener("click", () => {
  newBookDialog.showModal();
});

// form elements
const newBookForm = document.querySelector(".new-book-form"); // Form for new book input

// library array
const book1 = new Book("Mechant Of Venice", "Shakespeare", 1090); // Sample book 1
const book2 = new Book("Hamlet", "Shakespeare", 1978); // Sample book 2

// Array to store all books
const myLibrary = [
  book1,
  book2,
];

// Book constructor function
function Book(name, author, pages) {
  this.name = name; // Book name
  this.author = author; // Book author
  this.pages = pages; // Number of pages
  this.readStatus = false; // Initial read status set to false
}

// Function to add a new book to the library
function addBookToLibrary(newBook) {
  myLibrary.push(newBook); // Push the new book into the library array
}

// Function to change the read status (not fully implemented)
function changeReadStatus(){
  Book.prototype.readStatus =  true // Sets readStatus for all books (not recommended)
  console.log(myLibrary) // Log the current state of the library
}

// Function to render library items on the page
function showLibrary() {
  bodyDivSelector.innerHTML = ""; // Clear previous book entries
  myLibrary.forEach((book, index) => { // Iterate over each book in the library
    const div = document.createElement("div"); // Create a container for the book
    div.classList = "book-container"; // Add class for styling

    const nameOfTheBook = document.createElement("h2"); // Create element for book name
    nameOfTheBook.textContent = book.name; // Set book name text

    const authorOfTheBook = document.createElement("h3"); // Create element for book author
    authorOfTheBook.textContent = `Author ~ ${book.author}`; // Set author text

    const pagesOfTheBook = document.createElement("h4"); // Create element for book pages
    pagesOfTheBook.textContent = `Pages ~ ${book.pages}`; // Set pages text

    const statusOfTheBook = document.createElement('p'); // Create element for read status
    statusOfTheBook.textContent = `${book.readStatus=== true ? 'Already Read':'Not Read Yet'}`; // Set status text

    const removeBook = document.createElement("button"); // Create button to remove the book
    removeBook.classList = "remove-book-button standard-button"; // Add class for styling
    removeBook.textContent = "Remove Book"; // Set button text

    // Event listener for removing a book from the library
    removeBook.addEventListener("click", (e) => {
      myLibrary.splice(index, 1); // Remove the book from the library array
      showLibrary(); // Refresh the displayed library
    });

    const readButton = document.createElement('button'); // Create button for changing read status
    readButton.classList = 'read-button standard-button'; // Add class for styling

    // Check if the book has been read and set button properties accordingly
    if(book.readStatus === false){
      readButton.textContent = 'Read'; // Set button text for unread books
      readButton.addEventListener('click',()=>{
        book.readStatus = true; // Mark the book as read
        showLibrary(); // Refresh the displayed library
      });
    } else {
      readButton.textContent = 'Not Read'; // Set button text for read books
      readButton.style.backgroundColor = 'blue'; // Set button background color
      readButton.style.color = 'white'; // Set button text color
      readButton.addEventListener('click',()=>{
        book.readStatus = false; // Mark the book as not read
        showLibrary(); // Refresh the displayed library
      });
    }

    // Append all elements to the book container and then to the body
    bodyDivSelector.appendChild(div);
    div.appendChild(nameOfTheBook);
    div.appendChild(authorOfTheBook);
    div.appendChild(pagesOfTheBook);
    div.appendChild(statusOfTheBook);
    div.appendChild(readButton);
    div.appendChild(removeBook);
  });
}

// Event listener for the new book form submission
newBookForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  const formData = new FormData(e.target); // Create FormData object from the form
  const name = formData.get("nameOfTheBook"); // Get book name from the form
  const author = formData.get("authorOfTheBook"); // Get author from the form
  const pages = formData.get("pagesOfTheBook"); // Get pages from the form
  const readStatus = formData.get('read-status'); // Get read status from the form

  // Create a new book object
  const newBook = new Book(name, author, pages);
  // Set the read status based on form input
  readStatus === null ? newBook.readStatus = false : newBook.readStatus = true;

  // Add the new book to the library
  addBookToLibrary(newBook);
  console.log("the book is added"); // Log book addition
  console.log('read status', readStatus); // Log read status
  showLibrary(); // Refresh the displayed library
  newBookForm.reset(); // Reset the form
  newBookDialog.close(); // Close the dialog
});

// Event listener for the cancel button to close the dialog
cancelDialog.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default button action
  newBookDialog.close(); // Close the dialog
});

// Initial call to display the library
showLibrary();