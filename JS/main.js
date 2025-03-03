const popBtn = document.querySelector(".addbtn")
const popUp = document.querySelector("form")
const cancel = document.querySelector(".cancel")
const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput = document.querySelector("#status");
const addButton = document.querySelector("#addBtn");
const container = document.querySelector(".container");

popBtn.addEventListener("click", () => {
    popUp.classList.add('active')
    popUp.classList.add('blur');
    container.style.display = "none";
});

cancel.addEventListener("click", () => {
    popUp.classList.remove('active')
    container.style.display = "grid";
})

const myLibrary = [];

// constructor for books

function myBooks (title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

// function to create book

function createBook(title, author, pages, status){
    const newBook = new myBooks(title, author, pages, status);
    myLibrary.push(newBook);
}

createBook("Pride and Prejudice", "Jane Austen", 279, true);
createBook("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
createBook("The Hobbit", "J.R.R. Tolkien", 310, true);
createBook("1984", "George Orwell", 328, false);
createBook("To Kill a Mockingbird", "Harper Lee", 281, true);


// display book function

const displayBook = () => {
    container.innerHTML = '';

    for(let i = 0; i < myLibrary.length; i++){
        const card = document.createElement('div');
        const title = document.createElement('h2')
        const author = document.createElement('p')
        const pages = document.createElement("p");
        const status = document.createElement("p");
        const delCont = document.createElement('div')
        const delbtn = document.createElement('button')

        card.classList.add('book-card')
        delCont.classList.add('del-cont')
        delbtn.classList.add('del-btn')


        title.textContent = `Title: ${myLibrary[i].title}`
        author.textContent = `Author: ${myLibrary[i].author}`;
        pages.textContent = `Pages: ${myLibrary[i].pages}`;
        status.textContent = `Status: ${myLibrary[i].status ? 'Read' : 'Not Read'}`;
        delbtn.textContent = "Delete";

        delbtn.addEventListener('click', () => {
            myLibrary.splice(i,1);
            displayBook();
        });


        delCont.appendChild(delbtn)

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(delCont);

        container.appendChild(card)
    }
}

displayBook()

// Add Book through the Pop-up

addButton.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const pages = pagesInput.value.trim();
    const status = statusInput.value;

    const booleonStatus = status === 'Read';


    createBook(title, author, pages, booleonStatus);
    displayBook();

    popUp.classList.remove("active");
    container.style.display = "grid";
});


window.addEventListener("scroll", function () {
  const stickyElement = document.querySelector(".moving-not");
  const rect = stickyElement.getBoundingClientRect(); 

  if (rect.top <= 0) {
    stickyElement.style.backgroundColor = "black"; // Change color when sticky
  } else {
    stickyElement.style.backgroundColor = "#99660025"; // Default color
  }
});
