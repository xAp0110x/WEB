

// let pp = document.getElementById("ex1")

// class Car{
    
//     constructor(manufacturer, model, year, avgSpeed){
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.year = year;
//         this.avgSpeed = avgSpeed;
//     }

    
//     displayInfo() {
//         pp.innerHTML = ""; 
//         pp.innerHTML = `
//           <p>Manafacturer: ${this.manufacturer}</p>
//           <p>Model: ${this.model}</p>
//           <p>Year: ${this.year}</p>
//           <p>AVG speed: ${this.avgSpeed} </p>
//         `;
//     }

    
//     calculateTravelTime(distance) {
//         pp.innerHTML = ""; 
//         let breakEveryHours = 4;
//         let breakDuration = 1; 
    
//         let time = distance / this.avgSpeed; 
//         let numberOfBreaks = Math.floor(time / breakEveryHours);
//         if (time % breakEveryHours === 0) {
//           numberOfBreaks--;
//         }
    
//         let total_time = time + numberOfBreaks * breakDuration;
//         return total_time;
//     }

// }


// let myCar = new Car("Audi", "A6", 2022, 120);
// let travelTime = myCar.calculateTravelTime(400);

// //myCar.displayInfo();
// pp.innerHTML = travelTime.toString();