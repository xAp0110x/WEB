

// let pp = document.getElementById("ex3");


// class Time {
//     constructor(hours, minutes, seconds) {
//       this.hours = hours;
//       this.minutes = minutes;
//       this.seconds = seconds;
//     }
  
//     displayTime() {
//       pp.innerHTML = "";
//       pp.innerHTML = `
//         Time: ${this.hours}:${this.minutes}:${this.seconds}
//       `;
//     }
  
//     changeSeconds(seconds) {
//       let totalSeconds = this.seconds + seconds;
//       let additionalMinutes = Math.floor(totalSeconds / 60);
//       this.seconds = totalSeconds % 60;
//       this.changeMinutes(additionalMinutes);
//     }
  
//     changeMinutes(minutes) {
//       let totalMinutes = this.minutes + minutes;
//       let additionalHours = Math.floor(totalMinutes / 60);
//       this.minutes = totalMinutes % 60;
//       this.changeHours(additionalHours);
//     }
  
//     changeHours(hours) {
//       this.hours = (this.hours + hours) % 24;
//     }
//   }
  
  
//   let time = new Time(20, 30, 45);
//   time.displayTime();
//   time.changeSeconds(30);
//   time.changeMinutes(31);
//   time.changeHours(3);
//   time.displayTime();
  