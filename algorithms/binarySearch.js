/*given a sorted array of n elements and a target element t, find the index of t in the array. Return -1 if the target element is not found*/
// function binarySearch(arr, el) {

//     let leftIndex = 0;
//     let rightIndex = arr.length-1;
//     while(leftIndex <=rightIndex) {
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(el === arr[middleIndex]) {
//             return middleIndex;
//         }
//         if(el < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         } else {
//             leftIndex  = middleIndex + 1;
//         }
//     }

//     return -1;
// }




const binarySearch = (arr, el) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if(el === arr[middleIndex]){return middleIndex};
        if (el < arr[middleIndex]){rightIndex = middleIndex - 1}
        else {leftIndex = middleIndex + 1}
    }

    return -1;
}




const binarySearchRecursive = (arr, el) => {

    function search(arr, el, leftIndex, rightIndex){

        //base Case
        if(leftIndex > rightIndex) {
            return -1;
        }

        let midIndex = Math.floor((leftIndex + rightIndex) / 2);

        if(el === arr[midIndex]) {
            return midIndex;
        }
        //stepcase
        if(el < arr[midIndex]) {
            return search(arr, el, leftIndex, midIndex - 1);
        } else {
            return search(arr, el, midIndex + 1, rightIndex);
        }
    }

    return search(arr, el, 0, arr.length-1)
}

console.log(binarySearchRecursive([-5,2,4,6,10], 10)) //4
console.log(binarySearchRecursive([-5,2,4,6,10], 6)) //3
console.log(binarySearchRecursive([-5,2,4,6,10], 20)) //-1
