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
    refreshLibrary();
    createLibrary();
    
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

const bookCardContainer = document.querySelector('#book-container');

function createBookCard(book) {
    const bookCard = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readBtn = document.createElement('button');
    const clearBtn = document.createElement('button');

    bookCard.classList.add('book-card');
    clearBtn.classList.add('clear-btn');
    
    title.textContent = `"${book.title}"`;
    author.textContent = `by ${book.author}`;
    pages.textContent = `${book.pages} pages`
    clearBtn.textContent = 'Remove';

    if(book.isRead) {
        readBtn.classList.add('read-btn');
        readBtn.textContent = 'Read';
    }

    else {
        readBtn.classList.add('not-read-btn');
        readBtn.textContent = 'Not Read';
    }

    bookCardContainer.appendChild(bookCard);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(clearBtn);
}

function createLibrary() {
    
    myLibrary.forEach((book) => {
        createBookCard(book);
    })
}

function refreshLibrary(){
    const allBookCards = document.querySelectorAll('.book-card');
    allBookCards.forEach((element) => {
        element.remove();
    });
}