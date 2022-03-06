import { create } from 'apisauce';
import storage from '../auth/storage';
import cache from '../utility/cache';

import settings from '../config/settings';

const apiClient = create({
    // baseURL: 'http://192.168.43.52:9000/api',
    baseURL: settings.apiUrl,
});

apiClient.addAsyncRequestTransform(async (request) => {
    try {
        const authToken = await storage.getToken();
        if (!authToken) return;
        request.headers["x-auth-token"] = authToken;
    } catch (error) {
        console.log("Auth Token Rejected!", error);
    }
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
    // before logic
    const response = await get(url, params, axiosConfig);
    if (response.ok) {
        cache.store(url, response.data);
        return response;
    }
    //after logic

    const data = await cache.get(url);
    return data ? { ok: true, data } : response;
}

export default apiClient;


// apiClient.get('/listings').then(response => {
//     if (!response.ok){
//         response.problem
//     }
// })