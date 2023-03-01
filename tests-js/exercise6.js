
const cars = [
    {
        color: "Blue",
        size: "Large"
    },
    {
        color: "Red",
        size: "Small"
    },
    {
        color: "Blue",
        size: "Large"
    },
    {
        color: "Red",
        size: "Large"
    },
    {
        color: "Blue",
        size: "Medium"
    },
    {
        color: "Red",
        size: "Small"
    },
    {
        color: "Blue",
        size: "Large"
    },
    {
        color: "Red",
        size: "Medium"
    },
]

const getCarsWithProp = (prop, value) => {
    const carsWithProp = cars.filter(car => car[prop].toLowerCase()  == value.toLowerCase());
    return carsWithProp
}

console.log(getCarsWithProp("color", "blue"))
console.log(getCarsWithProp("size","Medium"))
console.log(getCarsWithProp("color","Red"))