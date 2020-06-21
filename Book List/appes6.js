class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href="#" class="delete">X</a></td>`;
    document.querySelector("#book-list").appendChild(row);
  }
  showAlert(msg, className) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(msg));
    div.className = className;

    const form = document.querySelector("#book-form"),
      container = document.querySelector(".container");
    container.insertBefore(div, form);
    setTimeout(function () {
      document.querySelector(`.${className}`).remove();
    }, 3000);
  }
  clearField() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
  clearBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
      this.showAlert("Book Deleted!", "success");
    }
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(function (book) {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static deleteBook(isbn) {
    let books = Store.getBooks();
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(books));
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", Store.displayBooks);

document.querySelector("#book-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

  const book = new Book(title, author, isbn);
  const ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    ui.addBookToList(book);
    Store.addBook(book);
    ui.showAlert("Book Added!", "success");
    ui.clearField();
  }
});

document.querySelector("#book-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.clearBook(e.target);
  Store.deleteBook(e.target.parentElement.previousElementSibling.textContent);
});
