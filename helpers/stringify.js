const stringify = l => {
    let holder = "";

    for (let i = 0; i < l.length; i++) {
        if (holder[i] === null) { holder = holder + "|"; } 
        
        else { holder = holder + l[i] + "|" }
    }

    holder = holder + "\\";

    return holder;
}

export default stringify;