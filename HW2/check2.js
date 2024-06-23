

// let pp = document.getElementById("check");

// class Check{
//     constructor(productName, count, price){
//         this.productName = productName;
//         this.count = count;
//         this.price = price;
//     }


//     static ShowChecks(arrChecks){
//         pp.innerHTML = "";
//         for (let i = 0; i < arrChecks.length; i++) {
//             let info = arrChecks[i].Info();
//             pp.innerHTML += info;
//         }
//     }


//     static TotalPrice(arrChecks){
//         pp.innerHTML = '';
//         let totalPrice = 0;
//         for(let i = 0; i < arrChecks.length; i++){
//             totalPrice += arrChecks[i].price;
//         }
//         pp.innerHTML += totalPrice.toString();

//     }


//     static MaxPrice(arrChecks){
//         pp.innerHTML = '';
//         let maxPrice = arrChecks[0].price;
//         for(let i = 1; i < arrChecks.length; i++)
//         {
//             if(maxPrice < arrChecks[i].price){
//                 maxPrice = arrChecks[i].price;
//             }
//         }
//         pp.innerHTML += totalPrice.toString();
//     }


//     static Average(arrChecks){
//         pp.innerHTML = '';
//         let average;
//         for(let i = 0; i < arrChecks.length; i++){
//             average += arrChecks[i].price;
//         }
//         average = average / arrChecks.length;
//         pp.innerHTML += totalPrice.toString();
//     }


    // Info() {
    //     return `Product name: ${this.productName}, Count: ${this.count}, Price: ${this.price} <br> `;
    // }

// }


// let product1 = new Check("adronniy kolayder", 10, 222);
// let product2 = new Check("yabloko", 12, 222);
// let product3 = new Check("apelsin", 3, 222);
// let product4 = new Check("grusha", 8, 222);
// let product5 = new Check("vinograd", 5, 222);

// let arrChecks = [product1, product2, product3, product4, product5];

// Check.TotalPrice(arrChecks);