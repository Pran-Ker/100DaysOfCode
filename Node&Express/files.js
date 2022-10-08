const fs = require('fs');


// Reading files

// fs.readFile('./docs/example.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// Write files

fs.writeFile('./docs/blog.txt', 'This is the text which will be added to \nthe file.', ()=>{
    console.log("New file blog created, and text added.");
});
