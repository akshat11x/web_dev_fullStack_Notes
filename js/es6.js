const rectangle = {
    length:0,
    breadth:0,

    draw: function () {
      console.log("Drawing rectangle");
    },

    area: function () {
      console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
    }
  }
rectangle.length=1
rectangle.breadth=2
const{length,breadth}=rectangle
console.log(length,breadth)
