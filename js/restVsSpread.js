function Employee(name,age,...address) { //this is used as rest operator
    this.name = name;
    this.age = age;

    this.address = address
}

let emp1 = new Employee("Harshit Devda",69,"L.Lasan");
console.log(emp1.name);
console.log(emp1.address[0]);

// add and delete propert
emp1.kule='gol'
console.log(emp1.kule)
emp1.address.location='Ashok Vihar'
console.log(emp1.address.location)

delete emp1.address.location

//spread
let a1=[1,2,3,4]
let a2=[4,5,6,7]

console.log(...a1,...a2)
