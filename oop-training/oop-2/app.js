window.addEventListener("load", init);

function init() {
    let bookFormDom = document.getElementById("submitButton");
    bookFormDom.addEventListener('click', onSubmitHandler);
}
//book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}



function onSubmitHandler(e) {
    
    const titleDom = document.getElementById("title"),
        authorDom = document.getElementById("author"),
        isbnDom = document.getElementById("isbn");

    //validation
    if (titleDom.value == "" || authorDom.value == "" || isbnDom.value == "") {
        alert("Enter a valid input");
        return;
    }

    //book intentation
    let book = new Book(titleDom.value, authorDom.value, isbnDom.value);

    creatNewRowElement(book);

    //clear input field
    titleDom.value = '';
    authorDom.value = '';
    isbnDom.value = '';
}

//creat creatNewRowElement method
function creatNewRowElement(book) {
    let listDom = document.getElementById("book-list");
    let rowDom = document.createElement("tr");
    rowDom.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td> 
        <td>${book.isbn}</td> 
        <td><a href="#" class="delete">x</a></td>`;
    listDom.appendChild(rowDom);
}