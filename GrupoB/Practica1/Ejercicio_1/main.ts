const quickSort = (array: number[]): number[] => {
    if (array.length <= 1) return array

    const pivot = array.shift() ?? 0
    const minors = quickSort(array.filter(item => item <= pivot))
    const majors = quickSort(array.filter(item => item > pivot))

    return [...minors, pivot, ...majors]
}

export default quickSort

const randomArray = [42, 17, 89, 56, 23, 5, 71, 33, 98, 12];
console.log(quickSort(randomArray))