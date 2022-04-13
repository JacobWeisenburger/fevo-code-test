// Input: "aabbbccda"
// Output: [ {"a": 2}, {"b": 3}, {"c": 2}, {"d": 1}, {"a": 1} ] or "a2b3c2d1a1"

const input = 'aabbbccda'
const inputArray = input.split( '' )
const outputArrayForLoop: Record<string, number>[] = []

for ( let index = 0; index < inputArray.length; index++ ) {
    const curr = inputArray[ index ]
    const prev = inputArray[ index - 1 ] ?? ''
    const lastOutputIndex = outputArrayForLoop.length - 1

    if ( curr === prev )
        outputArrayForLoop[ lastOutputIndex ][ curr ]++
    else
        outputArrayForLoop.push( { [ curr ]: 1 } )
}
console.log( outputArrayForLoop )
console.log( getOutputString( outputArrayForLoop ) )


const outputArrayReduce = input.split( '' ).reduce( ( acc, curr, index ) => {
    const prev = inputArray[ index - 1 ] ?? ''
    const lastOutputIndex = acc.length - 1

    if ( curr === prev )
        acc[ lastOutputIndex ][ curr ]++
    else
        acc.push( { [ curr ]: 1 } )

    return acc
}, [] as Record<string, number>[] )

console.log( outputArrayReduce )
console.log( getOutputString( outputArrayReduce ) )

function getOutputString ( outputArray: Record<string, number>[] ) {
    return outputArray.reduce( ( acc, curr ) => {
        const [ key ] = Object.keys( curr )[ 0 ]
        return acc + `${ key }${ curr[ key ] }`
    }, '' )
}
