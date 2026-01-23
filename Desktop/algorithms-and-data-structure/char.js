const st = "hello";

function hasDuplicateChar(str) {
    let seen = new Set();

    for (let i = 0; i < str.length; i++) {
        if (seen.has(str[i])) {
            return true; 
        }
        seen.add(str[i]);
    }

    return false; 
}

console.log(hasDuplicateChar(st)); 

