console.time('SLOW CODE')

num = 0
for(let i=0; i<1e8;i++){
    num = Math.random()
}

console.timeEnd('SLOW CODE')