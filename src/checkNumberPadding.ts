export function checkNumberPadding(intStrs: Iterable<string>): number {
    const arr = Array.from(intStrs);
  
    // 0 → nothing to observe
    if (arr.length === 0) return 0;
  
    function stripLeadingZeros(s: string): string {
        let i = 0;
        while (i < s.length && s[i] === '0') i++;

        // If all characters were zeros
        if (i === s.length) return '0';
        
        return s.slice(i);
      }
  
    const hasPadding: boolean[] = [];
    const totalLengths: number[] = [];
    const numericLengths: number[] = [];
  
    for (const s of arr) {
      const stripped = stripLeadingZeros(s);
      hasPadding.push(s.length > stripped.length);
      totalLengths.push(s.length);
      numericLengths.push(stripped.length);
    }
  
    // If no string has leading zeros → no padding
    if (hasPadding.every(v => !v)) {
      return 1;
    }
  
    // Infer padding length from padded values
    let padLength: number | null = null;
  
    for (let i = 0; i < arr.length; i++) {
      if (hasPadding[i]) {
        if (padLength === null) {
          padLength = totalLengths[i];
        } else if (totalLengths[i] !== padLength) {
          // Inconsistent padding
          return -1;
        }
      }
    }
  
    // Validate overflow / non-padded values
    if (padLength !== null) {
      for (let i = 0; i < arr.length; i++) {
        if (!hasPadding[i] && totalLengths[i] < padLength) {
          return -1;
        }
      }
      return padLength;
    }
  
    // Inconclusive: no visible padding but growth exists
    return -Math.min(...numericLengths);
  }