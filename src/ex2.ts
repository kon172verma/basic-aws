import * as http from 'http';

export const host = 'localhost';
export const port = 8080;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const requestListener = function (req: any, res: any) {
    res.setHeader('Content-Type', 'application/json'); 
    switch (req.url) {
        case '/':
            res.writeHead(200);
            res.end('use /cal for GET request'); 
            break;
        case '/cal':
            if (req.method === 'GET') {
                res.writeHead(200);
                res.end('{"answer": 0}');
            } else if (req.method === 'POST') {
                const body = '';
                req.on('data', (data: string) => {
                    const values = JSON.parse(data.toString());
                    if (!(values.val1) || !(values.val2)) {
                        res.end('val1, val2 values not properly passed');
                    } else {
                        res.end(`{"answer": ${values.val1 * values.val2}}`);
                    }
                });
                req.on('end', () =>{
                    res.end(body);
                });
            }
            break;
        default:
            res.writeHead(200);
            res.end('404 This page does not exist'); 
    }
};

export const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
