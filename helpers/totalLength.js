const totalLength = l => {
    let partialsum = 0;
    for (let i = 0; i < l.length; i++) {
        partialsum =+ l[i].length;
    }

    return partialsum;
}

export default totalLength;