# checkNumberPadding

Checks if a collection of integer strings has consistent zero-padding.

## Function

function checkNumberPadding(intStrs: Iterable<string>): number


## Returns

`0` - Empty input
`1` - No padding detected
`> 1` - Consistent padding length
`-1` - Inconsistent padding
`< -1` - Inconclusive (returns `-min(numericLengths)`)

## Testing

The function can be tested manually by calling it with different input arrays
and verifying that the returned value matches the expected result.

Test cases:

checkNumberPadding(['001', '002', '003'])   // Returns: 3  
checkNumberPadding(['1', '2', '3'])         // Returns: 1  
checkNumberPadding(['001', '02', '003'])    // Returns: -1  
checkNumberPadding([])                      // Returns: 0  
checkNumberPadding(['001', '002', '9999'])  // Returns: 3  
checkNumberPadding(['999', '9999'])         // Returns: -3  
checkNumberPadding(['99', '999', '9999'])   // Returns: -2  

These examples can be run in a TypeScript environment or by logging the results
in a simple Node.js script.

