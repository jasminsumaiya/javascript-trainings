
window.addEventListener("load", init);

function init() {
    var btn = document.querySelector("button");
    btn.addEventListener("click", onMouseClick);

    const inputBox = document.querySelector(".input-field");
    inputBox.addEventListener("keypress", onKeyDown);
}

function onKeyDown(e){
   if(e.keyCode == 13){
    creatNewList();
   }
}

function onMouseClick(e) {
    
    creatNewList();
}




function creatNewList() {
    const inputBox = document.querySelector(".input-field");
    if (inputBox.value == "") {
        alert("Please Enter a valid Name");
        return;
    }

    const ulListDom = document.querySelector("ul");
    var result = canContainDuplicate(ulListDom, inputBox);
    if (result == true) {
        alert("This Name is already print");
        return;
    }

    //creat <li> tag  and add text content
    const listDom = document.createElement("li");
    const newContent = document.createTextNode(inputBox.value);
    listDom.appendChild(newContent);
    //listDom.appendChild(document.createTextNode(inputBox.value));

    //ternary operator
    //listDom.className = ulListDom.children.length%2 == 0? "my-even":"my-odd";

    
     //creat remove button
     const rmvbtn = document.createElement("button");
     rmvbtn.textContent = "x";
     rmvbtn.className = "my-btn";

     //rmv button is the parant node of listDom
     listDom.appendChild(rmvbtn);

     

    //insert li to parent tag <ul>
    ulListDom.appendChild(listDom);

    //empty the input box
    inputBox.value = "";

    //remove element
    rmvbtn.addEventListener("click", removeElement);

}

function canContainDuplicate(ulListDom, inputBox) {
    const domList = Array.from(ulListDom.children);
    for(var listDom of domList) {
        if (listDom.textContent == inputBox.value) {
            return true;
        }
    }
    return false;
}



function removeElement(e){

    e.target.parentNode.remove();
    e.preventDefault();
}






