


// let pp = document.getElementById("ex2");

// class Fraction {

//     constructor(numerator, denominator) {
//       this.numerator = numerator;
//       this.denominator = denominator;
//     }
  

//     Sum(otherFraction) {
//       const newNumerator = this.numerator * otherFraction.denominator + otherFraction.numerator * this.denominator;
//       const newDenominator = this.denominator * otherFraction.denominator;
//       return new Fraction(newNumerator, newDenominator);
//     }

  
//     Minus(otherFraction) {
//       const newNumerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
//       const newDenominator = this.denominator * otherFraction.denominator;
//       return new Fraction(newNumerator, newDenominator);
//     }
  

//     Multiply(otherFraction) {
//       const newNumerator = this.numerator * otherFraction.numerator;
//       const newDenominator = this.denominator * otherFraction.denominator;
//       return new Fraction(newNumerator, newDenominator);
//     }
  

//     Divide(otherFraction) {
//       const newNumerator = this.numerator * otherFraction.denominator;
//       const newDenominator = this.denominator * otherFraction.numerator;
//       return new Fraction(newNumerator, newDenominator);
//     }


//     Gcd(a, b) {
//         if (b === 0) {
//             return a;
//         } else {
//             return this.Gcd(b, a % b);
//         }
//     }
  

//     Simplify() {
//       const gcd = this.Gcd(this.numerator, this.denominator);
//       return new Fraction(this.numerator / gcd, this.denominator / gcd);
//     }


// }



// let fraction1 = new Fraction(1, 2);
// let fraction2 = new Fraction(3, 4);

// let sum = fraction1.Sum(fraction2);
// let difference = fraction1.Minus(fraction2);
// let product = fraction1.Multiply(fraction2);
// let divide = fraction1.Divide(fraction2);
// let simplifiedFraction = fraction1.Simplify();


// pp.innerHTML = "Sum: " + sum.numerator + "/" + sum.denominator + "<br>";
// pp.innerHTML += "Difference: " + difference.numerator + "/" + difference.denominator + "<br>";
// pp.innerHTML += "Product: " + product.numerator + "/" + product.denominator + "<br>";
// pp.innerHTML += "Divide: " + divide.numerator + "/" + divide.denominator + "<br>";
// pp.innerHTML += "Simplified Fraction: " + simplifiedFraction.numerator + "/" + simplifiedFraction.denominator;
