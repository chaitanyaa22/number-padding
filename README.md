# checkNumberPadding

Checks if a collection of integer strings has consistent zero-padding.

## Function

```typescript
function checkNumberPadding(intStrs: Iterable<string>): number
```

## Returns

- `0` - Empty input
- `1` - No padding detected
- `> 1` - Consistent padding length
- `-1` - Inconsistent padding
- `< -1` - Inconclusive (returns `-min(numericLengths)`)

## Examples

```typescript
checkNumberPadding(['001', '002', '003'])  // Returns: 3
checkNumberPadding(['1', '2', '3'])         // Returns: 1
checkNumberPadding(['001', '02', '003'])    // Returns: -1
checkNumberPadding([])                      // Returns: 0
```
