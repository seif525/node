let fs = require('fs')
let file = 'process.argv[2]'

fs.readFile(file, 'utf-8', (er,data)=>{

    let lines = data.split('/n').length-1
    console.log(lines)

})

