function steamrollArray(arr) {
   return arr.reduce((acc, val) => 
    acc.concat(Array.isArray(val) ? steamrollArray(val) : val), [])
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);