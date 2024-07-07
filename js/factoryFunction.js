function createRectangle(length,breadth,side) {
    const rectangle = {
      length,
      breadth,
  
      draw: function () {
        console.log("Drawing rectangle");
      },
  
      area: function () {
        console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
      }
    }

    const square = {
        side,
       
    
        draw: function () {
          console.log("Drawing square");
        },
    
        area: function () {
          console.log(`Area of square:`);
        },
      };
      return [rectangle,square];
  }
  
  let rectangle1 = createRectangle(1,2,3)[0]
  let square1=createRectangle(1,2,3)[1]
  console.log(rectangle1.length)
  console.log(rectangle1.breadth)
  console.log(square1.side)
  rectangle1.draw()
  square1.draw()
  