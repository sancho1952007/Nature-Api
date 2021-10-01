const http=require('http');

var images=['https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80', 
 'https://images.unsplash.com/photo-1517256985756-924657c74fba?&auto=format&fit=crop&w=387&q=80',
 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80',
 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
 'https://images.unsplash.com/photo-1611207900337-87daa2757b28?&xlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
 'https://images.unsplash.com/photo-1519681393784-d120267933ba?&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
 'https://images.unsplash.com/photo-1463288889890-a56b2853c40f?&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80',
 'https://images.unsplash.com/photo-1513954789179-48f4fcd3ec7d?&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
 'https://images.unsplash.com/photo-1552082919-e60010758c47?&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
 'https://images.unsplash.com/photo-1502856755506-d8626589ef19?&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
 'https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?&auto=format&fit=crop&w=1170&q=80',
 'https://images.unsplash.com/photo-1461301214746-1e109215d6d3?&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
]

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(`{
        "source": "${images[Math.floor(Math.random() * images.length)]}",
        "credits": "https://unsplash.com/"
}`)
}).listen(8000);
