//generates an array of length n that only contains the value 'null'

const allNull = n => {
    
    let arr = new Array(n);

    for(let i = 0; i < n; i++) { arr[i] = null; }

    return arr;
}

export default allNull;






