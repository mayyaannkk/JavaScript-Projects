function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = function (book) {
  let bookList = document.getElementById("book-list");
  let row = document.createElement("tr");
  row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href="#" class="delete">X</td>`;

  bookList.appendChild(row);
};

UI.prototype.clearUI = function () {
  let title = (document.getElementById("title").value = "");
  let author = (document.getElementById("author").value = "");
  let isbn = (document.getElementById("isbn").value = "");
};

UI.prototype.showAlert = function (msg, className) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(msg));
  div.className = className;

  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");

  container.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector(`.${className}`).remove();
  }, 3000);
};

UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
    this.showAlert("Book Deleted!", "success");
  }
};

document.getElementById("book-form").addEventListener("submit", function (e) {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;
  const book = new Book(title, author, isbn);
  const ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    ui.addBookToList(book);
    ui.clearUI();
    ui.showAlert("Book Added", "success");
  }
  e.preventDefault();
});

document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);
});
