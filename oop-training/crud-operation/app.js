window.addEventListener("load", init);

function init() {
    let bookFormDom = document.getElementById("submitButton");
    bookFormDom.addEventListener('click', onSubmitHandler);

    let deliteButton = document.getElementById('book-list');
    deliteButton.addEventListener('click', deliteBookList);
}

//book constructor
function Book(title, author, isbn, version, publication, type) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.version = version;
    this.publication = publication;
    this.type = type;
}
//UI constructor
function UI(){

}
UI.prototype.showAlert = function(message,className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    //const container = document.querySelector('container');
    const containerList = document.getElementsByClassName('container');
    const container = containerList[0];
    const bookForm = document.querySelector('form');

    container.insertBefore(div,bookForm);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 4000);
}

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

function onSubmitHandler(e) {
    const titleDom = document.getElementById("title"),
        authorDom = document.getElementById("author"),
        isbnDom = document.getElementById("isbn");
    //get varsion
    const verDom = getSelectedVersion();
    //get publication
    const publnDom = document.getElementById('publication');
    //get type
    const typeArrayDomList = getSelectedType();

    //const typeArray = typeArrayDomList.map(function (e) {
    //   return e.value;
    //});
    const newTypevalue = constValues(typeArrayDomList);

    let ui = new UI();

    //validation
    if (titleDom.value == "" || authorDom.value == "" || isbnDom.value == ""
        || verDom == null || publnDom.value == null || newTypevalue == "") {
        ui.showAlert('please enter all fields', 'error');
        return;
    }

    //book intentation
    let book = new Book(titleDom.value, authorDom.value, isbnDom.value,
        verDom.value, publnDom.value, newTypevalue);


    creatNewRowElement(book);

    ui.showAlert('successfully book is created', 'success');

    //clear input field
    titleDom.value = '';
    authorDom.value = '';
    isbnDom.value = '';
    verDom.checked = false;
    publnDom.value = '';
    typeArrayDomList.forEach(function (e) {
        e.checked = false;
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    eraseText();

}

//creat creatNewRowElement method
function creatNewRowElement(book) {
    let listDom = document.getElementById("book-list");
    let rowDom = document.createElement("tr");
    rowDom.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td> 
        <td>${book.isbn}</td> 

        <td>${book.version}</td>
        <td>${book.publication}</td>
        <td>${book.type}</td>
        <td><a href="#" class="delete">x</a></td>`;
    listDom.appendChild(rowDom);
}

function getSelectedVersion() {
    var ele = document.getElementsByName('version');

    for (var i = 0; i < ele.length; i++) {
        var dom1 = ele[i];
        if (dom1.checked) {
            return dom1;
        }
    }
}

function getSelectedType() {
    var items = document.getElementsByName('type');
    var selectedItemsDom = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].checked == true)
            selectedItemsDom.push(items[i]);
    }
    return selectedItemsDom;
}

function constValues(typeArrayDomList) {
    var newResult = "";
    typeArrayDomList.forEach(function (e, i) {
        newResult += e.value;
        if (i != typeArrayDomList.length - 1) {
            newResult += ',';
        }
    });
    return newResult;
}

function deliteBookList(e){

    let ui = new UI();

    ui.deleteBook(e.target);
    
    e.preventDefault();
}

function eraseText() {
    document.getElementById("suggestion").value = "";
}