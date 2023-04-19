import { host, port, server } from '../src/ex2-rest-server';
import { restRequest } from './rest-requests';

describe('restAPI Integration Test', () => {

    it('Test for REST API request', async () => {
        
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });

        const result_get = await restRequest('get');
        const expected_get = JSON.parse(JSON.stringify({ 'answer': 0 }));

        const val1 = 2, val2 = 7;
        const result_post = await restRequest('post',val1,val2);
        const expected_post = JSON.parse(JSON.stringify({ 'answer': val1 * val2 }));
        
        expect(result_get).toStrictEqual(expected_get);
        expect(result_post).toStrictEqual(expected_post);

        server.close();
    });

});