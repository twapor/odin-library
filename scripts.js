const dialogBox = document.querySelector('#add-book-modal');
dialogBox.addEventListener('click', (event) => {
    console.log(event.target);
    if(event.target == dialogBox) {
        dialogBox.close();
    }
});

const addNewBook = document.querySelector("#add-new-book");

addNewBook.addEventListener('click', () => {
    dialogBox.showModal();
});

const closeModal = document.querySelector('#close-modal');
closeModal.addEventListener('click', () => {
    dialogBox.close();
});

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function () {
    if(isRead) {
        return `${title} by ${author}, ${pages} pages, read!`
    }
    else {
        return `${title} by ${author}, ${pages} pages, not read yet!` 
    }
}

function addBookToLibrary() {

}