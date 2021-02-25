export function commaSeparatedToArray(text){
    return text.split(',').map(word => word.trim())
}