function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        current_value = array[i]
        let j = i - 1
        while (j >=0 && array[j] > current_value) {
            array[j + 1] = array[j]
            j--
        }
  
        array[j + 1] = current_value
    }
  
    return array
}
var array = [95, 48, 77, 106, 15, 94, 3, 52, 11, 80]
console.log(insertionSort(array))