import totalLength from "./totalLength";

const totalTotalLength = l => {
    let partial = 0;

    for (let i = 0; i < l.length; i++) {
        partial =+ totalLength(l[i]);
    }

    return partial;
}

export default totalTotalLength;