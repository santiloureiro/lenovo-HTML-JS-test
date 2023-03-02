
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

console.log(getArrayWithProp(cars ,"color", "blue"))
console.log(getArrayWithProp(cars ,"size","Medium"))
console.log(getArrayWithProp(cars ,"color","Red"))
console.log(getArrayWithProp(cars ,"size","Small"))