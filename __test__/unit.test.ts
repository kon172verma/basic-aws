import { host, port, server } from '../src/ex2-rest-server';
import { restRequest } from './rest-requests';

describe('restAPI Unit Tests', () => {

    beforeAll(() => {
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })

    it('Test for GET request', async() => {
        const result = await restRequest('get');
        const expected = JSON.parse(JSON.stringify({ 'answer': 0 }));
        expect(result).toStrictEqual(expected);
    });
    
    it('Test for POST request', async () => {
        const val1 = 2, val2 = 7;
        const result = await restRequest('post',val1,val2);
        const expected = JSON.parse(JSON.stringify({ 'answer': val1*val2 }));
        expect(result).toStrictEqual(expected);
    });

    afterAll(() => {
        server.close();
    })
    
});