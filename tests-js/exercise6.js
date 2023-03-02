
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


const getArrayWithProp = (array, prop, value) => {
    const arrayWithProp = array.filter(el => el[prop].toLowerCase()  == value.toLowerCase());
    return arrayWithProp
}

console.log(getCarsWithProp("color", "blue"))
console.log(getCarsWithProp("size","Medium"))
console.log(getCarsWithProp("color","Red"))