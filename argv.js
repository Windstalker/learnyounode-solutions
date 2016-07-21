const args = process.argv.slice(2);
let l = args.length;
let sum = 0;
while (l--) {
  sum += Number(args[l]);
}
console.log(sum);
