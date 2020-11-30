const parent = {
  name: 'Stacey',
  age: 35,
  heritage: 'Irish'
}

const child = Object.create(parent);

child.name = 'Ryan';
child.age = 7;
parent.age = 60;
console.log(child);
console.log(parent);
console.log({});

/*console.log(child.name) // Ryan
console.log(child.age) // 7
console.log(child.heritage) // Irish

console.log(parent.name); 
console.log(parent.age); */