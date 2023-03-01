const burger = document.querySelector(".burger-menu")
const navMenu = document.querySelector(".nav-menu")
const productsContainer = document.querySelector(".product-card-container")
const tabButton = document.querySelector(".tab-button")

const laptops = [
    {
        name: "ThinkPad X1 Carbon Gen 8",
        price: "1.299,99",
        coupon: "YOGAPRESALE8",
        img: "/resources/x1carb-8th.png",
        doorbuster: true,
    },
    {
        name: "ThinkPad X1 Carbon Gen 8",
        price: "1.299,99",
        coupon: "YOGAPRESALE8",
        img: "/resources/lenovo-laptop-thinkpad-x1-carbon-7th-gen-hero.webp"
    },
    {
        name: "ThinkPad X1 Carbon Gen 8",
        price: "1.299,99",
        coupon: "YOGAPRESALE8",
        img: "/resources/lenovo-laptop-thinkpad-x1-extreme-2nd-gen-hero.png"
    },
    {
        name: "ThinkPad X1 Carbon Gen 8",
        price: "1.299,99",
        coupon: "YOGAPRESALE8",
        img: "/resources/x1carb-8th.png",
        doorbuster: true,
    },
]


burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navMenu.classList.toggle("open");
})

document.querySelectorAll(".nav-link").forEach(el => el.addEventListener)

const buildCards = () => {

    laptops.forEach(el => {

        if(el.doorbuster){
            productsContainer.innerHTML += `<div class="card">
            <span class="sale-label">DOORBUSTER</span>
            <img class="card-img" src="${el.img}">
            <p class="card-name">${el.name}</p>
            <p class="card-price">$ ${el.price}</p>
            <p class="card-coupon">Use eCoupon: <span id="coupon">${el.coupon}</span></p>
            <button class="add-to-cart-button">Add to cart</button>
        </div>`
        } else{
            productsContainer.innerHTML += `<div class="card">
            <img class="card-img" src="${el.img}">
            <p class="card-name">${el.name}</p>
            <p class="card-price">$ ${el.price}</p>
            <p class="card-coupon">Use eCoupon: <span id="coupon">${el.coupon}</span></p>
            <button class="add-to-cart-button">Add to cart</button>
        </div>`
        }

    });
}

const dropdownBtn = document.getElementById("tab-button");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

buildCards()

