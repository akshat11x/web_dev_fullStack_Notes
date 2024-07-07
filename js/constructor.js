function Employee(name,age,colony,street='deep Market') {
    this.name = name;
    this.age = age;

    this.address = {
        street,
        colony
    }
}

let emp1 = new Employee("Harshit Devda",69,"L.Lasan");
console.log(emp1.name);
console.log(emp1.address.street);

// add and delete propert
emp1.kule='gol'
console.log(emp1.kule)
emp1.address.location='Ashok Vihar'
console.log(emp1.address.location)

delete emp1.address.location