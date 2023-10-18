function bubbleSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    
    const mixed = arr.reduce<number []>((acc, currentValue, i) => {
        const nextValue = acc[i + 1]
        if (nextValue <= currentValue) {
            acc[i] = nextValue
            acc[i + 1] = currentValue
        }
        return acc
    }, arr)
    
    return [...bubbleSort(mixed.slice(0, -1)), mixed[mixed.length - 1]]
  }


export default bubbleSort