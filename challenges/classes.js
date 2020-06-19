// 1. Copy and paste your prototype in here and refactor into class syntax.

//--PROTOTYPE CODE--
// function CuboidMaker(attributes) {

//     this.length = attributes.length;
//     this.width  = attributes.width;
//     this.height = attributes.height;
//   }
//   CuboidMaker.prototype.volume = function () {
//     return this.length * this.width * this.height;
//   };
//   CuboidMaker.prototype.surfaceArea = function () {
//     return ( 2 * ( this.length * this.width + this.length * this.height + this.width  * this.height));
//   };
//   const cuboid = new CuboidMaker({
//     length: 4,
//     width : 5,
//     height: 5,
//   });
//------------------

//--=CLASSES---

class CuboidMaker {

    constructor(attributes) {
      this.length = attributes.length;
      this.width = attributes.width;
      this.height = attributes.height;
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return (2 * (this.length * this.width + this.length * this.height +  this.width * this.height));
    }

}
    const cuboid = new CuboidMaker ({
          length : 4,
          width  : 5,
          height : 5,
        });

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
class CubeMaker extends CuboidMaker {
    constructor(attributes){
        super(attributes);  
    }
    formulas(){
        return (6*(Math.pow(this.length, 2)));
    }
}
const cube = new CubeMaker ({length : 5})
// console.log(cube.formulas())

//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker. 
// Test your work by logging out your volume and surface area.
