export function commaSeparatedToArray(text){
    const singleWords = text.split(',')
        .map(word => word.trim())
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .sort()
    const noDuplicates = [...new Set(singleWords)]
    return noDuplicates
}