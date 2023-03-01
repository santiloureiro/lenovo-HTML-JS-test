
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


const carsColors = [{
    red:    [
    {color: "Red",size: "Small"},
    {color: "Red",size: "Large"},
    {color: "Red",size: "Small"},
    {color: "Red",size: "Medium"}],

    blue: [
    {color: "Blue",size: "Large"},
    {color: "Blue",size: "Large"},
    {color: "Blue",size: "Medium"},
    {color: "Blue",size: "Large"}
]
}]



const getCarsWithProp = (prop, value) => {
    const carsWithProp = cars.filter(car => car[prop].toLowerCase()  == value.toLowerCase());
    return carsWithProp
}

console.log(getCarsWithProp("color", "blue"))
console.log(getCarsWithProp("size","Medium"))
console.log(getCarsWithProp("color","Red"))