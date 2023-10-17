const getMultiples = (n: number): number[] => {
    return Array(n + 1).fill(0).reduce<number[]>((prev, _, index) => {
        if (index % 3 === 0  || index % 5 === 0) return [...prev, index]
        return prev
    }, [] as number[])
}

export default getMultiples