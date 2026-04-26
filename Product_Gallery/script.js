// let products = [
//     {
//         name: "Phone",
//         price: "₹10000",
//         image: "https://picsum.photos/200?1"
//     },
//     {
//         name: "Laptop",
//         price: "₹50000",
//         image: "https://picsum.photos/200?2"
//     },
//     {
//         name: "Headphones",
//         price: "₹2000",
//         image: "https://picsum.photos/200?3"
//     }
// ];

// let container = document.getElementById("products");

// for (let i = 0; i < products.length; i++) {
//     let p = products[i];

//     container.innerHTML += `
//         <div class="card">
//             <img src="${p.image}">
//             <h3>${p.name}</h3>
//             <p>${p.price}</p>
//             <button onclick="buyProduct('${p.name}')">Buy Now</button>
//         </div>
//     `;
// }

// function buyProduct(name) {
//     alert(name + " purchased!");
// }


let products = [
    {
        name: "Phone",
        price: 10000,
        img: "https://picsum.photos/200?1"
    },
    {
        name: "Laptop",
        price: 500000,
        img: "https://picsum.photos/200?1"
    },
    {
        name: "Headphones",
        price: 3000,
        img:"https://picsum.photos/200?1"
    }
]

let container = document.getElementById("products");

for(let i=0; i<products.length; i++){
    let p = products[i];

    container.innerHTML += `<div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button onclick="buyProduct('${p.name}')"> Buy Now </button>
    </div>`;
}

function buyProduct(name){
    alert(name + " purchased!");
}