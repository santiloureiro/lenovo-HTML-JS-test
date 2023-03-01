const nums = [1,2,3,4,5,6,7,8,9,10,256,1024]

const getPairNums = (arr) => {

    let pairNums = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            pairNums.push(arr[i])
        }
    }
    console.log(pairNums)
}

getPairNums(nums)
