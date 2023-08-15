const pi = 3.14159265359
let input = Number.parseInt(process.argv[2] , 10)

function find (x, y) {
    return x.toString().substring(0, y+2)
}

console.log(find(pi, input))