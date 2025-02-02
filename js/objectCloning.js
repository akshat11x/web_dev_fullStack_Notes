const rectangle = {
    length : 2,
    breadth: 4,

    draw : function(){
        console.log("Drawing rectangle");
    },

    area : function()
    {
        console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
    }
}

let duplicate={}

for(let key in rectangle){
    duplicate[key]=rectangle[key]
}
console.log(duplicate.length)
duplicate.area()

// by assign

let duplicate1=Object.assign({},rectangle)
console.log(duplicate1.length)
duplicate1.area()
console.log(duplicate1)

//by spread object
const duplicate2 = {...rectangle};
console.log(duplicate2)