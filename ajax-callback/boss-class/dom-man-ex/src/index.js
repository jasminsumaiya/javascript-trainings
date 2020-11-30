import "./styles.css";


let customers = [
{name:'John','age':'20'},
{name:'kumar','age':'30'},
{name:'Saleem','age':'40'}
];

function renderCustomers() {
  let customerListDOM = document.getElementById('customerList');
  
  customers.forEach((customer)=>{
    var divElement = document.createElement('div');
    divElement.classList.add('customerItem');
    divElement.textContent = customer.name;
    customerListDOM.appendChild(divElement);
    divElement.addEventListener('click', (event)=>{
       alert(customer.name);
    });
  });
}

function renderViewList(modelItems, 
  parentDOM, componentType, propName, eventType, 
  className, actionListener) {
  modelItems.forEach((model)=>{
    var domElement = document.createElement(componentType);
    domElement.classList.add(className);
    domElement.textContent = model[propName];
    parentDOM.appendChild(domElement);
    domElement.addEventListener(eventType, (event)=>{
      actionListener(model[propName]);
    });
  });
}


function myActionListener(value) {
 alert(value);
}

let specialCustomerDOM = document.getElementById('specialCustomers');
renderViewList(customers, specialCustomerDOM,'li', 'age',
'mousedown','customerItem', myActionListener);


//renderCustomers();