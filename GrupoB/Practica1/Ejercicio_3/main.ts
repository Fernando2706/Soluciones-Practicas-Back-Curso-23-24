const splitInSpaces = (array: string[]): string => {
    if (array.length === 0) return ""

    return array.sort()[0].split('').join(" ")
}

export default splitInSpaces