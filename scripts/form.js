document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", function () {
const selectProduct = document.getElementById('productName');

    if(selectProduct) {
        products.forEach(item => {
            const option = document.createElement('option');
            option.value = item.name;
            option.textContent = capitalizeWords(item.name);
            selectProduct.appendChild(option);
            const value = document.createElement('value');
            value.value = item.id;
            value.textContent = item.id;
            selectProduct.appendChild(value);
        })
    }
});

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
};

function reviewCount () {
    let reviews = localStorage.getItem("reviewCounter") || 0;
    reviews = parseInt(reviews) + 1;
    localStorage.setItem("reviewCounter", reviews);

    let count = document.getElementById("counter");
    if (count) {
        count.textContent = reviews;
    }
};

if (window.location.pathname.includes("review.html")) {
    reviewCount();
};