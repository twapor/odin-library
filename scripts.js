const dialogBox = document.querySelector('#add-book-modal');
dialogBox.addEventListener('click', (event) => {
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

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const isReadInput = document.querySelector('#isRead');

const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    
});

let isValidInput = false
const myLibrary = [];

function checkInputIsFilled(){
    if(titleInput.value.length < 1){
        alert(`Please add the title`);
    }
    else if (authorInput.value.length < 1){
        alert(`Please add the author`);
    }
    else if (pagesInput.value.length < 1){
        alert(`Please add the number of pages`);
    }
    else {
        dialogBox.close();
        isValidInput = true;
    }
}

function clearInput() {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    isReadInput.checked = false;
}

function createNewBook() {
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, isReadInput.checked);
    myLibrary.push(newBook);
}

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
    checkInputIsFilled();
    if(isValidInput){
        createNewBook();
        clearInput();
    }
}