export function commaSeparatedToArray(text){
    return text.split(',').map(word => word.trim())
}

export function sortArrayAlphabetically(text){
    return text.split(',').sort()
}

export function reduceDublicates(text){
    const newText = [...new Set(text)]
    return newText
}

export function transformTitelcase(...text){
    return text.map(word => word.charAt(0).toUpperCase() + word.slice(1))
}