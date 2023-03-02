
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


// Originalmente interprete el ejercicio 6 como un filtro al objeto principal,
// aqui quedaria el ejercicio rehecho

const carsByColor = [{
    blue: [    {
        color: "Blue",
        size: "Large"
    },
    {
        color: "Blue",
        size: "Large"
    },
    {
        color: "Blue",
        size: "Medium"
    },
    {
        color: "Blue",
        size: "Large"
    }
],
    red: [{
        color: "Red",
        size: "Small"
    },
    {
        color: "Red",
        size: "Large"
    },
    {
        color: "Red",
        size: "Small"
    },
    {
        color: "Red",
        size: "Medium"
    }
]
}]

const carsBySize = [{
    small: [    {
        color: "Red",
        size: "Small"
    },
    {
        color: "Red",
        size: "Small"
    }],
    medium: [    {
        color: "Blue",
        size: "Medium"
    },
    {
        color: "Red",
        size: "Medium"
    }],
    large: [ {
        color: "Blue",
        size: "Large"
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
        size: "Large"
    }]

}]
