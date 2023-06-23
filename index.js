// const http = require('http');

// const server = http.createServer((req ,res)=>{

//     const url = req.url;

//     if(url === '/') {
//        res.write('INDEX SAYFAM')
//     }
//     else if(url ==='/about') {
//         res.write('ABout fayfam')
//     }
//     else{
//         res.writeHead(404,{'ContexType':'text/html'})
//         res.write('404 sayfa bulunamadi');
//     }

//     // console.log('bir istek gonderildi');
//     // res.write('Helooo Node'); 
//     res.end();
    
// })

// const port = 3000;

// server.listen(port, ()=> {
//     console.log(`${port} de bashlatildi`);
// })

//TASK

const http = require('http');

const server = http.createServer((req,res) => {

    const url = req.url;

    if(url === '/') {
        res.write('<h1>This is my index page</h1>')
    }
    else if(url === '/about') {
        res.write('<h1>THis is my ABout page</h1>')
    } else if(url === '/contact') {
        res.write('<h1>THis is my contact page</h1>')
    }else {
        res.write('404 not found')
    }

    res.end();

})

const port = 3000;

server.listen(port, ()=> {
    console.log('3000 port bashlatilti')
})