import axios from 'axios';
const URL = 'http://localhost:8080/cal';

export const restRequest = async (request:string, val1=0, val2=0) => {
    try {
        let response;
        if (request === 'get') {
            response = await axios.get(
                URL,
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            );
        } else {
            response = await axios.post(
                URL,
                { 'val1': val1.toString(), 'val2': val2.toString() },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            );
        }
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
};

(async() => {
    const result = await restRequest('post', 2, 7);
    console.log(result);
})();