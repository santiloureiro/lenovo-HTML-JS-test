const burger = document.querySelector(".burger-menu")
const navMenu = document.querySelector(".nav-menu")
const productsContainer = document.querySelector(".product-card-container")

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

buildCards()

