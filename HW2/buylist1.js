

// let pp = document.getElementById("list");

// class Product {

//     constructor(productName, count, isBuy) {
//         this.productName = productName;
//         this.count = count;
//         this.isBuy = isBuy;
//     }

//     static FirstNotBuy(arrProducts) {
//         arrProducts.sort((a, b) => (a.isBuy === b.isBuy) ? 0 : a.isBuy ? 1 : -1);
        
//         pp.innerHTML = '';
        
//         for (let i = 0; i < arrProducts.length; i++) {
//             let info = arrProducts[i].Info();
//             pp.innerHTML += info + "<br>";
//         }
//     }


//     static AddProduct(arrProducts, productName, count) {
//         let haveProduct = arrProducts.find(prod => prod.productName === productName);
//         if (haveProduct) {
//             haveProduct.count += count;
//         } else {
//             arrProducts.push(new Product(productName, count, false));
//         }
//     }


//     static IsBuy(arrProducts, productName) {
//         let product = arrProducts.find(prod => prod.productName === productName);
//         if (product) {
//             product.isBuy = true;
//         }
//     }


//     Info() {
//         return `Product name: ${this.productName}, Count: ${this.count}, Is buy: ${this.isBuy}`;
//     }
// }



// let product1 = new Product("adronniy kolayder", 10, true);
// let product2 = new Product("yabloko", 12, false);
// let product3 = new Product("apelsin", 3, true);
// let product4 = new Product("grusha", 8, true);
// let product5 = new Product("vinograd", 5, false);

// let arrProduct = [product1, product2, product3, product4, product5];


// Product.FirstNotBuy(arrProduct);
