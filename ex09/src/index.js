const product = (...args) => {
    
    return args.reduce((aa, bb) => aa * bb, 1);
}
console.log(product(1,2));
console.log(product(4, 3, 10, 2));
console.log(product(7));
console.log(product(1));
module.exports = product;